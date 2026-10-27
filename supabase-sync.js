// ══════════════════════════════════════════
// BETTER YOU — Cloud Sync Layer
// ══════════════════════════════════════════

const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── In-memory cache ──
let _cloudCache = {};
let _cloudUser = null;
let _cloudProfile = null;

// ── AUTH ──────────────────────────────────
async function cloudSignUp(email, password, name, gender) {
  const { data, error } = await _sb.auth.signUp({
    email, password,
    options: { data: { name, gender } }
  });
  if (error) throw error;
  return data.user;
}

async function cloudSignIn(email, password) {
  const { data, error } = await _sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

async function cloudSignOut() {
  await _sb.auth.signOut();
  _cloudCache = {};
  _cloudUser = null;
  _cloudProfile = null;
}

async function cloudGetUser() {
  const { data: { user } } = await _sb.auth.getUser();
  return user;
}

// ── LOAD ALL USER DATA INTO CACHE ─────────
async function cloudLoadAll() {
  const user = await cloudGetUser();
  if (!user) {
    _cloudCache = {};
    _cloudUser = null;
    _cloudProfile = null;
    return false;
  }
  _cloudUser = user;

  const [ud, gd, pf] = await Promise.all([
    _sb.from('user_data').select('key,value'),
    _sb.from('global_data').select('key,value'),
    _sb.from('profiles').select('*').eq('id', user.id).single()
  ]);

  if (ud.data) ud.data.forEach(r => { _cloudCache[r.key] = r.value; });
  
  // Force global data (like bn_yt_links) to download into memory
  if (gd.data) {
    gd.data.forEach(r => { 
      _cloudCache['@g/' + r.key] = r.value; 
      
      // If this is the videos, update the global variable immediately
      if (r.key === 'bn_yt_links' && typeof window.ytLinks !== 'undefined') {
        window.ytLinks = r.value;
      }
    });
  }
  
  if (pf.error) console.error('Profile fetch failed:', pf.error);
  if (pf.data) _cloudProfile = pf.data;

  return true;
}

// ── PUSH HELPERS ──────────────────────────
async function _pushUser(key, value) {
  if (!_cloudUser) return;
  await _sb.from('user_data').upsert(
    { user_id: _cloudUser.id, key, value, updated_at: new Date().toISOString() },
    { onConflict: 'user_id,key' }
  );
}

async function _pushGlobal(key, value) {
  await _sb.from('global_data').upsert(
    { key, value, updated_at: new Date().toISOString() },
    { onConflict: 'key' }
  );
}

// ── KEY MAPPING ───────────────────────────
function _mapKey(localKey) {
  if (localKey === 'bn_yt_links' || localKey === 'bn_public_exercises') {
    return { scope: 'global', key: localKey };
  }
  
  if (localKey.startsWith('bn_yt_links')) {
    return { scope: 'global', key: 'bn_yt_links' };
  }

  if (localKey === 'bn_session' || localKey === 'bn_users') {
    return { scope: 'skip', key: localKey };
  }
  
  const m = localKey.match(/^(bn_[a-z_]+?)_[^_]+@[^_]+$/i);
  if (m) return { scope: 'user', key: m[1] };
  
  return { scope: 'user', key: localKey };
}

// ── REPLACE gs() and ss() ─────────────────
window.gs = function(localKey, fallback) {
  try {
    const m = _mapKey(localKey);
    if (m.scope === 'skip') {
      const v = localStorage.getItem(localKey);
      return v ? JSON.parse(v) : fallback;
    }
    const cacheKey = m.scope === 'global' ? '@g/' + m.key : m.key;
    if (Object.prototype.hasOwnProperty.call(_cloudCache, cacheKey)) {
      return _cloudCache[cacheKey];
    }
    const local = localStorage.getItem(localKey);
    return local ? JSON.parse(local) : fallback;
  } catch { return fallback; }
};

window.ss = function(localKey, value) {
  try {
    const m = _mapKey(localKey);
    if (m.scope === 'skip') {
      localStorage.setItem(localKey, JSON.stringify(value));
      return;
    }
    const cacheKey = m.scope === 'global' ? '@g/' + m.key : m.key;
    _cloudCache[cacheKey] = value;
    
    // Immediately update the global variable so it doesn't wait for network
    if (m.key === 'bn_yt_links' && typeof window.ytLinks !== 'undefined') {
      window.ytLinks = value;
    }
    
    // Push to Supabase
    if (m.scope === 'global') {
      _pushGlobal(m.key, value).then(() => {
         console.log('Global save successful:', m.key);
      }).catch(err => {
         console.error('Global save FAILED:', err);
         toast('Database Error: ' + err.message, 'warning');
      });
    }
    else {
      _pushUser(m.key, value).catch(()=>{});
    }
    
    try { localStorage.setItem(localKey, JSON.stringify(value)); } catch {}
  } catch (err) { 
    console.error(err); 
  }
};

// ── ADMIN HELPERS ─────────────────────────
async function cloudGetAllProfiles() {
  const { data, error } = await _sb.from('profiles').select('*').order('created_at');
  return error ? [] : (data || []);
}

async function cloudGetAllUserDataKey(key) {
  const { data, error } = await _sb.from('user_data').select('user_id,value').eq('key', key);
  return error ? [] : (data || []);
}

// ══════════════════════════════════════════
// SESSION INITIALIZATION
// ══════════════════════════════════════════

async function cloudInitSession(onReady) {
  let finished = false;

  const timeout = setTimeout(() => {
    if (!finished) {
      finished = true;
      console.warn('cloudInitSession: timed out');
      if (onReady) onReady(false);
    }
  }, 4000);

  try {
    const { data: { session } } = await _sb.auth.getSession();

    if (session) {
      await cloudLoadAll();
      if (!finished) {
        finished = true;
        clearTimeout(timeout);
        if (onReady) onReady(true);
      }
    } else {
      if (!finished) {
        finished = true;
        clearTimeout(timeout);
        if (onReady) onReady(false);
      }
    }

    _sb.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        await cloudLoadAll();
        if (onReady) onReady(true);
      }
      if (event === 'SIGNED_OUT') {
        _cloudCache = {};
        _cloudUser = null;
        _cloudProfile = null;
        if (onReady) onReady(false);
      }
    });
  } catch (e) {
    console.error('cloudInitSession failed:', e);
    if (!finished) {
      finished = true;
      clearTimeout(timeout);
      if (onReady) onReady(false);
    }
  }
}