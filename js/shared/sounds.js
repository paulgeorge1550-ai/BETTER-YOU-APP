// Better You — sounds.js
// Beeps, ticks, and the 5-4-3-2-1-GO voice countdown.

let _audioCtx = null;
function _ctx(){
  if(!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return _audioCtx;
}

function beep(freq=880, dur=0.15, vol=0.30){
  try{
    const c = _ctx();
    if(c.state === 'suspended') c.resume();
    const o = c.createOscillator();
    const g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    o.start();
    o.stop(c.currentTime + dur);
  }catch(e){}
}
function beepTick(){ beep(1000, 0.06, 0.20); }
function beepDone(){ beep(1200, 0.18, 0.38); setTimeout(()=>beep(1600, 0.22, 0.38), 130); }

// Voice — pick a deep male / female English voice
function _pickVoice(gender){
  if(!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if(!voices.length) return null;
  const wantFemale = gender === 'female';
  const prefs = wantFemale
    ? ['Samantha','Karen','Moira','Google UK English Female','Google US English','Zira','Female']
    : ['Daniel','Alex','Google UK English Male','David','Fred','Rishi','Male'];
  for(const p of prefs){
    const v = voices.find(v => v.name && v.name.includes(p));
    if(v) return v;
  }
  return voices.find(v => v.lang && v.lang.startsWith('en')) || voices[0];
}

function speak(text, gender='male', opts={}){
  try{
    if(!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    const v = _pickVoice(gender);
    if(v) u.voice = v;
    u.rate   = opts.rate   != null ? opts.rate   : 0.95;
    u.pitch  = opts.pitch  != null ? opts.pitch  : (gender === 'female' ? 1.05 : 0.65);
    u.volume = opts.volume != null ? opts.volume : 1.0;
    window.speechSynthesis.speak(u);
  }catch(e){}
}

// Full-screen 5-4-3-2-1-GO intro
function startArmyIntro(onDone){
  const ov    = document.getElementById('army-ov');
  const numEl = document.getElementById('army-num');
  if(!ov || !numEl){ if(onDone) onDone(); return; }
  const gender = (typeof user !== 'undefined' && user && user.gender) || 'male';
  const seq = [
    { t:'5', say:'Five',  rate:0.95, pitch:0.60 },
    { t:'4', say:'Four',  rate:0.95, pitch:0.60 },
    { t:'3', say:'Three', rate:0.95, pitch:0.60 },
    { t:'2', say:'Two',   rate:0.95, pitch:0.60 },
    { t:'1', say:'One',   rate:0.95, pitch:0.60 },
    { t:'GO',say:'Go',    rate:1.35, pitch:0.55 }
  ];
  ov.classList.add('open');
  let i = 0;
  const step = () => {
    if(i >= seq.length){
      ov.classList.remove('open');
      setTimeout(()=>{ if(onDone) onDone(); }, 350);
      return;
    }
    const s = seq[i];
    numEl.textContent = s.t;
    numEl.classList.remove('pop'); void numEl.offsetWidth; numEl.classList.add('pop');
    beepTick();
    speak(s.say, gender, { rate:s.rate, pitch:s.pitch });
    i++;
    setTimeout(step, 900);
  };
  step();
}

// Fire the "5-4-3-2-1" voice only, no full-screen overlay (used inside rest timer)

// Cache the voice so it never randomly switches mid-countdown
let _cachedVoice = null;
let _cachedVoiceGender = null;
function _getVoice(gender){
  if(_cachedVoice && _cachedVoiceGender === gender) return _cachedVoice;
  _cachedVoice = _pickVoice(gender);
  _cachedVoiceGender = gender;
  return _cachedVoice;
}

// Speak a single number. Cancels any pending speech first so they never stack.
function speakNumber(word, gender, opts){
  try{
    if(!('speechSynthesis' in window)) return;
    // Cancel anything still queued so the number lands on time
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    const v = _getVoice(gender);
    if(v) u.voice = v;
    u.rate   = opts && opts.rate   != null ? opts.rate   : 0.95;
    u.pitch  = opts && opts.pitch  != null ? opts.pitch  : (gender === 'female' ? 1.05 : 0.60);
    u.volume = opts && opts.volume != null ? opts.volume : 1.0;
    window.speechSynthesis.speak(u);
  }catch(e){}
}

// Kept for backward-compat — but no longer used by the timer.
function speakFinalFive(gender, onDone){
  const words = ['Five','Four','Three','Two','One','Go'];
  let i = 0;
  const step = () => {
    if(i >= words.length){ if(onDone) onDone(); return; }
    const w = words[i];
    beepTick();
    speakNumber(w, gender, w === 'Go' ? {rate:1.35, pitch:0.55} : {rate:0.95, pitch:0.60});
    i++;
    setTimeout(step, 1000);
  };
  step();
}

// Some browsers load voices asynchronously
if('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = () => { _pickVoice('male'); };
  // Kick a warm-up so the first real speak is instant
  setTimeout(()=>{ try{ speak('', 'male'); }catch(e){} }, 500);
}