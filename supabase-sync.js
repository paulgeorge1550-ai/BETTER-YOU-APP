// ══════════════════════════════════════════
// BETTER YOU — Cloud Sync Layer
// ══════════════════════════════════════════
// This file:
//   1. Creates the Supabase client
//   2. Handles auth (signup/signin/signout)
//   3. Loads all user data into memory
//   4. Replaces gs() and ss() with cloud-aware versions
// Loaded BEFORE app.js in index.html.

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
  if (gd.data) gd.data.forEach(r => { _cloudCache['@g/' + r.key] = r.value; });
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
// Local app keys → cloud key/scope
function _mapKey(localKey) {
  // Global (shared across all users)
  if (localKey === 'bn_yt_links' || localKey === 'bn_public_exercises') {
    return { scope: 'global', key: localKey };
  }
  // Handled by Supabase Auth — not stored as data
  if (localKey === 'bn_session' || localKey === 'bn_users') {
    return { scope: 'skip', key: localKey };
  }
  // Strip email suffix: bn_habits_foo@x.com → bn_habits
  const m = localKey.match(/^(bn_[a-z_]+?)_[^_]+@[^_]+$/i);
  if (m) return { scope: 'user', key: m[1] };
  // Everything else user-scoped
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
    // Fallback to localStorage (pre-migration data)
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
    // Fire-and-forget push
    if (m.scope === 'global') _pushGlobal(m.key, value).catch(()=>{});
    else _pushUser(m.key, value).catch(()=>{});
    // Local fallback for offline
    try { localStorage.setItem(localKey, JSON.stringify(value)); } catch {}
  } catch {}
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