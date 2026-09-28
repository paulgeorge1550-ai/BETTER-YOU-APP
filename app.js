const ICONS={
moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
'arrow-left':'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
'arrow-right':'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
fire:'<path d="M12 2s4 5 4 9a4 4 0 0 1-8 0c0-1 .3-2 .7-2.8C7.5 9.5 6 11.4 6 13.8a6 6 0 0 0 12 0C18 8.5 14 4 12 2z"/>',
cross:'<path d="M12 3v18"/><path d="M7 8h10"/>',
bible:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="12" y1="6" x2="12" y2="12"/><line x1="9" y1="9" x2="15" y2="9"/>',
book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
books:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="15" y2="7"/>',
scroll:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/>',
pray:'<path d="M12 3v5"/><path d="M9 6l3-3 3 3"/><path d="M8 10c-1 1-1.5 2.5-1.5 4 0 3 1.5 6 3.5 8h4c2-2 3.5-5 3.5-8 0-1.5-.5-3-1.5-4"/>',
edit:'<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M6 3h12v6a6 6 0 0 1-12 0z"/>',
zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
sprout:'<path d="M7 20h10"/><path d="M12 20V10"/><path d="M12 10c-3 0-6-2-6-6 3 0 6 2 6 6z"/>',
'graduation-cap':'<path d="M22 10L12 5 2 10l10 5 10-5z"/>',
sunrise:'<path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/>',
'phone-off':'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27"/>',
check:'<polyline points="20 6 9 17 4 12"/>',
party:'<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="m22 2-2.24.75"/>',
search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91"/>',
globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>',
'bar-chart':'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
'trending-up':'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>',
play:'<polygon points="5 3 19 12 5 21 5 3"/>',
dumbbell:'<path d="M6.5 6.5h11v11h-11z"/><path d="M3 9v6M21 9v6M6 4v3M18 4v3M6 17v3M18 17v3"/>',
brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44"/>',
mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>',
ear:'<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10"/>',
dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
warning:'<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86"/>',
mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
refresh:'<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>',
'thumbs-up':'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',
'heart':'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
'clap':'<path d="M4 20h16"/><path d="M12 4v6"/><path d="m8 6 4-4 4 4"/><circle cx="12" cy="14" r="6"/>',
star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
'check-square':'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
};
function ico(name,size=16){const path=ICONS[name];if(!path)return '';return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`}
function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{if(el.dataset.iconDone)return;const name=el.getAttribute('data-icon');const size=parseInt(el.getAttribute('data-size'))||16;el.innerHTML=ico(name,size);el.dataset.iconDone='1'})}
const LIFE_SKILLS=[
  {cat:'Communication',name:'Public Speaking',desc:'Command attention and deliver ideas with clarity and confidence.',icon:'mic'},
  {cat:'Communication',name:'Storytelling',desc:'Communicate through compelling narratives that move and inspire people.',icon:'book'},
  {cat:'Communication',name:'Active Listening',desc:'The art of truly hearing others and building deep connection.',icon:'ear'},
  {cat:'Financial Literacy',name:'Budgeting',desc:'Take full control of your money with practical budgeting systems.',icon:'bar-chart'},
  {cat:'Financial Literacy',name:'Investing',desc:'Understand principles of building wealth through smart investing.',icon:'trending-up'},
  {cat:'Financial Literacy',name:'Money Management',desc:'Develop a healthy relationship with money.',icon:'dollar'},
  {cat:'Productivity',name:'Time Management',desc:'Structured systems to maximise your daily output.',icon:'clock'},
  {cat:'Productivity',name:'Goal Setting',desc:'Set goals that are clear, meaningful, and consistently achieved.',icon:'target'},
  {cat:'Productivity',name:'Deep Focus',desc:'Train your ability to work without distraction.',icon:'brain'},
];
function renderSkillsGrid(targetId){
  const el=document.getElementById(targetId);if(!el)return;
  el.innerHTML=LIFE_SKILLS.map(s=>`<div class="ls-box" onclick="glowTop(this,'green');toast('Opening ${s.name}','${s.icon}')"><div class="ls-ico"><span data-icon="${s.icon}" data-size="24" style="color:var(--acc)"></span></div><div class="ls-cat-label">${s.cat}</div><div class="ls-nm">${s.name}</div><div class="ls-desc">${s.desc}</div></div>`).join('');
  hydrateIcons(el);
}
const WORKOUTS={
  beginner:{
    0:{label:'Sunday',tag:'Rest & Stretch',isRest:true,restDesc:'Full Body Stretch — 15 minutes of gentle stretching for the whole body.'},
    1:{label:'Monday',tag:'Push Day',exs:[
      {id:'b_m1',name:'Incline Push-ups',reps:'3 × 10',sets:3,howto:'Place hands on an elevated surface (chair, bench, or step) shoulder-width apart. Lower your chest toward the surface keeping your body completely straight from head to heels. Push back up to starting position.',focus:'Keep core tight, body in a straight line, lower until chest touches or nearly touches the surface.'},
      {id:'b_m2',name:'Regular Push-ups',reps:'2 × 10',sets:2,howto:'Start with hands shoulder-width apart on the floor, body straight from head to heels. Lower your chest until it nearly touches the floor. Push up explosively.',focus:'Elbows at 45 degrees from body, do not let hips sag or pike up.'},
      {id:'b_m3',name:'Knee Diamond Push-ups',reps:'2 × 10',sets:2,howto:'Form a diamond shape with your thumbs and index fingers touching directly under your chest. Rest your knees on the floor. Lower your chest toward your hands, then push back up.',focus:'Keep elbows close to your body, feel the triceps working.'},
      {id:'b_m4',name:'Wall Plank',reps:'2 × 20 sec',sets:2,howto:'Start in a push-up position with your feet touching a wall behind you. Your body should be straight. Hold this position without moving.',focus:'Squeeze your glutes and abs, do not let your hips drop toward the floor.'},
      {id:'b_m5',name:'Knee Pike Push-ups',reps:'2 × 5',sets:2,howto:'Start on your knees, lift your hips high into the air forming an upside-down V shape. Lower your head toward the floor between your hands, then push back up through your shoulders.',focus:'Keep hips high throughout, elbows pointing slightly back.'},
      {id:'b_m6',name:'Dead Hang',reps:'2 × 15 sec',sets:2,howto:'Grip a pull-up bar with hands shoulder-width apart, palms facing away. Let your body hang freely with feet off the ground. Hold for the required time.',focus:'Relax your shoulders slightly, do not swing, breathe normally.'},
    ]},
    2:{label:'Tuesday',tag:'Pull Day',exs:[
      {id:'b_t1',name:'Negative Pull-ups',reps:'3 × 5',sets:3,howto:'Jump or step up to the top of a pull-up position (chin over the bar). Lower yourself as slowly as possible, taking 3–5 seconds to reach a full hang.',focus:'Control every inch of the descent, do not drop or let go suddenly.'},
      {id:'b_t2',name:'Inverted Rows (High Bar)',reps:'3 × 10',sets:3,howto:'Set a bar at waist height. Lie under it, grip shoulder-width apart, keep body straight with heels on the floor. Pull your chest toward the bar, then lower slowly.',focus:'Keep body rigid like a plank, squeeze shoulder blades together at the top.'},
      {id:'b_t3',name:'Regular Push-ups',reps:'2 × 10',sets:2,howto:'Start with hands shoulder-width apart, body straight. Lower chest to floor, push up.',focus:'Elbows at 45 degrees, full range of motion.'},
      {id:'b_t4',name:'Spiderman Push-ups (Slow)',reps:'2 × 5 per side',sets:2,howto:'Start in push-up position. As you lower your body, bring your right knee toward your right elbow. Return to start, then alternate sides on the next rep.',focus:'Move very slowly, keep hips stable, do not let them rise or sag.'},
      {id:'b_t5',name:'Knee Diamond Push-ups',reps:'2 × 10',sets:2,howto:'Diamond hand position on knees, lower chest to hands, push up.',focus:'Elbows close to body, triceps engaged.'},
      {id:'b_t6',name:'Plank',reps:'2 × 25 sec',sets:2,howto:'Place forearms on the floor directly under shoulders, elbows aligned. Extend legs back, body straight from head to heels. Hold.',focus:'Squeeze glutes and abs, do not let hips sag or rise.'},
    ]},
    3:{label:'Wednesday',tag:'Rest Day',isRest:true,restDesc:'Light Stretch + Joint Mobility — 20 minutes. Move every joint through its full range.'},
    4:{label:'Thursday',tag:'Core Day',exs:[
      {id:'b_th1',name:'Russian Twists (no weight)',reps:'3 × 10',sets:3,howto:'Sit on the floor, knees bent, feet flat. Lean back slightly keeping your back straight. Rotate your torso left and right, touching the floor on each side.',focus:'Keep core tight, spine straight. Twist from torso, not arms. Slow controlled movement.'},
      {id:'b_th2',name:'Lying Leg Raises',reps:'3 × 10',sets:3,howto:'Lie flat on your back with legs straight. Place hands under your lower back for support. Raise both legs until vertical, then lower slowly without touching the floor.',focus:'Keep lower back pressed to floor, legs straight, slow controlled lowering.'},
      {id:'b_th3',name:'Spiderman Push-ups (Slow)',reps:'2 × 5 per side',sets:2,howto:'In push-up position, as you lower bring one knee toward same-side elbow. Alternate sides.',focus:'Slow movement, hips stable, full range.'},
      {id:'b_th4',name:'Tucked V-ups',reps:'2 × 10',sets:2,howto:'Lie flat, arms overhead. Bring knees to chest and arms forward simultaneously, meeting in the middle. Lower slowly.',focus:'One smooth movement, abs tight, control the lowering phase.'},
      {id:'b_th5',name:'Hollow Hold (static)',reps:'2 × 15 sec',sets:2,howto:'Lie on back. Raise shoulders and legs slightly off floor. Hold the position without rocking.',focus:'Lower back stays flat on floor. Maintain consistent body angle.'},
      {id:'b_th6',name:'Knee Diamond Push-ups',reps:'2 × 10',sets:2,howto:'Diamond hand position on knees, lower chest to hands, push up.',focus:'Elbows close, triceps engaged, controlled.'},
    ]},
    5:{label:'Friday',tag:'Leg Day',exs:[
      {id:'b_f1',name:'Jogging (Warm-Up)',reps:'1 round (5 min)',sets:1,noTimer:true,howto:'Jog at an easy, comfortable pace for 5 minutes. Keep shoulders relaxed, breathe steadily through your nose.',focus:'Warm up joints, do not sprint. Light rhythm to activate muscles.'},
      {id:'b_f2',name:'Bodyweight Squats',reps:'3 × 15',sets:3,howto:'Stand feet shoulder-width apart, toes slightly out. Lower until thighs are parallel to floor. Push through heels to stand.',focus:'Chest tall, knees over toes, full depth, pause at bottom.'},
      {id:'b_f3',name:'Glute Bridges',reps:'3 × 15',sets:3,howto:'Lie on back, knees bent, feet flat on floor. Push through heels to raise hips. Squeeze glutes at top. Lower slowly.',focus:'Do not arch lower back. Engage glutes fully at top.'},
      {id:'b_f4',name:'Two-leg Calf Raises',reps:'3 × 20',sets:3,howto:'Stand with feet hip-width apart, hands on wall for balance. Raise both heels as high as possible. Lower slowly.',focus:'Full range of motion, slow controlled descent.'},
      {id:'b_f5',name:'Regular Push-ups',reps:'2 × 10',sets:2,howto:'Hands shoulder-width, body straight. Lower chest, push up.',focus:'Elbows at 45 degrees, core tight.'},
      {id:'b_f6',name:'Negative Pull-ups',reps:'3 × 5',sets:3,howto:'Jump to the top position (chin over bar). Lower yourself as slowly as possible (3–5 seconds).',focus:'Control the entire descent, do not drop.'},
    ]},
    6:{label:'Saturday',tag:'Full Body',exs:[
      {id:'b_s1',name:'Plank',reps:'2 × 25 sec',sets:2,howto:'Forearms on floor, body straight from head to heels. Hold.',focus:'Squeeze glutes and abs, hips level, breathe steadily.'},
      {id:'b_s2',name:'Negative Pull-ups to Knee Raise',reps:'2 × 5',sets:2,howto:'Jump to top position. As you lower, raise knees toward chest. Lower both simultaneously.',focus:'Control descent, abs engaged during knee raise.'},
      {id:'b_s3',name:'Incline Push-ups',reps:'2 × 10',sets:2,howto:'Hands on elevated surface, body straight. Lower chest, push up.',focus:'Full range, body rigid, core tight.'},
      {id:'b_s4',name:'Knee Pike Push-ups',reps:'2 × 5',sets:2,howto:'On knees, hips raised in inverted V. Lower head between hands, push back up.',focus:'Hips stay high, elbows back.'},
      {id:'b_s5',name:'Bear Crawl',reps:'3 × 5 steps',sets:3,howto:'On hands and knees, hover knees 2 inches off floor. Move forward crawling opposite hand-foot simultaneously.',focus:'Keep core tight, hips low and level, move slowly.'},
      {id:'b_s6',name:'Bodyweight Squats',reps:'2 × 15',sets:2,howto:'Full depth squat, chest tall, knees over toes.',focus:'Control descent, drive through heels.'},
    ]},
  },
  intermediate:{
    0:{label:'Sunday',tag:'Rest & Stretch',isRest:true,restDesc:'Full Body Stretch — 15 minutes of targeted mobility work.'},
    1:{label:'Monday',tag:'Push Day',exs:[
      {id:'i_m1',name:'Wall Handstand Hold',reps:'2 × 30 sec',sets:2,howto:'Face away from a wall. Place hands shoulder-width apart on the floor. Walk your feet up the wall until your body is vertical against the wall. Hold the position.',focus:'Keep core tight, squeeze glutes, avoid arching your lower back, push strongly through your shoulders.'},
      {id:'i_m2',name:'Archer Push-ups',reps:'3 × 15',sets:3,howto:'Spread arms wider than shoulder-width. Lower toward one side while opposite arm extends straight. Push back to center and alternate.',focus:'Control movement, core engaged, no chest sagging, full extension on the straight arm.'},
      {id:'i_m3',name:'Diamond Push-ups',reps:'2 × 15',sets:2,howto:'Form a diamond shape with thumbs and index fingers under your chest. Lower while keeping elbows close. Push up and squeeze at top.',focus:'Elbows tight to body, squeeze triceps and chest at top, controlled descent.'},
      {id:'i_m4',name:'Pike Push-ups',reps:'2 × 10',sets:2,howto:'Form inverted V with body. Lower head toward floor between hands. Push back up through shoulders.',focus:'Keep hips high throughout, elbows angled back slightly.'},
      {id:'i_m5',name:'Mike Tyson Push-ups',reps:'2 × 10',sets:2,howto:'Start in crouched position close to floor. Shoot body forward and up, then recoil back smoothly like a wave.',focus:'Stay controlled, engage shoulders and abs, fluid movement.'},
      {id:'i_m6',name:'Pull-ups',reps:'1 × 10',sets:1,howto:'Grip bar shoulder-width, pull chest toward bar. Lower slowly until arms fully extend.',focus:'Pull with back muscles not just arms, avoid swinging, controlled descent.'},
    ]},
    2:{label:'Tuesday',tag:'Pull Day',exs:[
      {id:'i_t1',name:'Pull-ups',reps:'3 × 10',sets:3,howto:'Grip bar shoulder-width, pull chest toward bar. Lower slowly.',focus:'Back muscles lead the pull, avoid swinging, slow descent.'},
      {id:'i_t2',name:'Towel Rows',reps:'3 × 15',sets:3,howto:'Hold a sturdy towel over a bar or door. Lean back, body straight. Pull chest toward anchor point.',focus:'Body rigid, squeeze shoulder blades at top, slow lowering.'},
      {id:'i_t3',name:'Archer Push-ups',reps:'2 × 15',sets:2,howto:'Wide arm position, lower toward one side while opposite arm extends. Alternate.',focus:'Control, core tight, full range.'},
      {id:'i_t4',name:'Spiderman Push-ups',reps:'2 × 10',sets:2,howto:'Lower and bring knee to same-side elbow simultaneously. Alternate sides.',focus:'Slow movement, hips stable, controlled.'},
      {id:'i_t5',name:'Diamond Push-ups',reps:'2 × 15',sets:2,howto:'Diamond hand position. Lower with elbows close, push up and squeeze.',focus:'Triceps engaged, elbows close, full squeeze at top.'},
      {id:'i_t6',name:'Plank',reps:'1 × 60 sec',sets:1,howto:'Forearms on floor, body straight. Hold for 60 seconds breathing normally.',focus:'Hips perfectly level, abs and glutes tight throughout.'},
    ]},
    3:{label:'Wednesday',tag:'Rest Day',isRest:true,restDesc:'Light Stretch + Joint Mobility — 20 minutes.'},
    4:{label:'Thursday',tag:'Core Day',exs:[
      {id:'i_th1',name:'Weighted Russian Twists (5kg)',reps:'3 × 15',sets:3,howto:'Sit with knees bent, hold 5kg weight close to chest. Lean back slightly. Rotate torso left and right, tapping floor each side.',focus:'Core tight, spine straight, rotate from torso not arms, slow controlled movement.'},
      {id:'i_th2',name:'Hanging Leg Raises',reps:'3 × 10',sets:3,howto:'Hang from pull-up bar. Raise legs by curling hips toward chest. Lower slowly.',focus:'Avoid swinging, curl pelvis upward, keep abs engaged throughout.'},
      {id:'i_th3',name:'Spiderman Push-ups',reps:'2 × 15',sets:2,howto:'Lower and bring knee to elbow simultaneously. Alternate sides each rep.',focus:'Hips stable, slow movement, full range.'},
      {id:'i_th4',name:'Full V-ups',reps:'2 × 15',sets:2,howto:'Lie flat arms overhead. Raise legs and arms simultaneously toward middle. Lower slowly.',focus:'One smooth movement, abs tight, control lowering phase.'},
      {id:'i_th5',name:'Hollow Rocks',reps:'2 × 30 sec',sets:2,howto:'Lie on back, raise shoulders and legs slightly. Rock forward and backward gently maintaining position.',focus:'Lower back stays flat, consistent body angle, controlled rocking motion.'},
      {id:'i_th6',name:'Diamond Push-ups',reps:'1 × 20',sets:1,howto:'Diamond hand position, lower with elbows close, push up.',focus:'Elbows tight, triceps engaged, controlled.'},
    ]},
    5:{label:'Friday',tag:'Leg Day',exs:[
      {id:'i_f1',name:'Jogging + High Knees',reps:'1 round',sets:1,noTimer:true,howto:'Jog for 2 minutes, then transition into high knees (drive knees above hip height alternating quickly) for 1 minute. Repeat.',focus:'Stay light on feet, drive knees high, arms pumping in rhythm.'},
      {id:'i_f2',name:'Jump Squats',reps:'3 × 15',sets:3,howto:'Full squat depth, then explode upward. Land softly on mid-foot, absorb impact, immediately go into next rep.',focus:'Full depth, explosive jump, soft landing on mid-foot.'},
      {id:'i_f3',name:'Glute Bridges (single-leg)',reps:'3 × 15 per leg',sets:3,howto:'Lie on back, one knee bent foot flat, other leg extended. Push through planted heel, raise hips. Squeeze glutes at top.',focus:'Keep hips level, squeeze glutes hard at top, do not let hips drop.'},
      {id:'i_f4',name:'Single-leg Calf Raises',reps:'3 × 20 per leg',sets:3,howto:'Stand on one leg (hold support). Raise heel as high as possible. Lower to full stretch.',focus:'Full range of motion, controlled descent, balance maintained.'},
      {id:'i_f5',name:'Mike Tyson Push-ups',reps:'2 × 15',sets:2,howto:'Crouched start, shoot body forward and up, recoil back.',focus:'Fluid wave movement, shoulders and abs engaged.'},
      {id:'i_f6',name:'Pull-ups',reps:'1 × 15',sets:1,howto:'Full grip, pull chest to bar, lower controlled.',focus:'Back muscles lead, no swinging, slow descent.'},
    ]},
    6:{label:'Saturday',tag:'Full Body',exs:[
      {id:'i_s1',name:'Wall Handstand Hold',reps:'2 × 30 sec',sets:2,howto:'Walk feet up wall to vertical. Hold active straight body position.',focus:'Core tight, glutes squeezed, push through shoulders.'},
      {id:'i_s2',name:'Pull-up to Knee Raise',reps:'2 × 10',sets:2,howto:'Full pull-up, then at top raise knees to chest. Lower controlled.',focus:'Avoid swinging, abs engaged during knee raise.'},
      {id:'i_s3',name:'Archer Push-ups',reps:'2 × 15',sets:2,howto:'Lower to one side while opposite arm extends. Alternate.',focus:'Control, core tight, full range.'},
      {id:'i_s4',name:'Pike Push-ups',reps:'2 × 10',sets:2,howto:'Inverted V position, lower head between hands, push up.',focus:'Hips high, elbows back, full range.'},
      {id:'i_s5',name:'Handstand Walkouts',reps:'3 × 5',sets:3,howto:'Start in wall handstand. Walk hands out a few steps. Walk back.',focus:'Core tight, slow controlled movement, balance maintained.'},
      {id:'i_s6',name:'Jump Squats',reps:'2 × 15',sets:2,howto:'Full squat, explosive jump, soft landing.',focus:'Full depth, explosive, land softly.'},
    ]},
  },
  professional:{
    0:{label:'Sunday',tag:'Rest & Stretch',isRest:true,restDesc:'Full Body Stretch — 15 minutes of advanced mobility and recovery work.'},
    1:{label:'Monday',tag:'Push Day',exs:[
      {id:'p_m1',name:'Free Handstand Hold',reps:'2 × 35 sec',sets:2,howto:'Kick up to a freestanding handstand without wall support. Stack wrists, shoulders, hips, and feet. Engage every muscle to maintain balance.',focus:'Fingertips grip floor for balance, core iron-tight, gaze between hands.'},
      {id:'p_m2',name:'Archer Push-ups',reps:'4 × 20',sets:4,howto:'Wide arm position, lower to one side with full depth, opposite arm fully extended. Return to center. Alternate.',focus:'Maximum depth each rep, full extension, core braced throughout.'},
      {id:'p_m3',name:'Diamond Push-ups',reps:'3 × 20',sets:3,howto:'Diamond hand position. Lower with elbows close to body. Explosive press up.',focus:'Elbows tight, powerful press, squeeze at top.'},
      {id:'p_m4',name:'Handstand Push-ups',reps:'3 × 5',sets:3,howto:'In wall handstand, lower head toward floor by bending elbows. Press back up to full arm extension.',focus:'Full range of motion, elbows track slightly forward, explosive press.'},
      {id:'p_m5',name:'Mike Tyson Push-ups',reps:'3 × 20',sets:3,howto:'Explosive version: fast controlled reps, full depth each time.',focus:'Power and control simultaneously, full range, no half reps.'},
      {id:'p_m6',name:'Weighted Pull-ups (+10kg)',reps:'3 × 10',sets:3,howto:'Attach weight vest or dumbbell between feet. Full pull to chest, lower slowly to full hang.',focus:'No swinging, back muscles lead, controlled descent all the way down.'},
    ]},
    2:{label:'Tuesday',tag:'Pull Day',exs:[
      {id:'p_t1',name:'Weighted Pull-ups (+15kg)',reps:'4 × 10',sets:4,howto:'Attach 15kg weight. Full pull-up, chest to bar. Lower slowly to full hang.',focus:'Back muscles lead, no kipping, full range each rep.'},
      {id:'p_t2',name:'One-arm Towel Rows',reps:'3 × 10 per arm',sets:3,howto:'Single arm on towel, other hand on hip or hip for balance. Row to hip keeping elbow close to body.',focus:'Full retraction of shoulder blade, no rotation of torso, controlled lowering.'},
      {id:'p_t3',name:'Archer Push-ups',reps:'4 × 20',sets:4,howto:'Maximum width, deep depth, full extension of straight arm.',focus:'Power and control, full range, no shortcuts.'},
      {id:'p_t4',name:'Explosive Spiderman Push-ups',reps:'3 × 15',sets:3,howto:'Fast tempo Spiderman push-ups. Explosive push, bring knee to elbow quickly.',focus:'Explosive power, hip stability, maintain speed and form.'},
      {id:'p_t5',name:'Diamond Push-ups',reps:'3 × 25',sets:3,howto:'Diamond position. Full depth, elbows close. High reps with quality.',focus:'No half reps, full depth, squeeze at top each rep.'},
      {id:'p_t6',name:'Weighted Plank (+20kg)',reps:'3 × 45 sec',sets:3,howto:'Standard plank position with 20kg plate on back. Hold.',focus:'Hips level, abs braced, do not let hips sag under the weight.'},
    ]},
    3:{label:'Wednesday',tag:'Rest Day',isRest:true,restDesc:'Light Stretch + Joint Mobility — 20 minutes of targeted recovery.'},
    4:{label:'Thursday',tag:'Core Day',exs:[
      {id:'p_th1',name:'Weighted Russian Twists (10kg)',reps:'4 × 20',sets:4,howto:'10kg weight, feet elevated and straight. Rotate fully each side touching floor.',focus:'Spine straight, core braced, full rotation from torso.'},
      {id:'p_th2',name:'Toes-to-Bar',reps:'3 × 15',sets:3,howto:'Hang from bar. Raise toes to touch the bar by engaging entire core. Lower controlled.',focus:'No swinging, compress core to raise legs, slow eccentric.'},
      {id:'p_th3',name:'Explosive Spiderman Push-ups',reps:'3 × 20',sets:3,howto:'Fast explosive tempo bringing knee to elbow on each lowering phase.',focus:'Explosive power, hip stability, high quality reps.'},
      {id:'p_th4',name:'Strict V-ups (hands to toes)',reps:'3 × 20',sets:3,howto:'Reach hands all the way to toes at the top. Full compression. Lower slowly.',focus:'Full range, touch hands to toes, slow controlled lowering.'},
      {id:'p_th5',name:'Hollow Rocks (weighted)',reps:'3 × 40 sec',sets:3,howto:'Standard hollow rock position, holding light weight overhead. Rock continuously.',focus:'Lower back flat, consistent angle, controlled rhythm.'},
      {id:'p_th6',name:'One-arm Diamond Push-ups',reps:'2 × 10 per arm',sets:2,howto:'Diamond position, use only one arm (other hand behind back or hip). Lower and press up.',focus:'Extreme core stability required, full range, controlled movement.'},
    ]},
    5:{label:'Friday',tag:'Leg Day',exs:[
      {id:'p_f1',name:'Sprint Intervals',reps:'5 × 50m',sets:5,noTimer:true,howto:'Sprint 50 meters at maximum effort. Walk back. Repeat 5 times.',focus:'Maximum explosive effort each sprint, full recovery walk back.'},
      {id:'p_f2',name:'Pistol Squats (assisted)',reps:'4 × 10 per leg',sets:4,howto:'Hold a support lightly. Stand on one leg, extend other forward. Lower on one leg to full depth. Press up.',focus:'Chest tall, knee tracks over toe, full depth, controlled movement.'},
      {id:'p_f3',name:'Weighted Glute Bridges (+20kg)',reps:'4 × 20',sets:4,howto:'20kg plate on hips. Push through heels, raise hips. Maximum squeeze at top.',focus:'Full hip extension, glutes maximally contracted at top, controlled lowering.'},
      {id:'p_f4',name:'Single-leg Calf Raises (weighted)',reps:'4 × 25 per leg',sets:4,howto:'Hold dumbbell, stand on one leg. Full range calf raise. Slow lower.',focus:'Maximum height, full stretch at bottom, controlled tempo.'},
      {id:'p_f5',name:'Mike Tyson Push-ups',reps:'3 × 25',sets:3,howto:'High rep explosive version. Full range each rep.',focus:'Maintain form through fatigue, full range, no half reps.'},
      {id:'p_f6',name:'Weighted Pull-ups (+15kg)',reps:'3 × 10',sets:3,howto:'15kg attached. Full pull, slow descent.',focus:'Back leads, full range, no swinging.'},
    ]},
    6:{label:'Saturday',tag:'Full Body',exs:[
      {id:'p_s1',name:'Free Handstand Hold',reps:'2 × 40 sec',sets:2,howto:'Freestanding handstand. Engage every muscle. Use fingertips for balance adjustments.',focus:'Full body tension, gaze fixed between hands, fingertip pressure for balance.'},
      {id:'p_s2',name:'Weighted Pull-up to Toes-to-Bar',reps:'3 × 10',sets:3,howto:'With light weight: pull up, then at top continue to raise toes to bar. Lower controlled.',focus:'Smooth transition from pull to compression, no swinging.'},
      {id:'p_s3',name:'Archer Push-ups (feet elevated)',reps:'4 × 20',sets:4,howto:'Feet elevated on a surface, archer push-up movement. Increases shoulder loading.',focus:'Full range, control, greater difficulty from elevated feet.'},
      {id:'p_s4',name:'Handstand Push-ups',reps:'3 × 5',sets:3,howto:'In wall handstand, lower head to floor. Press back to full lock-out.',focus:'Full range, elbows track forward slightly, explosive press.'},
      {id:'p_s5',name:'Handstand Walk (distance)',reps:'3 × 10 steps',sets:3,howto:'From freestanding handstand, walk on hands for 10 steps.',focus:'Shift weight to walking hand, tight core, controlled steps.'},
      {id:'p_s6',name:'Pistol Squats',reps:'3 × 10 per leg',sets:3,howto:'No support. Full pistol squat on each leg. Complete depth. Stand.',focus:'Chest tall, knee alignment, full depth, powerful press.'},
    ]},
  }
};
const DAILY_DRIVES=[
  {q:'"I can do all things through Christ who strengthens me." — Philippians 4:13',c:'Complete your full session without skipping a single set.'},
  {q:'"Do not grow weary in doing good, for in due season you will reap." — Galatians 6:9',c:'Add one extra rep to every set today.'},
  {q:'"Strength and dignity are her clothing." — Proverbs 31:25',c:'Hold your plank 10 seconds beyond your limit.'},
  {q:'"The body achieves what the mind believes." — Napoleon Hill',c:'Complete your session before 9am.'},
  {q:'"Those who hope in the Lord will renew their strength." — Isaiah 40:31',c:'No phone during your entire workout.'},
  {q:'"Excellence is not a singular act but a habit." — Aristotle',c:'Perfect form on every single rep today.'},
  {q:'"Rest and renewal are acts of discipline, not weakness."',c:'Stretch mindfully for 25 uninterrupted minutes.'},
];
const MOTIVATIONS=['Transformation begins with one disciplined day.','Your consistency builds character.','Discipline is choosing what you want most.','Small daily improvements create extraordinary results.'];
const COMM_SEED=[
  {id:1,author:'Amara O.',init:'A',col:'#39FF14',text:'Completed Bible reading AND my full workout this morning!',time:'2 mins ago',r:{l:34,f:28,h:19,c:14},mine:null,comments:[]},
  {id:2,author:'David M.',init:'D',col:'#FFD60A',text:'Week 8 done. First 3 clean sets of pull-ups without assistance.',time:'18 mins ago',r:{l:47,f:33,h:29,c:21},mine:null,comments:['Incredible David!']},
];
let user=null,exProg={},regG='male',commPosts=[...COMM_SEED];
let tSec=0,tTotal=0,tInt=null,timerOnEnd=null;
let selDay=new Date().getDay(),difficulty='beginner',activeExIdx=-1;
let ytFilterTier='all';
let workoutOverrides={};
let customPlan={days:{}};
let customExercises={};
let cePickerDay=null,cePickerTab='library',cePickerSearch='',ceEditId=null,_ceMode='reps';
let cpLongTimer=null,cpMenuRef=null,cpMenuDay=null,cpEditMode=false;
let ytLinks=gs('bn_yt_links',{});
const MONTH_NAMES=['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_FULL=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function nav(pg){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('pg-'+pg);if(el)el.classList.add('active');
  window.scrollTo(0,0);closeMob();closeDD();
  if(pg==='dashboard')renderDash();
  if(pg==='personal')renderPersonal();
  if(pg==='community')renderComm();
  if(pg==='profile')renderProfile();
  if(pg==='admin')renderAdmin();
}
function grd(pg){user?nav(pg):nav('login')}
function commNav(){user?nav('community'):nav('register')}
function toggleMob(){document.getElementById('mob-nav').classList.toggle('open')}
function closeMob(){document.getElementById('mob-nav').classList.remove('open')}
function toggleDD(e){if(e)e.stopPropagation();document.getElementById('prof-dd').classList.toggle('open')}
function closeDD(){document.getElementById('prof-dd').classList.remove('open')}
document.addEventListener('click',e=>{
  const dd=document.getElementById('prof-dd'),av=document.getElementById('nav-av');
  if(dd&&!dd.contains(e.target)&&e.target!==av)closeDD();
  const mn=document.getElementById('mob-nav'),hb=document.querySelector('.hbg');
  if(mn&&mn.classList.contains('open')&&!mn.contains(e.target)&&e.target!==hb)closeMob();
});
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>28));
function toggleTheme(){
  const d=document.documentElement,dark=d.getAttribute('data-theme')==='dark';
  const nt=dark?'light':'dark';d.setAttribute('data-theme',nt);
  document.getElementById('theme-btn').innerHTML=ico(nt==='dark'?'moon':'sun',16);ss('bn_theme',nt);
}
(()=>{const t=gs('bn_theme','dark');document.documentElement.setAttribute('data-theme',t);const btn=document.getElementById('theme-btn');if(btn){btn.innerHTML=ico(t==='dark'?'moon':'sun',16);btn.removeAttribute('data-icon')}})();
function toast(msg,ic='check'){const el=document.getElementById('toast-el');document.getElementById('t-msg').textContent=msg;document.getElementById('t-ico').innerHTML=ico(ic,15);el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3300)}
function glowCard(el,type){el.classList.remove('glow-green-top','glow-yellow-top');void el.offsetWidth;el.classList.add(type==='green'?'glow-green-top':'glow-yellow-top');setTimeout(()=>el.classList.remove('glow-green-top','glow-yellow-top'),800)}
function glowTop(el,type){el.classList.remove('glow-green-top','glow-yellow-top');void el.offsetWidth;el.classList.add(type==='green'?'glow-green-top':'glow-yellow-top');setTimeout(()=>el.classList.remove('glow-green-top','glow-yellow-top'),800)}
function selG(g){regG=g;document.getElementById('gbm').classList.toggle('on',g==='male');document.getElementById('gbf').classList.toggle('on',g==='female')}
function showErr(id,m){const e=document.getElementById(id);e.textContent=m;e.style.display='block'}
function hideErr(id){document.getElementById(id).style.display='none'}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
async function doReg(){
  hideErr('re-err');
  const n=document.getElementById('rn').value.trim(),e=document.getElementById('re').value.trim();
  const p=document.getElementById('rp').value,p2=document.getElementById('rp2').value,t=document.getElementById('tcb').checked;
  if(!n)return showErr('re-err','Please enter your full name.');
  if(!e.includes('@'))return showErr('re-err','Please enter a valid email address.');
  if(p.length<6)return showErr('re-err','Password must be at least 6 characters.');
  if(p!==p2)return showErr('re-err','Passwords do not match.');
  if(!t)return showErr('re-err','Please accept the Terms of Service.');
  try {
    await cloudSignUp(e, p, n, regG);
    await cloudLoadAll();
    const u = {name:n, email:e, gender:regG, isAdmin:false};
    loginUser(u);
    toast('Welcome to Better You!','party');
  } catch (err) {
    showErr('re-err', err.message || 'Registration failed. Please try again.');
  }
}
async function doLogin(){
  hideErr('le-err');
  const e=document.getElementById('le').value.trim(),p=document.getElementById('lp').value;
  if(!e||!p)return showErr('le-err','Please complete all fields.');
  try {
    await cloudSignIn(e, p);
    await cloudLoadAll();
    const u = {
      name: (_cloudProfile && _cloudProfile.name) || e.split('@')[0],
      email: e,
      gender: (_cloudProfile && _cloudProfile.gender) || 'male',
      isAdmin: !!(_cloudProfile && _cloudProfile.is_admin)
    };
    loginUser(u);
    toast('Welcome back, '+u.name,'check');
  } catch (err) {
    showErr('le-err', err.message || 'Incorrect email or password.');
  }
}
function loginUser(u){
  user=u;ss('bn_session',u);
  exProg=gs('bn_exprog_'+u.email,{});
  difficulty=gs('bn_diff_'+u.email,'beginner');
  workoutOverrides=gs('bn_workout_overrides_'+u.email,{});
  customPlan=gs('bn_custom_plan_'+u.email,{days:{}});
  customExercises=gs('bn_custom_exercises_'+u.email,{});
  if(!gs('bn_week_'+u.email,''))ss('bn_week_'+u.email,getWeekKey());
  checkWeekReset();
  cpEditMode=false;
  updateNavUser();nav('dashboard');
}
async function signOut(){
  try { await cloudSignOut(); } catch {}
  user=null; updateNavUser();
  hView='day'; hDetailId=null; hSelDate=null; hForm=null; cpEditMode=false;
  nav('home'); toast('Signed out. See you tomorrow','logout');
}
function updateNavUser(){
  const li=!!user;
  document.getElementById('nav-guest').style.display=li?'none':'block';
  document.getElementById('nav-user').style.display=li?'block':'none';
  if(user){
    const i=user.name.charAt(0).toUpperCase();
    document.getElementById('nav-av').textContent=i;
    const sa=document.getElementById('sb-av');if(sa)sa.textContent=i;
    const sn=document.getElementById('sb-name');if(sn)sn.textContent=user.name;
    const al=document.getElementById('dd-admin');if(al)al.style.display=user.isAdmin?'block':'none';
    const sal=document.getElementById('sb-admin');if(sal)sal.style.display=user.isAdmin?'flex':'none';
  }
}
(async()=>{
  try {
    const signedIn = await cloudLoadAll();
    if (signedIn && _cloudUser) {
      user = {
        name: (_cloudProfile && _cloudProfile.name) || 'Member',
        email: _cloudUser.email,
        gender: (_cloudProfile && _cloudProfile.gender) || 'male',
        isAdmin: !!(_cloudProfile && _cloudProfile.is_admin)
      };
      exProg = gs('bn_exprog_'+user.email, {});
      difficulty = gs('bn_diff_'+user.email, 'beginner');
      workoutOverrides = gs('bn_workout_overrides_'+user.email, {});
      customPlan = gs('bn_custom_plan_'+user.email, {days:{}});
      customExercises = gs('bn_custom_exercises_'+user.email, {});
      if (!gs('bn_week_'+user.email,'')) ss('bn_week_'+user.email, getWeekKey());
      checkWeekReset();
      updateNavUser();
    }
  } catch (err) {
    console.warn('Cloud session restore failed:', err);
  }
})();

function getWeekKey(){
  const d=new Date(),day=d.getDay();
  const sunday=new Date(d);sunday.setDate(d.getDate()-day);
  return sunday.getFullYear()+'-'+String(sunday.getMonth()+1).padStart(2,'0')+'-'+String(sunday.getDate()).padStart(2,'0');
}
function checkWeekReset(){
  if(!user)return false;
  const storedWeek=gs('bn_week_'+user.email,''),currentWeek=getWeekKey();
  if(storedWeek!==currentWeek){
    exProg={};ss('bn_exprog_'+user.email,exProg);ss('bn_week_'+user.email,currentWeek);
    const locks=gs('bn_session_'+user.email,{});
    Object.keys(locks).forEach(k=>{if(!k.startsWith(currentWeek+'_'))delete locks[k]});
    ss('bn_session_'+user.email,locks);return true;
  }
  return false;
}
function sessionKey(d){return getWeekKey()+'_'+difficulty+'_'+d}
function isSessionLocked(d){if(!user)return false;const m=gs('bn_session_'+user.email,{});return !!m[sessionKey(d)]}
function lockSession(d){if(!user)return;const m=gs('bn_session_'+user.email,{});m[sessionKey(d)]=true;ss('bn_session_'+user.email,m)}
function getCustomPlan(){if(!user)return{days:{}};return gs('bn_custom_plan_'+user.email,{days:{}})}
function saveCustomPlan(p){if(!user)return;ss('bn_custom_plan_'+user.email,p);customPlan=p}
function getCustomExercises(){if(!user)return{};return gs('bn_custom_exercises_'+user.email,{})}
function saveCustomExercises(e){if(!user)return;ss('bn_custom_exercises_'+user.email,e);customExercises=e}
function getPublicExercises(){return gs('bn_public_exercises',{})}
function savePublicExercises(e){ss('bn_public_exercises',e)}
function normalizeCustomExercise(ce){
  const mode=ce.mode||'reps';
  let valText;
  if(mode==='reps')valText=ce.repsPerSet||0;
  else if(mode==='time')valText=(ce.secondsPerSet||0)+' sec';
  else valText=(ce.distancePerSet||0)+(ce.unit||'');
  return {
    id:ce.id,name:ce.name||'Custom Exercise',sets:ce.sets||3,
    reps:(ce.sets||3)+' × '+valText+(ce.suffix||''),
    howto:ce.howto||'',focus:ce.focus||'',ytId:ce.ytId||'',
    _isCustom:true,_mode:mode,_unit:ce.unit||'',_editable:true
  };
}
function resolveRef(refId){
  if(!refId)return null;
  if(refId.indexOf('ce_')===0){const ce=customExercises[refId];return ce?normalizeCustomExercise(ce):null}
  if(refId.indexOf('pe_')===0){const ce=getPublicExercises()[refId];return ce?normalizeCustomExercise(ce):null}
  for(const tier of ['beginner','intermediate','professional']){
    for(const d of Object.values(WORKOUTS[tier])){
      if(d.exs){const found=d.exs.find(e=>e.id===refId);if(found)return found}
    }
  }
  return null;
}
function exerciseStoreKey(ex){return ex._storeKey||ex.id}
function parseReps(reps){
  const m=(reps||'').match(/^(\d+)\s*×\s*(\d+(?:\.\d+)?)(.*)$/);
  if(!m)return null;
  return {sets:parseInt(m[1],10),repsPerSet:parseFloat(m[2]),suffix:m[3]||''};
}
function applyOverride(base){
  const p=parseReps(base.reps);if(!p)return base;
  const ov=workoutOverrides[base.id]||{};
  const sets=ov.sets!=null?ov.sets:p.sets;
  const repsPerSet=ov.repsPerSet!=null?ov.repsPerSet:p.repsPerSet;
  return {...base,sets,reps:sets+' × '+repsPerSet+p.suffix,_baseSets:p.sets,_baseRepsPerSet:p.repsPerSet,_repsPerSet:repsPerSet,_suffix:p.suffix,_editable:true};
}
function getDayExercises(diff,dayNum){
  if(diff==='custom'){
    const plan=getCustomPlan();
    const day=plan.days?.[dayNum];
    if(!day||!day.exs||!day.exs.length)return [];
    return day.exs.map(ref=>{
      const r=resolveRef(ref);if(!r)return null;
      return {...r,_storeKey:'cp'+dayNum+'_'+ref,_refId:ref};
    }).filter(Boolean).map(applyOverride);
  }
  const day=WORKOUTS[diff]?.[dayNum];
  if(!day||!day.exs)return [];
  return day.exs.map(applyOverride);
}
function saveWorkoutOverrides(){if(!user)return;ss('bn_workout_overrides_'+user.email,workoutOverrides)}
function renderExEditPanel(ex){
  const mode=ex._mode||'reps';
  let lbl='Reps per set',step=5;
  if(mode==='time'){lbl='Seconds per set';step=5}
  if(mode==='distance'){lbl='Distance per set';step=1}
  return `<div class="ex-edit-panel" id="exedit-${ex.id}">
    <div class="ex-edit-row">
      <div class="ex-edit-lbl">Sets</div>
      <div class="ex-edit-stepper">
        <button class="ex-edit-step-btn" onclick="event.stopPropagation();exEditStep('${ex.id}','sets',-1)">−</button>
        <div class="ex-edit-val" id="exedit-${ex.id}-sets">${ex.sets}</div>
        <button class="ex-edit-step-btn" onclick="event.stopPropagation();exEditStep('${ex.id}','sets',1)">+</button>
      </div>
    </div>
    <div class="ex-edit-row">
      <div class="ex-edit-lbl">${lbl}</div>
      <div class="ex-edit-stepper">
        <button class="ex-edit-step-btn" onclick="event.stopPropagation();exEditStep('${ex.id}','reps',-${step})">−</button>
        <div class="ex-edit-val" id="exedit-${ex.id}-reps">${ex._repsPerSet!=null?ex._repsPerSet:10}</div>
        <button class="ex-edit-step-btn" onclick="event.stopPropagation();exEditStep('${ex.id}','reps',${step})">+</button>
      </div>
    </div>
    <div class="ex-edit-actions">
      <button class="btn bg-b bsm" onclick="event.stopPropagation();exEditReset('${ex.id}')">Reset</button>
      <button class="btn bp bsm" onclick="event.stopPropagation();exEditSave('${ex.id}')">Save</button>
    </div>
  </div>`;
}
function toggleExEdit(id){
  const el=document.getElementById('exedit-'+id);if(!el)return;
  const isOpen=el.style.display==='block';
  document.querySelectorAll('.ex-edit-panel').forEach(p=>p.style.display='none');
  if(!isOpen)el.style.display='block';
}
function exEditStep(id,field,delta){
  const el=document.getElementById('exedit-'+id+'-'+(field==='sets'?'sets':'reps'));if(!el)return;
  let v=parseInt(el.textContent,10)||0;v+=delta;
  if(field==='sets')v=Math.max(1,Math.min(20,v));
  else{
    const lbl=el.closest('.ex-edit-row')?.querySelector('.ex-edit-lbl')?.textContent||'';
    if(lbl.indexOf('Distance')!==-1)v=Math.max(1,Math.min(1000,v));
    else if(lbl.indexOf('Seconds')!==-1)v=Math.max(5,Math.min(600,v));
    else v=Math.max(5,Math.min(200,v));
  }
  el.textContent=v;
}
function exEditSave(id){
  const setsEl=document.getElementById('exedit-'+id+'-sets');
  const repsEl=document.getElementById('exedit-'+id+'-reps');
  if(!setsEl||!repsEl)return;
  const sets=parseInt(setsEl.textContent,10);
  const repsPerSet=parseInt(repsEl.textContent,10);
  workoutOverrides[id]={sets,repsPerSet};saveWorkoutOverrides();
  if(exProg[id]&&Array.isArray(exProg[id].sets)){exProg[id].sets=exProg[id].sets.filter(i=>i<sets);if(user)ss('bn_exprog_'+user.email,exProg)}
  document.querySelectorAll('.ex-edit-panel').forEach(p=>p.style.display='none');
  renderExCards();toast('Exercise updated','check');
}
function exEditReset(id){
  delete workoutOverrides[id];saveWorkoutOverrides();
  document.querySelectorAll('.ex-edit-panel').forEach(p=>p.style.display='none');
  renderExCards();toast('Reverted to default','refresh');
}
function renderExerciseCardHTML(ex,idx,exs,locked,isCustomPlan){
  const storeKey=exerciseStoreKey(ex);
  const s=exProg[storeKey]||{sets:[],done:false};
  const isActive=idx===activeExIdx,isDone=s.done,isFirst=idx===0,isLast=idx===exs.length-1;
  const pct=ex.sets>0?Math.round((s.sets.length/ex.sets)*100):0;
  const setsHtml=ex.sets>0?Array.from({length:ex.sets},(_,i)=>`<button class="sbt${s.sets.includes(i)?' done':''}" onclick="tickSet('${storeKey}',${i},${idx})">${s.sets.includes(i)?ico('check',14):i+1}</button>`).join(''):'';
  const ytId=ex.ytId||ytLinks[ex.id]||'';
  const videoHtml=ytId?`<div class="ex-video-wrap"><iframe src="https://www.youtube.com/embed/${ytId}?rel=0" allowfullscreen loading="lazy"></iframe></div>`:`<div style="background:var(--bg3);border-radius:10px;padding:14px;margin-bottom:12px;text-align:center"><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name+' exercise tutorial')}" target="_blank" style="color:var(--acc);font-size:12px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:5px">${ico('search',13)} Search "${escapeHtml(ex.name)}" on YouTube</a></div>`;
  const canEdit=ex._editable&&!locked&&!isDone&&(!isCustomPlan||cpEditMode);
  const editBtn=canEdit?`<button class="ex-edit-btn" onclick="event.stopPropagation();toggleExEdit('${ex.id}')" title="Edit sets & reps">${ico('edit',13)}</button>`:'';
  const editPanel=canEdit?renderExEditPanel(ex):'';
  const lpAttrs=(isCustomPlan&&cpEditMode)?`onpointerdown="cpCardDown(event,'${ex._refId}',${selDay})" onpointerup="cpCardUp()" onpointerleave="cpCardUp()" onpointercancel="cpCardUp()" oncontextmenu="event.preventDefault();cpMenuOpen(event,'${ex._refId}',${selDay})"`:'';
  const tagText=difficulty==='custom'?'My Plan':difficulty.charAt(0).toUpperCase()+difficulty.slice(1);
  if(isDone){
    return `<div class="ex-card ex-done" id="exc-${ex.id}" ${lpAttrs}><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><div class="ex-done-check">${ico('check',14)}</div><div><div class="ex-nm">${escapeHtml(ex.name)}</div><div class="ex-reps-txt">${ex.reps} · ${ex.sets} sets · Complete</div></div></div>${isLast&&!locked?`<button class="session-done-btn" onclick="openCong()">${ico('party',16)} Session Completed!</button>`:''}</div>`;
  }
  if(isActive){
    const allSetsDone=ex.sets>0&&s.sets.length>=ex.sets;
    return `<div class="ex-card ex-active" id="exc-${ex.id}" ${lpAttrs}>
      <div class="ex-card-hdr" style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px">
        <div style="flex:1;min-width:0"><div class="ex-nm">${escapeHtml(ex.name)}</div><div class="ex-reps-txt">${ex.reps} · ${ex.sets} sets · <span style="color:var(--acc);font-weight:700">ACTIVE</span></div></div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">${editBtn}<span class="ex-tag">${tagText}</span><button class="ex-complete-check${allSetsDone?' done':''}" onclick="completeAllSets('${storeKey}',${idx})" aria-label="Complete all sets">${ico('check',20)}</button></div>
      </div>
      ${ex.howto?`<div class="ex-desc-box"><strong>How to do it:</strong> ${escapeHtml(ex.howto)}</div>`:''}
      ${ex.focus?`<div class="ex-focus-box"><div class="ex-focus-lbl">Focus on</div><div class="ex-focus-txt">${escapeHtml(ex.focus)}</div></div>`:''}
      ${videoHtml}
      <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--txt2);margin-bottom:4px"><span>Set progress</span><span style="color:var(--acc)">${s.sets.length}/${ex.sets}</span></div>
      <div class="pt" style="margin-bottom:8px"><div class="pf" style="width:${pct}%"></div></div>
      <div class="sets-row">${setsHtml}</div>${editPanel}
    </div>`;
  }
  if(isFirst&&activeExIdx===-1&&!isDone){
    return `<div class="ex-card" id="exc-${ex.id}" ${lpAttrs}><div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px"><div class="ex-nm">${escapeHtml(ex.name)}</div>${editBtn}</div><div class="ex-reps-txt" style="margin-bottom:12px">${ex.reps} · ${ex.sets} sets</div><button class="start-btn" onclick="startSession()">${ico('play',13)} Start Session</button>${editPanel}</div>`;
  }
  return `<div class="ex-card ex-locked" id="exc-${ex.id}" ${lpAttrs}><div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px"><div style="flex:1;min-width:0"><div class="ex-nm">${escapeHtml(ex.name)}</div><div class="ex-reps-txt">${ex.reps} · ${ex.sets} sets</div><div class="ex-locked-msg">Complete the previous exercise to unlock</div></div>${editBtn}</div>${editPanel}</div>`;
}
function renderExCards(){
  const cont=document.getElementById('pers-ex-cards');if(!cont)return;
  if(difficulty==='custom'){renderCustomExCards(cont);return}
  const tod=WORKOUTS[difficulty][selDay];if(!tod){cont.innerHTML='';return}
  if(tod.isRest){cont.innerHTML=`<div class="rest-card"><div class="rest-leaf">${ico('leaf',36)}</div><h4 style="margin-bottom:8px">${tod.tag}</h4><p style="font-size:13px;color:var(--txt2);font-weight:400;line-height:1.7">${tod.restDesc}</p></div>`;return}
  const exs=getDayExercises(difficulty,selDay);
  const locked=isSessionLocked(selDay);
  cont.innerHTML=exs.map((ex,idx)=>renderExerciseCardHTML(ex,idx,exs,locked,false)).join('');
  hydrateIcons(cont);
}
function renderCustomExCards(cont){
  const exs=getDayExercises('custom',selDay);
  const locked=isSessionLocked(selDay);
  const edit=cpEditMode;
  const plan=getCustomPlan();
  const anyExs=Object.values(plan.days||{}).some(d=>d.exs&&d.exs.length>0);
  if(!exs.length){
    if(edit){
      cont.innerHTML=`<div class="cp-empty-hero">
        <div class="cp-empty-title">${anyExs?'Rest Day':'Build Your Plan'}</div>
        <div class="cp-empty-desc">${anyExs?'No exercises scheduled for '+DAY_FULL[selDay]+'. Add some below.':'Add exercises to each day, or copy a template to get started.'}</div>
        ${!anyExs?`<div class="cp-copy-row">
          <button class="cp-copy-btn" onclick="cpCopyFrom('beginner')">Copy Beginner</button>
          <button class="cp-copy-btn" onclick="cpCopyFrom('intermediate')">Copy Intermediate</button>
          <button class="cp-copy-btn" onclick="cpCopyFrom('professional')">Copy Professional</button>
        </div>`:''}
      </div>
      <button class="cp-day-add" onclick="cePickerOpen(${selDay})">${ico('plus',14)} Add Exercise</button>`;
    }else{
      cont.innerHTML=`<div class="cp-empty-hero">
        <div class="cp-empty-title">${anyExs?'Rest Day':'No plan yet'}</div>
        <div class="cp-empty-desc">${anyExs?'No exercises scheduled for '+DAY_FULL[selDay]+'. Tap Edit Plan above to change.':'Tap Edit Plan above to start building your custom workout plan.'}</div>
      </div>`;
    }
    hydrateIcons(cont);return;
  }
  const cardsHtml=exs.map((ex,idx)=>renderExerciseCardHTML(ex,idx,exs,locked,true)).join('');
  cont.innerHTML=cardsHtml+(edit?`<button class="cp-day-add" onclick="cePickerOpen(${selDay})">${ico('plus',14)} Add Exercise</button>`:'');
  hydrateIcons(cont);
}
function startSession(){
  activeExIdx=0;renderExCards();
  setTimeout(()=>{const exs=getDayExercises(difficulty,selDay);const el=document.getElementById('exc-'+exs[0]?.id);if(el)el.scrollIntoView({behavior:'smooth',block:'nearest'})},100);
}
function completeAllSets(storeKey,exArrIdx){
  const s=exProg[storeKey]||{sets:[],done:false};
  const exs=getDayExercises(difficulty,selDay);
  const ex=exs[exArrIdx];if(!ex)return;
  if(s.sets.length>=ex.sets)return;
  s.sets=Array.from({length:ex.sets},(_,i)=>i);exProg[storeKey]={...s};
  if(user)ss('bn_exprog_'+user.email,exProg);
  renderExCards();
  const isLastEx=exArrIdx===exs.length-1;
  if(ex.noTimer){markExDone(storeKey,exArrIdx);return}
  openTimer(60,isLastEx?'Last Exercise Done!':'Exercise Complete!',isLastEx?'Take your rest — then tap Session Completed!':'1 minute rest before the next exercise.',()=>{markExDone(storeKey,exArrIdx)});
}
function tickSet(storeKey,setIdx,exArrIdx){
  const s=exProg[storeKey]||{sets:[],done:false};
  if(s.sets.includes(setIdx)){s.sets=s.sets.filter(i=>i!==setIdx);exProg[storeKey]={...s};if(user)ss('bn_exprog_'+user.email,exProg);renderExCards();return}
  s.sets=[...s.sets,setIdx];exProg[storeKey]={...s};
  if(user)ss('bn_exprog_'+user.email,exProg);
  const exs=getDayExercises(difficulty,selDay);
  const ex=exs[exArrIdx];if(!ex)return;
  const totalSets=ex.sets;
  const isLastSet=s.sets.length>=totalSets;
  const isLastEx=exArrIdx===exs.length-1;
  renderExCards();
  if(isLastSet){
    if(ex.noTimer){markExDone(storeKey,exArrIdx);return}
    openTimer(60,isLastEx?'Last Exercise Done!':'Exercise Complete!',isLastEx?'Take your rest — then tap Session Completed!':'1 minute rest before the next exercise.',()=>{markExDone(storeKey,exArrIdx)});
  }else{
    if(ex.noTimer)return;
    openTimer(30,'Rest Between Sets','30 seconds — next up: set '+(s.sets.length+1)+' of '+totalSets,null);
  }
}
function markExDone(storeKey,exArrIdx){
  const s=exProg[storeKey]||{sets:[],done:false};
  exProg[storeKey]={...s,done:true};
  if(user)ss('bn_exprog_'+user.email,exProg);
  const exs=getDayExercises(difficulty,selDay);
  const isLast=exArrIdx===exs.length-1;
  if(!isLast)activeExIdx=exArrIdx+1;
  renderExCards();
  if(!isLast){setTimeout(()=>{const nextEl=document.getElementById('exc-'+exs[exArrIdx+1]?.id);if(nextEl)nextEl.scrollIntoView({behavior:'smooth',block:'nearest'})},100)}
}
function resetWorkout(){
  if(!confirm('Reset all workout progress for this week?'))return;
  exProg={};
  if(user){
    ss('bn_exprog_'+user.email,exProg);
    const locks=gs('bn_session_'+user.email,{});
    const prefix=getWeekKey()+'_';
    Object.keys(locks).forEach(k=>{if(k.startsWith(prefix))delete locks[k]});
    ss('bn_session_'+user.email,locks);
  }
  activeExIdx=-1;renderExCards();renderDash();
  toast('Workout reset for the week','refresh');
}
const CIRC=2*Math.PI*64;
function openTimer(sec,title,sub,onEnd){
  clearInterval(tInt);tTotal=sec;tSec=sec;timerOnEnd=onEnd||null;
  document.getElementById('tt').innerHTML=ico('clock',16)+' '+title;
  document.getElementById('ts2').textContent=sub||'1 minute rest between sets';
  updTimer();document.getElementById('timer-ov').classList.add('open');
  tInt=setInterval(()=>{tSec--;if(tSec<=0){clearInterval(tInt);closeTimerAndRun()}else updTimer()},1000);
}
function updTimer(){
  const m=Math.floor(tSec/60),s=tSec%60;
  document.getElementById('t-num').textContent=m+':'+(s<10?'0'+s:s);
  document.getElementById('t-pl').textContent=tSec+' second'+(tSec!==1?'s':'')+' remaining';
  const pct=tSec/tTotal;
  document.getElementById('t-arc').style.strokeDashoffset=CIRC*(1-pct);
}
function closeTimerAndRun(){document.getElementById('timer-ov').classList.remove('open');if(timerOnEnd){const fn=timerOnEnd;timerOnEnd=null;fn()}}
function closeTimer(){clearInterval(tInt);document.getElementById('timer-ov').classList.remove('open')}
function skipTimer(){clearInterval(tInt);closeTimerAndRun()}
function timerAdd(n){tSec+=n;tTotal+=n;updTimer();toast('+'+n+' sec added','clock')}
function logSession(){
  if(!user)return;
  const d=new Date(),dstr=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  const key='bn_history_'+user.email;
  const history=gs(key,[]);
  const exs=getDayExercises(difficulty,selDay);
  const done=exs.filter(ex=>exProg[exerciseStoreKey(ex)]?.done).length;
  const total=exs.length;if(total===0)return;
  const already=history.find(h=>h.date===dstr&&h.day===selDay&&h.difficulty===difficulty);
  if(already){already.exercisesCompleted=done;already.totalExercises=total;already.timestamp=Date.now()}
  else history.push({date:dstr,day:selDay,difficulty,exercisesCompleted:done,totalExercises:total,timestamp:Date.now()});
  ss(key,history);lockSession(selDay);
}
function openCong(){
  logSession();
  const ov=document.getElementById('cong-ov');ov.classList.add('open');
  const box=document.getElementById('cong-box');
  const cols=['#39FF14','#FFD60A','#ff6b6b','#60a5fa','#c77dff'];
  for(let i=0;i<20;i++){
    const c=document.createElement('div');c.className='confetti';
    c.style.cssText=`left:${Math.random()*100}%;top:${-25+Math.random()*40}px;background:${cols[Math.floor(Math.random()*cols.length)]};width:${5+Math.random()*6}px;height:${5+Math.random()*6}px;animation-delay:${Math.random()*1.5}s;animation-duration:${2.5+Math.random()*1.5}s;border-radius:${Math.random()>.5?'50%':'2px'}`;
    box.appendChild(c);setTimeout(()=>c.remove(),5000);
  }
}
function closeCong(){document.getElementById('cong-ov').classList.remove('open');renderExCards()}
function buildWeekTabs(){
  const cont=document.getElementById('week-tabs');if(!cont)return;
  const today=new Date().getDay();
  if(difficulty==='custom'){
    const plan=getCustomPlan();
    cont.innerHTML=[0,1,2,3,4,5,6].map(d=>{
      const day=plan.days?.[d];
      const hasEx=day&&day.exs&&day.exs.length>0;
      const lbl=DAY_FULL[d];
      const tag=hasEx?day.exs.length+' exercise'+(day.exs.length>1?'s':''):'Empty';
      const isToday=d===today;
      return `<button class="wt${d===selDay?' on':''}${!hasEx?' rest-d':''}" onclick="selectDay(${d})">${lbl.slice(0,3)}<span style="font-size:9px;display:block;font-weight:400;opacity:.7">${tag}${isToday?' ·Now':''}</span></button>`;
    }).join('');
    return;
  }
  cont.innerHTML=[0,1,2,3,4,5,6].map(d=>{
    const w=WORKOUTS[difficulty][d];if(!w)return '';
    const isToday=d===today;
    return `<button class="wt${d===selDay?' on':''}${w.isRest?' rest-d':''}" onclick="selectDay(${d})">${w.label.slice(0,3)}<span style="font-size:9px;display:block;font-weight:400;opacity:.7">${w.tag}${isToday?' ·Now':''}</span></button>`;
  }).join('');
}
function selectDay(d){selDay=d;activeExIdx=-1;buildWeekTabs();renderExCards()}
function updateWorkoutHeaderBtns(){
  const isCustom=difficulty==='custom';
  const editBtn=document.getElementById('workout-edit-plan-btn');
  const doneBtn=document.getElementById('workout-done-edit-btn');
  const copyBtn=document.getElementById('workout-copy-btn');
  const delBtn=document.getElementById('workout-delete-plan-btn');
  if(editBtn)editBtn.style.display=(isCustom&&!cpEditMode)?'inline-flex':'none';
  if(doneBtn)doneBtn.style.display=(isCustom&&cpEditMode)?'inline-flex':'none';
  if(copyBtn)copyBtn.style.display=(isCustom&&cpEditMode)?'inline-flex':'none';
  if(delBtn)delBtn.style.display=(isCustom&&cpEditMode)?'inline-flex':'none';
}
function setDiff(d,btn){
  difficulty=d;
  if(user)ss('bn_diff_'+user.email,d);
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  activeExIdx=-1;
  if(d!=='custom')cpEditMode=false;
  updateWorkoutHeaderBtns();
  buildWeekTabs();
  renderExCards();
}
function renderPersonal(){
  if(!user)return;
  if(checkWeekReset())toast('New week — workout progress reset','refresh');
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('on'));
  const diffMap={'beginner':'diff-b','intermediate':'diff-i','professional':'diff-p','custom':'diff-c'};
  const db=document.getElementById(diffMap[difficulty]);if(db)db.classList.add('on');
  selDay=new Date().getDay();
  activeExIdx=-1;
  updateWorkoutHeaderBtns();
  buildWeekTabs();
  renderExCards();
  renderSkillsGrid('pers-skills-grid');
  hView='day';renderHabits();
}
function showPersTab(t,btn){
  document.querySelectorAll('#pg-personal .dash-tab').forEach(el=>el.classList.remove('on'));
  const el=document.getElementById('pt-'+t);if(el)el.classList.add('on');
  document.querySelectorAll('#pg-personal .sbl').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
  if(t==='skills')renderSkillsGrid('pers-skills-grid');
  if(t==='habits'){hView='day';renderHabits()}
}
function showSpiritualTab(btn){
  document.querySelectorAll('#pg-spiritual .sbl').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
}
function cpToggleEdit(){
  cpEditMode=!cpEditMode;
  if(cpEditMode)toast('Edit mode on','edit');else toast('Plan saved','check');
  updateWorkoutHeaderBtns();
  buildWeekTabs();
  renderExCards();
}
function cpCopyOpen(){
  const tier=prompt('Copy which template into My Plan?\n\nType: beginner, intermediate, or professional');
  if(!tier)return;
  const t=tier.toLowerCase().trim();
  if(!WORKOUTS[t]){toast('Unknown template','warning');return}
  cpCopyFrom(t);
}
function cpCopyFrom(tier){
  if(!confirm('Copy the '+tier.charAt(0).toUpperCase()+tier.slice(1)+' plan into My Plan? This will overwrite your current custom plan.'))return;
  const newDays={};
  const customEx=getCustomExercises();
  Object.keys(customEx).forEach(k=>{if(customEx[k]._fromTemplate)delete customEx[k]});
  let idx=0;
  [0,1,2,3,4,5,6].forEach(d=>{
    const w=WORKOUTS[tier][d];if(!w)return;
    if(w.isRest)newDays[d]={isRest:true};
    else if(w.exs){
      newDays[d]={exs:w.exs.map(ex=>{
        idx++;
        const newId='ce_'+Date.now()+'_t'+idx+'_'+Math.random().toString(36).slice(2,5);
        const p=parseReps(ex.reps);
        const isTime=(ex.reps||'').indexOf('sec')!==-1;
        const isDist=(ex.reps||'').match(/\d+m$/)!==null;
        let mode='reps';
        if(isTime)mode='time';
        else if(isDist)mode='distance';
        customEx[newId]={
          id:newId,
          name:ex.name,
          mode:mode,
          sets:ex.sets||3,
          repsPerSet:mode==='reps'?(p?p.repsPerSet:10):0,
          secondsPerSet:mode==='time'?(p?p.repsPerSet:30):0,
          distancePerSet:mode==='distance'?(p?p.repsPerSet:50):0,
          unit:mode==='distance'?(p&&p.suffix?p.suffix.trim():'m'):'',
          suffix:mode==='distance'?'':(p?p.suffix:''),
          howto:ex.howto||'',
          focus:ex.focus||'',
          ytId:ytLinks[ex.id]||'',
          createdAt:Date.now(),
          _fromTemplate:true
        };
        return newId;
      })};
    }
  });
  saveCustomExercises(customEx);
  saveCustomPlan({days:newDays});
  activeExIdx=-1;
  buildWeekTabs();
  renderExCards();
  toast('Plan copied','refresh');
}
function cpDeletePlan(){
  if(!confirm('Delete your entire custom plan? This cannot be undone.'))return;
  saveCustomPlan({days:{}});
  cpEditMode=false;
  difficulty='beginner';
  if(user)ss('bn_diff_'+user.email,'beginner');
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('on'));
  document.getElementById('diff-b').classList.add('on');
  updateWorkoutHeaderBtns();
  buildWeekTabs();renderExCards();
  toast('Plan deleted','trash');
}
function cpCardDown(e,refId,day){
  if(e.pointerType==='mouse'&&e.button!==0)return;
  clearTimeout(cpLongTimer);
  const sx=e.clientX,sy=e.clientY;
  cpLongTimer=setTimeout(()=>{cpMenuOpen(e,refId,day);if(navigator.vibrate)navigator.vibrate(15)},550);
  const move=ev=>{if(Math.abs(ev.clientX-sx)>10||Math.abs(ev.clientY-sy)>10){clearTimeout(cpLongTimer);document.removeEventListener('pointermove',move)}};
  document.addEventListener('pointermove',move);
  document.addEventListener('pointerup',()=>{clearTimeout(cpLongTimer);document.removeEventListener('pointermove',move)},{once:true});
}
function cpCardUp(){clearTimeout(cpLongTimer)}
function cpMenuOpen(e,refId,day){
  cpMenuRef=refId;cpMenuDay=day;
  const menu=document.getElementById('cp-menu');
  const x=(e.clientX||(e.touches&&e.touches[0]?.clientX))||window.innerWidth/2;
  const y=(e.clientY||(e.touches&&e.touches[0]?.clientY))||window.innerHeight/2;
  menu.style.left=Math.min(x,window.innerWidth-200)+'px';
  menu.style.top=Math.min(y,window.innerHeight-130)+'px';
  const editBtn=document.getElementById('cp-menu-edit');
  editBtn.style.display=(refId.indexOf('ce_')===0)?'flex':'none';
  menu.classList.add('open');
  setTimeout(()=>{const close=ev=>{if(!menu.contains(ev.target)){menu.classList.remove('open');document.removeEventListener('pointerdown',close)}};document.addEventListener('pointerdown',close)},50);
}
function cpMenuEdit(){
  document.getElementById('cp-menu').classList.remove('open');
  if(!cpMenuRef)return;
  cePickerOpen(cpMenuDay);
  cePickerEdit(cpMenuRef);
}
function cpMenuRemove(){
  document.getElementById('cp-menu').classList.remove('open');
  if(cpMenuRef==null||cpMenuDay==null)return;
  const plan=getCustomPlan();
  if(plan.days?.[cpMenuDay]?.exs){
    plan.days[cpMenuDay].exs=plan.days[cpMenuDay].exs.filter(r=>r!==cpMenuRef);
    saveCustomPlan(plan);
  }
  cpMenuRef=null;cpMenuDay=null;
  buildWeekTabs();renderExCards();
  toast('Removed from day','trash');
}
function cePickerOpen(day){
  if(!user)return;
  cePickerDay=day;cePickerTab='library';cePickerSearch='';ceEditId=null;
  document.getElementById('ce-picker-search').value='';
  document.getElementById('ce-picker-title').textContent='Add to '+DAY_FULL[day];
  document.querySelectorAll('.ce-picker-tab').forEach(b=>b.classList.toggle('on',b.dataset.ptab==='library'));
  document.getElementById('ce-picker-search-wrap').style.display='block';
  document.getElementById('ce-picker-ov').classList.add('open');
  cePickerRender();
}
function cePickerClose(){
  document.getElementById('ce-picker-ov').classList.remove('open');
  cePickerDay=null;ceEditId=null;
}
function cePickerSetTab(tab){
  cePickerTab=tab;ceEditId=null;
  document.querySelectorAll('.ce-picker-tab').forEach(b=>b.classList.toggle('on',b.dataset.ptab===tab));
  document.getElementById('ce-picker-search-wrap').style.display=(tab==='create')?'none':'block';
  cePickerRender();
}
function cePickerRender(){
  const body=document.getElementById('ce-picker-body');if(!body)return;
  if(cePickerTab==='create'){
    _ceMode='reps';
    body.innerHTML=renderCEForm();
    hydrateIcons(body);
    return;
  }
  let list=[];
  if(cePickerTab==='library'){
    ['beginner','intermediate','professional'].forEach(tier=>{
      Object.values(WORKOUTS[tier]).forEach(day=>{
        if(day.exs)day.exs.forEach(ex=>list.push({ref:ex.id,name:ex.name,meta:ex.reps+' · '+tier,tag:tier}));
      });
    });
  }else if(cePickerTab==='mine'){
    Object.keys(customExercises).forEach(k=>{
      const ce=customExercises[k];
      list.push({ref:ce.id,name:ce.name,meta:ceModeLabel(ce),tag:'custom',custom:true});
    });
  }else if(cePickerTab==='public'){
    const pub=getPublicExercises();
    Object.keys(pub).forEach(k=>{
      const ce=pub[k];
      list.push({ref:ce.id,name:ce.name,meta:ceModeLabel(ce),tag:'public',isPublic:true});
    });
  }
  if(cePickerSearch)list=list.filter(it=>it.name.toLowerCase().indexOf(cePickerSearch)!==-1);
  if(!list.length){body.innerHTML=`<div class="ce-picker-empty">${cePickerSearch?'No matching exercises.':'Nothing here yet.'}</div>`;return}
  body.innerHTML=list.map(it=>`<div class="ce-picker-item" onclick="cePickerPick('${it.ref}')"><div class="ce-picker-item-info"><div class="ce-picker-item-name">${escapeHtml(it.name)}</div><div class="ce-picker-item-meta">${escapeHtml(it.meta)}</div></div><span class="ce-picker-item-tag ${it.tag==='custom'?'custom':it.tag==='public'?'public':''}">${it.tag==='custom'?'Mine':it.tag==='public'?'Community':it.tag}</span>${it.custom?`<div class="ce-picker-item-actions"><button class="ce-picker-item-icon" onclick="event.stopPropagation();cePickerEdit('${it.ref}')" title="Edit">${ico('edit',12)}</button><button class="ce-picker-item-icon danger" onclick="event.stopPropagation();cePickerDelete('${it.ref}')" title="Delete">${ico('trash',12)}</button></div>`:''}</div>`).join('');
  hydrateIcons(body);
}
function ceModeLabel(ce){
  const mode=ce.mode||'reps';
  if(mode==='reps')return ce.sets+' × '+ce.repsPerSet+(ce.suffix||'');
  if(mode==='time')return ce.sets+' × '+ce.secondsPerSet+' sec'+(ce.suffix||'');
  if(mode==='distance')return ce.sets+' × '+ce.distancePerSet+(ce.unit||'')+(ce.suffix||'');
  return '';
}
function cePickerPick(ref){
  if(cePickerDay==null)return;
  const plan=getCustomPlan();
  if(!plan.days)plan.days={};
  if(!plan.days[cePickerDay])plan.days[cePickerDay]={exs:[]};
  if(!plan.days[cePickerDay].exs)plan.days[cePickerDay].exs=[];
  plan.days[cePickerDay].exs.push(ref);
  saveCustomPlan(plan);
  cePickerClose();
  buildWeekTabs();renderExCards();
  toast('Exercise added','check');
}
function cePickerEdit(ref){
  const ce=customExercises[ref];if(!ce)return;
  ceEditId=ref;cePickerTab='create';
  document.querySelectorAll('.ce-picker-tab').forEach(b=>b.classList.toggle('on',b.dataset.ptab==='create'));
  document.getElementById('ce-picker-search-wrap').style.display='none';
  document.getElementById('ce-picker-title').textContent='Edit Exercise';
  cePickerRender();
}
function cePickerDelete(ref){
  if(!confirm('Delete this exercise? It will be removed from all days.'))return;
  const ex=getCustomExercises();delete ex[ref];saveCustomExercises(ex);
  const plan=getCustomPlan();
  Object.keys(plan.days||{}).forEach(d=>{if(plan.days[d]&&plan.days[d].exs)plan.days[d].exs=plan.days[d].exs.filter(r=>r!==ref)});
  saveCustomPlan(plan);
  cePickerRender();renderExCards();
  toast('Exercise deleted','trash');
}
function renderCEForm(){
  const editing=ceEditId?customExercises[ceEditId]:null;
  const ce=editing||{id:null,name:'',mode:'reps',sets:3,repsPerSet:10,secondsPerSet:30,distancePerSet:1,unit:'km',suffix:'',howto:'',focus:'',ytId:''};
  const mode=ce.mode||'reps';
  _ceMode=mode;
  return `<div class="habit-field"><label class="habit-label">Exercise Name</label><input class="fi" id="ce-f-name" placeholder="Wall Sits" value="${escapeHtml(ce.name)}"/></div>
    <div class="habit-field"><label class="habit-label">Measurement Type</label><div class="ce-mode-row"><button class="ce-mode-btn${mode==='reps'?' on':''}" data-cm="reps" onclick="ceFormSetMode('reps')">Reps</button><button class="ce-mode-btn${mode==='time'?' on':''}" data-cm="time" onclick="ceFormSetMode('time')">Time (seconds)</button><button class="ce-mode-btn${mode==='distance'?' on':''}" data-cm="distance" onclick="ceFormSetMode('distance')">Distance</button></div></div>
    <div class="habit-field"><label class="habit-label">Sets</label><input class="fi" type="number" min="1" max="20" id="ce-f-sets" value="${ce.sets}" style="max-width:120px"/></div>
    <div class="habit-field" data-cem="reps" style="display:${mode==='reps'?'block':'none'}"><label class="habit-label">Reps per set</label><input class="fi" type="number" min="1" max="200" id="ce-f-reps" value="${ce.repsPerSet||10}" style="max-width:120px"/></div>
    <div class="habit-field" data-cem="time" style="display:${mode==='time'?'block':'none'}"><label class="habit-label">Seconds per set</label><input class="fi" type="number" min="1" max="600" id="ce-f-time" value="${ce.secondsPerSet||30}" style="max-width:120px"/></div>
    <div class="habit-field" data-cem="distance" style="display:${mode==='distance'?'block':'none'}"><label class="habit-label">Distance per set</label><div style="display:flex;gap:8px"><input class="fi" type="number" min="1" id="ce-f-dist" value="${ce.distancePerSet||1}" style="max-width:120px"/><input class="fi" type="text" id="ce-f-unit" placeholder="km, m, mi, laps" value="${escapeHtml(ce.unit||'')}" style="max-width:140px"/></div></div>
    <div class="habit-field"><label class="habit-label">Suffix (Optional)</label><input class="fi" id="ce-f-suffix" placeholder="e.g. ' per side'" value="${escapeHtml(ce.suffix||'')}"/><div style="font-size:11px;color:var(--txt3);font-weight:400;margin-top:5px">Appended to display — e.g. "3 × 10 <strong>per side</strong>"</div></div>
    <div class="habit-field"><label class="habit-label">How to do it (Optional)</label><textarea class="fi" id="ce-f-howto" placeholder="Instructions..." style="min-height:80px;resize:vertical;font-weight:400">${escapeHtml(ce.howto||'')}</textarea></div>
    <div class="habit-field"><label class="habit-label">Focus (Optional)</label><textarea class="fi" id="ce-f-focus" placeholder="Key technique cues..." style="min-height:60px;resize:vertical;font-weight:400">${escapeHtml(ce.focus||'')}</textarea></div>
    <div class="habit-field"><label class="habit-label">YouTube Video ID (Optional)</label><input class="fi" id="ce-f-yt" placeholder="e.g. eGo4IYlbE5g" value="${escapeHtml(ce.ytId||'')}"/></div>
    <div class="ex-edit-actions" style="margin-top:16px"><button class="btn bg-b bsm" onclick="cePickerSetTab('${editing?'mine':'library'}')">Cancel</button><button class="btn bp bsm" onclick="ceFormSave()">${editing?'Save Changes':'Create & Add'}</button></div>`;
}
function ceFormSetMode(mode){
  _ceMode=mode;
  document.querySelectorAll('[data-cem]').forEach(el=>{el.style.display=(el.dataset.cem===mode)?'block':'none'});
  document.querySelectorAll('.ce-mode-btn').forEach(b=>b.classList.toggle('on',b.dataset.cm===mode));
}
function ceFormSave(){
  const mode=_ceMode||'reps';
  const name=(document.getElementById('ce-f-name')?.value||'').trim();
  if(!name){toast('Please enter a name','warning');return}
  const sets=Math.max(1,parseInt(document.getElementById('ce-f-sets')?.value,10)||3);
  const existing=ceEditId?customExercises[ceEditId]:null;
  const ce={
    id:ceEditId||('ce_'+Date.now()+'_'+Math.random().toString(36).slice(2,7)),
    name,mode,sets,
    repsPerSet:mode==='reps'?Math.max(1,parseInt(document.getElementById('ce-f-reps')?.value,10)||10):0,
    secondsPerSet:mode==='time'?Math.max(1,parseInt(document.getElementById('ce-f-time')?.value,10)||30):0,
    distancePerSet:mode==='distance'?Math.max(1,parseInt(document.getElementById('ce-f-dist')?.value,10)||1):0,
    unit:mode==='distance'?((document.getElementById('ce-f-unit')?.value||'km').trim()||'km'):'',
    suffix:(document.getElementById('ce-f-suffix')?.value||''),
    howto:(document.getElementById('ce-f-howto')?.value||''),
    focus:(document.getElementById('ce-f-focus')?.value||''),
    ytId:((document.getElementById('ce-f-yt')?.value)||'').trim(),
    createdAt:existing?.createdAt||Date.now()
  };
  const ex=getCustomExercises();ex[ce.id]=ce;saveCustomExercises(ex);
  if(ceEditId){
    delete workoutOverrides[ce.id];
    saveWorkoutOverrides();
    toast('Exercise updated','check');
    ceEditId=null;
    cePickerSetTab('mine');
  }else{
    if(cePickerDay!=null){
      const plan=getCustomPlan();
      if(!plan.days)plan.days={};
      if(!plan.days[cePickerDay])plan.days[cePickerDay]={exs:[]};
      if(!plan.days[cePickerDay].exs)plan.days[cePickerDay].exs=[];
      plan.days[cePickerDay].exs.push(ce.id);
      saveCustomPlan(plan);
      cePickerClose();
      buildWeekTabs();renderExCards();
      toast('Exercise created and added','party');
    }else{
      toast('Exercise created','check');
      cePickerSetTab('mine');
    }
  }
}
function renderDash(){
  if(!user)return;
  const now=new Date();
  document.getElementById('dg').textContent='Welcome back, '+user.name;
  document.getElementById('dd-date').textContent=now.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  const dd=DAILY_DRIVES[now.getDay()]||DAILY_DRIVES[0];
  document.getElementById('dd-q').textContent='"'+dd.q+'"';
  document.getElementById('dd-ch').textContent='Today\'s Challenge: '+dd.c;
  document.getElementById('dd-motiv').textContent='"'+MOTIVATIONS[now.getDay()%MOTIVATIONS.length]+'"';
  animC(document.getElementById('s-str'),7);
  animC(document.getElementById('s-ses'),25);
  animC(document.getElementById('s-bk'),2);
  animC(document.getElementById('s-sc'),84);
  const tod=WORKOUTS[difficulty]?.[now.getDay()]||WORKOUTS.beginner[now.getDay()];
  const el=document.getElementById('dash-ex-preview');if(!el)return;
  if(tod.isRest){el.innerHTML=`<div style="background:var(--bg3);border-radius:12px;padding:18px;text-align:center"><div style="display:flex;justify-content:center;color:var(--acc);margin-bottom:7px">${ico('leaf',26)}</div><div style="font-weight:700;margin-bottom:4px">${tod.tag}</div><p style="font-size:12px;color:var(--txt2);font-weight:400">${tod.restDesc}</p></div>`;return}
  const exs=getDayExercises(difficulty==='custom'?'beginner':difficulty,now.getDay());
  el.innerHTML=exs.slice(0,3).map(ex=>`<div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg3);border-radius:10px;padding:10px 13px;margin-bottom:8px"><div style="font-size:13px;font-weight:700">${escapeHtml(ex.name)}</div><div style="font-size:11px;color:var(--acc);font-weight:700">${ex.reps}</div></div>`).join('')+`<button class="btn bp bsm" style="margin-top:7px;width:100%" onclick="grd('personal')">View Full Workout →</button>`;
}
function animC(el,target){if(!el||isNaN(target))return;let c=0;const step=Math.ceil(target/55);const t=setInterval(()=>{c=Math.min(c+step,target);el.textContent=c.toLocaleString();if(c>=target)clearInterval(t)},22)}
const counted=new Set();
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting&&!counted.has(e.target)){counted.add(e.target);animC(e.target,parseInt(e.target.getAttribute('data-count')))}})},{threshold:.3});
document.querySelectorAll('.cnt').forEach(el=>io.observe(el));
function renderComm(){
  if(!user)return;
  const ca=document.getElementById('comm-av');if(ca)ca.textContent=user.name.charAt(0).toUpperCase();
  renderFeed();renderMembers();
}
function renderFeed(){
  const el=document.getElementById('comm-feed');if(!el)return;
  el.innerHTML=commPosts.map(p=>{
    const cs=p.comments.map(c=>`<div class="cb-item"><div class="cb-auth">${typeof c==='object'?c.a:'Member'}</div><div class="cb-txt">${typeof c==='object'?c.t:c}</div></div>`).join('');
    const own=p.author===user?.name;
    return `<div class="post-card" id="pc-${p.id}"><div class="ph"><div class="pav" style="background:${p.col}">${p.init}</div><div><div class="pnm">${p.author}</div><div class="ptm">${p.time}</div></div></div><div class="pbody">${escapeHtml(p.text)}</div><div class="rr"><button class="rb${p.mine==='l'?' on':''}" onclick="react(${p.id},'l')">${ico('thumbs-up',13)} ${p.r.l}</button><button class="rb${p.mine==='f'?' on':''}" onclick="react(${p.id},'f')">${ico('fire',13)} ${p.r.f}</button><button class="rb${p.mine==='h'?' on':''}" onclick="react(${p.id},'h')">${ico('heart',13)} ${p.r.h}</button><button class="rb${p.mine==='c'?' on':''}" onclick="react(${p.id},'c')">${ico('clap',13)} ${p.r.c}</button></div><div class="pa"><button class="pab" onclick="toggleCB(${p.id})">Comment</button>${own?`<button class="pab danger" onclick="delPost(${p.id})">Delete</button>`:''}</div><div class="cb-box" id="cb-${p.id}"><div class="cb-row"><input class="cb-inp" id="ci-${p.id}" placeholder="Write a reply..." onkeydown="if(event.key==='Enter')submitC(${p.id})"/><button class="cb-send" onclick="submitC(${p.id})">Send</button></div><div class="cb-list">${cs}</div></div></div>`;
  }).join('');
}
function createPost(){const ta=document.getElementById('post-input');const t=ta.value.trim();if(!t)return toast('Please write something.','warning');const cols=['#39FF14','#FFD60A','#4361ee','#c77dff','#e76f51'];commPosts.unshift({id:Date.now(),author:user.name,init:user.name.charAt(0).toUpperCase(),col:cols[Math.floor(Math.random()*cols.length)],text:t,time:'Just now',r:{l:0,f:0,h:0,c:0},mine:null,comments:[]});ta.value='';renderFeed();toast('Shared!','rocket')}
function react(id,type){const p=commPosts.find(p=>p.id===id);if(!p)return;if(p.mine===type){p.r[type]--;p.mine=null}else{if(p.mine)p.r[p.mine]--;p.r[type]++;p.mine=type}renderFeed()}
function toggleCB(id){const el=document.getElementById('cb-'+id);if(el){el.style.display=el.style.display==='block'?'none':'block';document.getElementById('ci-'+id)?.focus()}}
function submitC(id){const inp=document.getElementById('ci-'+id);if(!inp)return;const t=inp.value.trim();if(!t)return;const p=commPosts.find(p=>p.id===id);if(!p)return;p.comments.push({a:user.name,t});renderFeed();setTimeout(()=>{const cb=document.getElementById('cb-'+id);if(cb)cb.style.display='block'},50)}
function delPost(id){if(!confirm('Delete this post?'))return;commPosts=commPosts.filter(p=>p.id!==id);renderFeed();toast('Deleted','trash')}
function renderMembers(){const el=document.getElementById('top-members');if(!el)return;const ms=[{n:'Amara O.',s:21,c:'#39FF14'},{n:'David M.',s:18,c:'#FFD60A'},{n:'Sarah K.',s:15,c:'#4361ee'}];el.innerHTML=ms.map(m=>`<div class="mi"><div class="mav" style="background:${m.c};color:${m.c==='#FFD60A'||m.c==='#39FF14'?'#111':'#fff'}">${m.n.charAt(0)}</div><div><div class="mn">${m.n}</div><div class="ms">${ico('fire',11)} ${m.s}-day streak</div></div></div>`).join('')}
function renderProfile(){
  if(!user)return;
  const n=document.getElementById('prof-name');if(n)n.textContent=user.name;
  const a=document.getElementById('prof-av');if(a)a.textContent=user.name.charAt(0).toUpperCase();
  const cal=document.getElementById('prof-cal');if(!cal)return;
  const today=new Date().getDate();
  const done=[1,2,3,5,6,7,8,9,12,13,14,15,16,19,20,21,22,23];
  cal.innerHTML=Array.from({length:31},(_,i)=>i+1).map(d=>`<div class="cc${done.includes(d)?' done':''}${d===today?' today-c':''}">${d}</div>`).join('');
}
async function renderAdmin(){
  const tb=document.getElementById('admin-users-tb');if(!tb)return;
  try {
    const us = await cloudGetAllProfiles();
    tb.innerHTML = us.length
      ? us.map(u=>`<tr><td>${escapeHtml(u.name)}</td><td>${escapeHtml(u.email)}</td><td><span style="background:rgba(57,255,20,.12);color:var(--acc);border-radius:20px;padding:2px 9px;font-size:10px;font-weight:700">${u.is_admin?'Admin':'Active'}</span></td></tr>`).join('')
      : `<tr><td colspan="3" style="text-align:center;color:var(--txt2);padding:20px">No registered users yet</td></tr>`;
  } catch {
    tb.innerHTML = `<tr><td colspan="3" style="text-align:center;color:var(--txt2);padding:20px">Could not load users</td></tr>`;
  }
  renderYTManager();
  document.querySelectorAll('#panel-adash .cnt').forEach(el=>animC(el,parseInt(el.getAttribute('data-count'))));
}

function renderYTManager(){
  const cont=document.getElementById('yt-manager-list');if(!cont)return;
  const allEx=[];
  ['beginner','intermediate','professional'].forEach(tier=>{
    Object.values(WORKOUTS[tier]).forEach(day=>{if(day.exs)day.exs.forEach(ex=>allEx.push({...ex,tierLabel:tier,dayLabel:day.label}))});
  });
  const filtered=allEx.filter(ex=>ytFilterTier==='all'||ex.tierLabel===ytFilterTier);
  cont.innerHTML=filtered.map(ex=>{
    const saved=ytLinks[ex.id]||'';
    return `<div class="yt-ex-card" id="ytc-${ex.id}"><div class="yt-ex-name">${escapeHtml(ex.name)}</div><div class="yt-ex-meta">${ex.tierLabel} · ${ex.dayLabel} · ${ex.reps}</div><div class="yt-input-row"><input class="yt-input" id="yt-${ex.id}" placeholder="YouTube embed ID" value="${saved}"/><button class="yt-save-btn" onclick="saveYT('${ex.id}')">Save</button><button class="btn bg-b bsm" onclick="previewYT('${ex.id}')">Preview</button></div><div class="yt-preview" id="ytprev-${ex.id}"><iframe src="" allowfullscreen loading="lazy"></iframe></div></div>`;
  }).join('');
}
function saveYT(exId){const inp=document.getElementById('yt-'+exId);if(!inp)return;let id=inp.value.trim();const m=id.match(/(?:v=|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);if(m)id=m[1];ytLinks[exId]=id;ss('bn_yt_links',ytLinks);toast('YouTube link saved','play')}
function previewYT(exId){const inp=document.getElementById('yt-'+exId);if(!inp)return;let id=inp.value.trim();const m=id.match(/(?:v=|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);if(m)id=m[1];const prev=document.getElementById('ytprev-'+exId);if(!prev)return;if(!id){toast('Enter a YouTube ID first','warning');return}prev.style.display='block';prev.querySelector('iframe').src='https://www.youtube.com/embed/'+id+'?rel=0'}
function filterYTTier(tier,btn){ytFilterTier=tier;document.querySelectorAll('.tier-filter .tf-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');renderYTManager()}
function renderAdminPublicList(){
  const cont=document.getElementById('admin-public-list');if(!cont)return;
  const allUsers=gs('bn_users',{});
  const merged={};
  Object.keys(allUsers).forEach(email=>{
    const exs=gs('bn_custom_exercises_'+email,{});
    Object.keys(exs).forEach(id=>{merged[id]={...exs[id],_owner:allUsers[email].name||email}});
  });
  if(user){
    const myEx=gs('bn_custom_exercises_'+user.email,{});
    Object.keys(myEx).forEach(id=>{merged[id]={...myEx[id],_owner:user.name}});
  }
  const pub=getPublicExercises();
  const keys=Object.keys(merged);
  if(!keys.length){cont.innerHTML='<div style="padding:30px;text-align:center;color:var(--txt2);font-size:13px">No user-created exercises found yet.</div>';return}
  cont.innerHTML=keys.map(id=>{
    const ce=merged[id];
    const pubId='pe_'+id.replace(/^ce_/,'');
    const isPub=!!pub[pubId];
    return `<div class="ce-public-row"><div style="flex:1;min-width:0"><div class="ce-public-name">${escapeHtml(ce.name)} <span style="font-size:10px;color:var(--txt2);font-weight:400">· ${escapeHtml(ce._owner||'')}</span></div><div class="ce-public-meta">${escapeHtml(ceModeLabel(ce))}</div></div><button class="btn bp bsm" onclick="adminPushPublic('${id}')" ${isPub?'style="opacity:.5" disabled':''}>${isPub?'Published':'Push to Public'}</button></div>`;
  }).join('');
}
function adminPushPublic(id){
  const allUsers=gs('bn_users',{});
  let ce=null;
  Object.keys(allUsers).forEach(email=>{const exs=gs('bn_custom_exercises_'+email,{});if(exs[id])ce=exs[id]});
  if(!ce&&user){const exs=gs('bn_custom_exercises_'+user.email,{});if(exs[id])ce=exs[id]}
  if(!ce){toast('Exercise not found','warning');return}
  const pub=getPublicExercises();
  const pubId='pe_'+id.replace(/^ce_/,'');
  pub[pubId]={...ce,id:pubId,publishedBy:user?.name||'Admin',publishedAt:Date.now()};
  savePublicExercises(pub);
  toast('Exercise published to community','party');
  renderAdminPublicList();
}
function aPanel(id,e){
  document.querySelectorAll('.ap').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.admin-sb .sbl').forEach(l=>l.classList.remove('on'));
  const p=document.getElementById('panel-'+id);if(p)p.classList.add('on');
  if(e?.currentTarget)e.currentTarget.classList.add('on');
  if(id==='apublic')renderAdminPublicList();
}
const HABIT_COLORS=['#39FF14','#FFD60A','#FF6B6B','#60A5FA','#C77DFF','#F97316','#10B981','#EC4899','#8B5CF6','#06B6D4','#F59E0B','#84CC16','#EF4444','#3B82F6','#A855F7','#14B8A6','#F472B6','#6366F1','#22C55E','#FB7185'];
const HABIT_STATUS_CYCLE=['unanswered','completed','missed','cancelled'];
let hView='day',hDetailId=null,hSelDate=null,hForm=null,hFormMode='create',hLogHabitId=null,hLongPressTimer=null,hMenuHabitId=null;
function todayStr(){return fmtDate(new Date())}
function fmtDate(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function parseDate(s){const p=s.split('-').map(Number);return new Date(p[0],p[1]-1,p[2])}
function addDays(s,n){const d=parseDate(s);d.setDate(d.getDate()+n);return fmtDate(d)}
function dayName(s){return DAY_FULL[parseDate(s).getDay()]}
function isLightColor(hex){const c=hex.replace('#','');const r=parseInt(c.substr(0,2),16),g=parseInt(c.substr(2,2),16),b=parseInt(c.substr(4,2),16);return (0.299*r+0.587*g+0.114*b)/255>0.62}
function getHabits(){if(!user)return[];return gs('bn_habits_'+user.email,[])}
function saveHabits(a){if(!user)return;ss('bn_habits_'+user.email,a)}
function getHabitLogs(){if(!user)return{};return gs('bn_habitlogs_'+user.email,{})}
function saveHabitLogs(o){if(!user)return;ss('bn_habitlogs_'+user.email,o)}
function hLogKey(id,d){return id+'_'+d}
function getHabitLog(id,d){return getHabitLogs()[hLogKey(id,d)]||null}
function setHabitLog(id,d,data){const l=getHabitLogs();l[hLogKey(id,d)]={habitId:id,date:d,...data,timestamp:Date.now()};saveHabitLogs(l)}
function deleteHabitLog(id,d){const l=getHabitLogs();delete l[hLogKey(id,d)];saveHabitLogs(l)}
function distributeEvenly(count,range){const s=[];for(let i=0;i<count;i++)s.push(Math.floor(i*range/count));return s}
function isHabitScheduledOn(habit,dateStr){
  if(!habit.active)return false;
  if(dateStr<habit.frequency.startDate)return false;
  const f=habit.frequency;
  if(f.type==='daily')return true;
  const start=parseDate(habit.frequency.startDate),target=parseDate(dateStr);
  const diff=Math.floor((target-start)/86400000);
  if(f.type==='every_x_days')return diff%Math.max(1,f.x)===0;
  if(f.type==='x_per_week'){const wd=target.getDay();return distributeEvenly(Math.min(7,Math.max(1,f.x)),7).includes(wd)}
  if(f.type==='x_per_month'){const dom=target.getDate()-1;const dim=new Date(target.getFullYear(),target.getMonth()+1,0).getDate();return distributeEvenly(Math.min(dim,Math.max(1,f.x)),dim).includes(dom)}
  if(f.type==='x_in_y_days'){const c=Math.max(1,f.y);const p=((diff%c)+c)%c;return distributeEvenly(Math.min(c,Math.max(1,f.x)),c).includes(p)}
  return false;
}
function habitFreqLabel(f){
  if(f.type==='daily')return'Every day';
  if(f.type==='every_x_days')return'Every '+f.x+' day'+(f.x>1?'s':'');
  if(f.type==='x_per_week')return f.x+' time'+(f.x>1?'s':'')+' per week';
  if(f.type==='x_per_month')return f.x+' time'+(f.x>1?'s':'')+' per month';
  if(f.type==='x_in_y_days')return f.x+' time'+(f.x>1?'s':'')+' in '+f.y+' days';
  return'';
}
function renderHabits(){
  if(!hSelDate)hSelDate=todayStr();
  const root=document.getElementById('habits-root');if(!root)return;
  if(!user){root.innerHTML='';return}
  if(hView==='detail'&&hDetailId)root.innerHTML=renderHabitDetailHTML();
  else if(hView==='all')root.innerHTML=renderHabitAllHTML();
  else root.innerHTML=renderHabitDayHTML();
  hydrateIcons(root);
}
function renderHabitDayHTML(){
  const date=hSelDate,today=todayStr(),isToday=date===today;
  const scheduled=getHabits().filter(h=>isHabitScheduledOn(h,date));
  const logs=getHabitLogs();
  const dateLabel=MONTH_NAMES[parseDate(date).getMonth()]+' '+parseDate(date).getDate();
  const dateNav=`<div class="habit-date-nav"><button class="habit-nav-btn" onclick="habitShiftDate(-1)">${ico('arrow-left',15)}</button><div class="habit-date-center"><div class="habit-date-day">${dayName(date)}</div><div class="habit-date-full">${dateLabel}</div></div><button class="habit-nav-btn" onclick="habitShiftDate(1)">${ico('arrow-right',15)}</button></div><div class="habit-today-row">${!isToday?`<button class="habit-mini-btn" onclick="habitGoToday()">Jump to Today</button>`:`<span class="habit-mini-btn habit-mini-btn-static">Today</span>`}<button class="habit-mini-btn" onclick="habitShowAll()">View All Habits →</button></div>`;
  if(!scheduled.length){
    const hasAny=getHabits().length>0;
    return `<div class="dash-sec">${dateNav}<div class="habit-empty"><div class="habit-empty-ico">${ico('calendar',38)}</div><div class="habit-empty-title">Nothing scheduled</div><div class="habit-empty-desc">${hasAny?'No habits are scheduled for '+dayName(date)+'.':'Create your first habit to start building consistency.'}</div><button class="btn bp" onclick="habitOpenCreate()">${ico('plus',14)} Create Habit</button></div></div>`;
  }
  return `<div class="dash-sec"><div class="ds-hdr"><div class="ds-t">${ico('check-square',15)} Habits for ${dayName(date)}</div><button class="btn bp bsm" onclick="habitOpenCreate()">${ico('plus',12)} New</button></div>${dateNav}<div class="habit-list">${scheduled.map(h=>renderHabitCardHTML(h,date,logs[hLogKey(h.id,date)])).join('')}</div></div>`;
}
function renderHabitCardHTML(h,date,log){
  const status=log?.status||'unanswered';
  const isLight=isLightColor(h.color);
  const fg=isLight?'#0a0a0a':'#ffffff';
  let inner='',cls='unanswered';
  if(h.type==='measurable'){
    if(log?.value!=null){inner=`<span class="habit-val">${log.value}</span><span class="habit-unit">${escapeHtml(h.unit||'')}</span>`;cls='completed'}
    else{inner=`<span class="habit-q">?</span><span class="habit-unit">${escapeHtml(h.unit||'')}</span>`}
  }else{
    if(status==='completed'){inner=ico('check',20);cls='completed'}
    else if(status==='missed'){inner='—';cls='missed'}
    else if(status==='cancelled'){inner=ico('star',16);cls='cancelled'}
    else{inner='?'}
  }
  const bg=status==='unanswered'?'':h.color;
  const targetBadge=h.type==='measurable'&&h.target?`<span class="habit-target">${h.targetCondition==='atleast'?'≥':'≤'} ${h.target} ${escapeHtml(h.unit||'')}</span>`:'';
  return `<div class="habit-card" style="--hc:${h.color}"><div class="habit-card-stripe"></div><div class="habit-card-body" onclick="habitOpenDetail('${h.id}')" onpointerdown="habitCardDown(event,'${h.id}')" onpointerup="habitCardUp()" onpointerleave="habitCardUp()" onpointercancel="habitCardUp()" oncontextmenu="event.preventDefault();habitOpenMenuAt(event,'${h.id}')"><div class="habit-card-info"><div class="habit-card-name">${escapeHtml(h.name)}</div>${h.question?`<div class="habit-card-q">${escapeHtml(h.question)}</div>`:''}${targetBadge}</div></div><button class="habit-status-btn habit-status-${cls}" style="${bg?'background:'+bg+';border-color:'+bg+';color:'+fg:''}" onclick="habitTapStatus(event,'${h.id}')">${inner}</button></div>`;
}
function renderHabitAllHTML(){
  const habits=getHabits();
  const head=`<div class="habit-detail-head" style="margin-bottom:14px"><button class="habit-detail-back" onclick="habitShowDay()">${ico('arrow-left',15)}</button><div style="flex:1"><div class="habit-detail-name" style="font-size:17px">All Habits</div><div style="font-size:11px;color:var(--txt2);font-weight:400">${habits.length} total</div></div><button class="btn bp bsm" onclick="habitOpenCreate()">${ico('plus',12)} New</button></div>`;
  if(!habits.length)return `<div class="dash-sec">${head}<div class="habit-empty"><div class="habit-empty-ico">${ico('check-square',38)}</div><div class="habit-empty-title">No habits yet</div><button class="btn bp" onclick="habitOpenCreate()">${ico('plus',14)} Create Habit</button></div></div>`;
  const list=habits.map(h=>{
    const sched=habitFreqLabel(h.frequency);
    const typeTxt=h.type==='measurable'?(h.target?`${h.targetCondition==='atleast'?'≥':'≤'} ${h.target} ${escapeHtml(h.unit||'')}`:'Measurable'):'Yes / No';
    return `<div class="habit-all-row" onclick="habitOpenDetail('${h.id}')"><div class="habit-all-dot" style="background:${h.color}"></div><div class="habit-all-info"><div class="habit-all-name">${escapeHtml(h.name)}</div><div class="habit-all-meta">${sched} · ${typeTxt}</div></div><div class="habit-all-arrow">${ico('arrow-right',14)}</div></div>`;
  }).join('');
  return `<div class="dash-sec">${head}${list}</div>`;
}
function renderHabitDetailHTML(){
  const h=getHabits().find(x=>x.id===hDetailId);
  if(!h){hView='day';return renderHabitDayHTML()}
  const m=computeHabitMetrics(h);
  const sched=habitFreqLabel(h.frequency);
  const typeTxt=h.type==='measurable'?'Measurable':'Yes / No';
  const targetStr=h.type==='measurable'&&h.target?`${h.targetCondition==='atleast'?'At least':'At most'} ${h.target} ${escapeHtml(h.unit||'')}`:'';
  const remDays=h.reminder?.enabled?Object.keys(h.reminder.days||{}).map(d=>{const di=parseInt(d);return DAY_FULL[di]+' — '+fmt12(h.reminder.days[d])}).join('<br>')||'<em style="color:var(--txt3)">No days selected</em>':'<em style="color:var(--txt3)">Off</em>';
  const weekActual=h.type==='measurable'?getWeekActual(h):0;
  const targetPct=h.type==='measurable'&&h.target?Math.min(200,Math.round((weekActual/h.target)*100)):0;
  return `<div class="dash-sec" style="--hc:${h.color}"><div class="habit-detail-head"><button class="habit-detail-back" onclick="habitShowDay()">${ico('arrow-left',15)}</button><div style="flex:1;font-size:12px;color:var(--txt2);font-weight:700">Habit Overview</div><button class="habit-detail-back" onclick="habitOpenEdit('${h.id}')">${ico('edit',14)}</button></div><div class="habit-detail-hero"><div class="habit-detail-name">${escapeHtml(h.name)}</div>${h.question?`<div class="habit-detail-q">${escapeHtml(h.question)}</div>`:''}<div class="habit-detail-badges"><span class="habit-pill">${typeTxt}</span><span class="habit-pill">${sched}</span>${targetStr?`<span class="habit-pill">${targetStr}</span>`:''}</div></div><div class="habit-metrics"><div class="habit-metric"><div class="habit-metric-v">${m.current}</div><div class="habit-metric-l">Current Streak</div></div><div class="habit-metric"><div class="habit-metric-v yel">${m.best}</div><div class="habit-metric-l">Best Streak</div></div><div class="habit-metric"><div class="habit-metric-v">${m.rate}%</div><div class="habit-metric-l">Completion</div></div><div class="habit-metric"><div class="habit-metric-v">${m.done}</div><div class="habit-metric-l">Completed</div></div><div class="habit-metric"><div class="habit-metric-v" style="color:#ff6b6b">${m.missed}</div><div class="habit-metric-l">Missed</div></div></div>${h.type==='measurable'&&h.target?`<div class="habit-target-progress"><div class="habit-tp-row"><span>This week</span><strong>${weekActual} ${escapeHtml(h.unit||'')}</strong></div><div class="habit-tp-row" style="margin-bottom:8px"><span>Target</span><strong>${targetStr}</strong></div><div class="habit-tp-bar"><div class="habit-tp-fill" style="width:${Math.min(100,targetPct)}%"></div></div><div style="font-size:10px;color:var(--txt2);font-weight:400;margin-top:6px">${targetPct}% of weekly target</div></div>`:''}<div style="background:var(--bg3);border-radius:11px;padding:14px;margin-bottom:12px"><div style="font-size:10px;color:var(--txt2);font-weight:700;letter-spacing:.8px;text-transform:uppercase;margin-bottom:8px">Schedule & Reminders</div><div style="font-size:12px;font-weight:700;margin-bottom:6px">${sched}</div><div style="font-size:11px;color:var(--txt2);font-weight:400;line-height:1.75">${remDays}</div></div><div style="margin-bottom:14px"><div style="font-size:10px;color:var(--txt2);font-weight:700;letter-spacing:.8px;text-transform:uppercase;margin-bottom:10px">History</div>${renderHabitCalendarHTML(h)}</div>${h.notes?`<div style="background:var(--bg3);border-radius:11px;padding:14px;margin-bottom:14px"><div style="font-size:10px;color:var(--txt2);font-weight:700;letter-spacing:.8px;text-transform:uppercase;margin-bottom:6px">Notes</div><div style="font-size:12px;color:var(--txt2);font-weight:400;line-height:1.7;white-space:pre-wrap">${escapeHtml(h.notes)}</div></div>`:''}<div style="display:flex;gap:8px"><button class="btn bg-b bsm" style="flex:1" onclick="habitOpenEdit('${h.id}')">${ico('edit',12)} Edit Habit</button><button class="btn bg-b bsm" style="flex:1;color:#ff6b6b;border-color:rgba(255,60,60,.3)" onclick="habitDelete('${h.id}')">${ico('trash',12)} Delete</button></div></div>`;
}
function renderHabitCalendarHTML(h){
  const today=todayStr(),now=new Date(),year=now.getFullYear(),month=now.getMonth();
  const first=new Date(year,month,1),startWd=first.getDay();
  const daysInMonth=new Date(year,month+1,0).getDate(),startDate=h.frequency.startDate;
  const logs=getHabitLogs();
  let html=`<div class="habit-cal">`;
  ['S','M','T','W','T','F','S'].forEach(d=>html+=`<div class="habit-cal-hdr">${d}</div>`);
  for(let i=0;i<startWd;i++)html+=`<div class="habit-cal-day out"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const ds=fmtDate(new Date(year,month,d)),log=logs[hLogKey(h.id,ds)];
    const status=log?.status||'unanswered';
    let cls='habit-cal-day';
    if(ds<startDate)cls+=' before';else if(ds>today)cls+=' out';
    else if(status==='completed')cls+=' completed';
    else if(status==='missed')cls+=' missed';
    else if(status==='cancelled')cls+=' cancelled';
    if(ds===today)cls+=' today';
    let label=d;
    if(h.type==='measurable'&&log?.value!=null){label=log.value;cls+=' val'}
    html+=`<div class="${cls}">${label}</div>`;
  }
  return html+`</div>`;
}
function fmt12(t){if(!t)return'';const[H,M]=t.split(':').map(Number);const ampm=H>=12?'PM':'AM';const h12=H%12||12;return h12+':'+String(M).padStart(2,'0')+' '+ampm}
function computeHabitMetrics(h){
  const logs=getHabitLogs(),today=todayStr();
  let total=0,done=0,missed=0,best=0,run=0;
  const start=parseDate(h.frequency.startDate),cur=new Date(start),end=parseDate(today);
  while(cur<=end){
    const ds=fmtDate(cur);
    if(isHabitScheduledOn(h,ds)){
      total++;const log=logs[hLogKey(h.id,ds)];const s=log?.status||'unanswered';
      if(s==='completed'){run++;done++;if(run>best)best=run}
      else if(s==='missed'){missed++;run=0}
      else if(s==='cancelled'){}
      else{if(ds<today){missed++;run=0}}
    }
    cur.setDate(cur.getDate()+1);
  }
  let current=0,d=today;
  for(let i=0;i<3650;i++){
    if(d<h.frequency.startDate)break;
    if(isHabitScheduledOn(h,d)){
      const log=logs[hLogKey(h.id,d)];const s=log?.status||'unanswered';
      if(s==='completed')current++;else if(s==='cancelled'){}
      else if(s==='missed')break;else if(d!==today)break;
    }
    d=addDays(d,-1);
  }
  return {current,best,rate:total>0?Math.round((done/total)*100):0,done,missed,total};
}
function getWeekActual(h){
  const logs=getHabitLogs(),today=todayStr(),cur=parseDate(today);
  const wd=cur.getDay();let sum=0;
  for(let i=0;i<=wd;i++){const ds=addDays(today,-(wd-i));const log=logs[hLogKey(h.id,ds)];if(log?.value!=null)sum+=Number(log.value)||0}
  return sum;
}
function habitShiftDate(n){hSelDate=addDays(hSelDate||todayStr(),n);renderHabits()}
function habitGoToday(){hSelDate=todayStr();renderHabits()}
function habitShowAll(){hView='all';renderHabits()}
function habitShowDay(){hView='day';hDetailId=null;renderHabits()}
function habitOpenDetail(id){hView='detail';hDetailId=id;renderHabits()}
function habitTapStatus(e,id){
  e.stopPropagation();
  const h=getHabits().find(x=>x.id===id);if(!h)return;
  if(h.type==='measurable'){habitOpenLog(id);return}
  const date=hSelDate||todayStr(),log=getHabitLog(id,date),cur=log?.status||'unanswered';
  const idx=HABIT_STATUS_CYCLE.indexOf(cur),next=HABIT_STATUS_CYCLE[(idx+1)%HABIT_STATUS_CYCLE.length];
  setHabitLog(id,date,{status:next,value:null,note:''});
  if(next==='completed')celebrateHabit(e.currentTarget,h.color);
  renderHabits();
}
function celebrateHabit(el,color){
  if(!el)return;
  const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const palette=[color,'#FFD60A','#39FF14','#ffffff','#60A5FA'];
  for(let i=0;i<14;i++){
    const p=document.createElement('div');p.className='habit-burst';
    const angle=(i/14)*Math.PI*2+(Math.random()-0.5)*0.6;
    const dist=38+Math.random()*38,dx=Math.cos(angle)*dist,dy=Math.sin(angle)*dist-32;
    const sz=4+Math.random()*4;
    p.style.cssText=`left:${cx}px;top:${cy}px;background:${palette[Math.floor(Math.random()*palette.length)]};width:${sz}px;height:${sz}px;--dx:${dx}px;--dy:${dy}px`;
    document.body.appendChild(p);setTimeout(()=>p.remove(),950);
  }
}
function habitCardDown(e,id){
  if(e.pointerType==='mouse'&&e.button!==0)return;
  clearTimeout(hLongPressTimer);
  const sx=e.clientX,sy=e.clientY;
  hLongPressTimer=setTimeout(()=>{habitOpenMenuAt(e,id);if(navigator.vibrate)navigator.vibrate(15)},550);
  const move=ev=>{if(Math.abs(ev.clientX-sx)>10||Math.abs(ev.clientY-sy)>10){clearTimeout(hLongPressTimer);document.removeEventListener('pointermove',move)}};
  document.addEventListener('pointermove',move);
  document.addEventListener('pointerup',()=>{clearTimeout(hLongPressTimer);document.removeEventListener('pointermove',move)},{once:true});
}
function habitCardUp(){clearTimeout(hLongPressTimer)}
function habitOpenMenuAt(e,id){
  hMenuHabitId=id;
  const menu=document.getElementById('habit-menu');
  const x=e.clientX||(e.touches&&e.touches[0]?.clientX)||window.innerWidth/2;
  const y=e.clientY||(e.touches&&e.touches[0]?.clientY)||window.innerHeight/2;
  menu.style.left=Math.min(x,window.innerWidth-170)+'px';menu.style.top=Math.min(y,window.innerHeight-110)+'px';
  menu.classList.add('open');
  setTimeout(()=>{const close=ev=>{if(!menu.contains(ev.target)){menu.classList.remove('open');document.removeEventListener('pointerdown',close)}};document.addEventListener('pointerdown',close)},50);
}
function habitMenuEdit(){const id=hMenuHabitId;document.getElementById('habit-menu').classList.remove('open');if(id)habitOpenEdit(id)}
function habitMenuDelete(){const id=hMenuHabitId;document.getElementById('habit-menu').classList.remove('open');if(id)habitDelete(id)}
function habitDelete(id){
  const h=getHabits().find(x=>x.id===id);if(!h)return;
  if(!confirm('Delete "'+h.name+'"?\n\nHistorical logs will also be removed.'))return;
  const habits=getHabits().filter(x=>x.id!==id);saveHabits(habits);
  const logs=getHabitLogs();Object.keys(logs).forEach(k=>{if(k.startsWith(id+'_'))delete logs[k]});
  saveHabitLogs(logs);if(hDetailId===id){hView='day';hDetailId=null}
  renderHabits();toast('Habit deleted','trash');
}
function habitOpenCreate(){hFormMode='create';hForm=null;document.getElementById('habit-form-title').textContent='New Habit';renderHabitForm();document.getElementById('habit-form-ov').classList.add('open')}
function habitOpenEdit(id){const h=getHabits().find(x=>x.id===id);if(!h)return;hFormMode='edit';hForm=JSON.parse(JSON.stringify(h));document.getElementById('habit-form-title').textContent='Edit Habit';renderHabitForm();document.getElementById('habit-form-ov').classList.add('open')}
function habitCloseForm(){document.getElementById('habit-form-ov').classList.remove('open');hForm=null}
function renderHabitForm(){
  const body=document.getElementById('habit-form-body'),foot=document.getElementById('habit-form-foot');
  if(!hForm){
    body.innerHTML=`<div style="font-size:13px;color:var(--txt2);font-weight:400;line-height:1.65;margin-bottom:14px">What type of habit is this?</div><div class="habit-type-choice"><button class="habit-type-card" onclick="habitChooseType('yesno')"><div class="htc-ico">${ico('check',20)}</div><div><div class="habit-type-card-name">Yes / No Habit</div><div class="habit-type-card-desc">Simple done-or-not-today tracking.</div></div></button><button class="habit-type-card meas" onclick="habitChooseType('measurable')"><div class="htc-ico">${ico('target',20)}</div><div><div class="habit-type-card-name">Measurable Habit</div><div class="habit-type-card-desc">Track a quantity toward a target.</div></div></button></div>`;
    foot.innerHTML=`<button class="btn bg-b bfl" onclick="habitCloseForm()">Cancel</button>`;
    hydrateIcons(body);hydrateIcons(foot);return;
  }
  const f=hForm,isMeas=f.type==='measurable';
  body.innerHTML=`<div class="habit-field"><label class="habit-label">Habit Name</label><div class="habit-row"><input class="fi" id="hf-name" placeholder="Exercise" value="${escapeHtml(f.name)}" oninput="hForm.name=this.value"/><div class="habit-color-dot" style="--hc:${f.color}" onclick="togglePalette()"></div></div><div class="habit-palette" id="habit-palette" style="display:none">${HABIT_COLORS.map(c=>`<div class="habit-swatch${c===f.color?' on':''}" style="background:${c}" onclick="habitPickColor('${c}')"></div>`).join('')}</div></div><div class="habit-field"><label class="habit-label">Question</label><input class="fi" id="hf-q" placeholder="${isMeas?'How many pages did you read today?':'Did you exercise today?'}" value="${escapeHtml(f.question)}" oninput="hForm.question=this.value"/></div>${isMeas?`<div class="habit-field"><label class="habit-label">Unit</label><input class="fi" id="hf-unit" placeholder="pages, miles..." value="${escapeHtml(f.unit)}" oninput="hForm.unit=this.value"/></div><div class="habit-field"><label class="habit-label">Target</label><div class="habit-row" style="flex-wrap:wrap;gap:8px"><select class="fi" style="width:auto;padding:8px 12px;background:var(--bg3)" onchange="hForm.targetCondition=this.value"><option value="atleast"${f.targetCondition==='atleast'?' selected':''}>At least</option><option value="atmost"${f.targetCondition==='atmost'?' selected':''}>At most</option></select><input class="fi" style="width:100px;padding:8px 12px" type="number" min="0" placeholder="15" value="${f.target||''}" oninput="hForm.target=this.value===''?'':Number(this.value)"/></div></div>`:''}<div class="habit-field"><label class="habit-label">Frequency</label><select class="fi" style="background:var(--bg3)" onchange="habitFreqChange(this.value)"><option value="daily"${f.frequency.type==='daily'?' selected':''}>Every day</option><option value="every_x_days"${f.frequency.type==='every_x_days'?' selected':''}>Every X days</option><option value="x_per_week"${f.frequency.type==='x_per_week'?' selected':''}>X times per week</option><option value="x_per_month"${f.frequency.type==='x_per_month'?' selected':''}>X times per month</option><option value="x_in_y_days"${f.frequency.type==='x_in_y_days'?' selected':''}>X times in X days</option></select><div class="habit-freq-words">${habitFreqWordsHTML()}</div></div><div class="habit-field"><label class="habit-label">Reminder</label><div class="habit-toggle-row"><div class="habit-toggle-lbl">Remind me to do this</div><div class="habit-switch${f.reminder.enabled?' on':''}" onclick="habitToggleReminder()"></div></div>${f.reminder.enabled?renderReminderPanel():''}</div><div class="habit-field"><label class="habit-label">Notes (Optional)</label><textarea class="fi" style="min-height:70px;resize:vertical;font-weight:400" placeholder="Add a note..." oninput="hForm.notes=this.value">${escapeHtml(f.notes)}</textarea></div>`;
  foot.innerHTML=`<button class="btn bg-b bfl" onclick="habitCloseForm()">Cancel</button><button class="btn bp bfl" onclick="habitSaveForm()">${hFormMode==='edit'?'Save Changes':'Create Habit'}</button>`;
  hydrateIcons(body);hydrateIcons(foot);
}
function habitFreqWordsHTML(){
  const f=hForm.frequency;
  if(f.type==='daily')return'<span style="color:var(--txt3);font-weight:400">Appears every day</span>';
  if(f.type==='every_x_days')return`Every <input class="habit-num-inline" type="number" min="1" max="365" value="${f.x}" oninput="hForm.frequency.x=Math.max(1,parseInt(this.value)||1)"/> days`;
  if(f.type==='x_per_week')return`<input class="habit-num-inline" type="number" min="1" max="7" value="${f.x}" oninput="hForm.frequency.x=Math.max(1,Math.min(7,parseInt(this.value)||1))"/> times per week`;
  if(f.type==='x_per_month')return`<input class="habit-num-inline" type="number" min="1" max="31" value="${f.x}" oninput="hForm.frequency.x=Math.max(1,Math.min(31,parseInt(this.value)||1))"/> times per month`;
  if(f.type==='x_in_y_days')return`<input class="habit-num-inline" type="number" min="1" max="100" value="${f.x}" oninput="hForm.frequency.x=Math.max(1,parseInt(this.value)||1)"/> times in <input class="habit-num-inline" type="number" min="1" max="365" value="${f.y}" oninput="hForm.frequency.y=Math.max(1,parseInt(this.value)||1)"/> days`;
  return'';
}
function renderReminderPanel(){
  const days=hForm.reminder.days||{};
  return `<div class="habit-reminder-panel">${[0,1,2,3,4,5,6].map(di=>{const on=!!days[di];return `<div class="habit-rem-day${on?' on':''}"><button class="habit-rem-day-check${on?' on':''}" onclick="habitToggleRemDay(${di})">${on?ico('check',12):''}</button><div class="habit-rem-day-lbl">${DAY_FULL[di]}</div><input type="time" class="habit-rem-day-time" value="${days[di]||'09:00'}" ${on?'':'disabled'} onchange="habitSetRemTime(${di},this.value)"/></div>`}).join('')}</div>`;
}
function habitToggleRemDay(di){const days=hForm.reminder.days||{};if(days[di])delete days[di];else days[di]='09:00';hForm.reminder.days=days;renderHabitForm()}
function habitSetRemTime(di,v){hForm.reminder.days[di]=v}
function habitChooseType(t){hForm={id:null,type:t,name:'',question:'',color:HABIT_COLORS[0],unit:'',target:'',targetCondition:'atleast',frequency:{type:'daily',x:1,y:1,startDate:todayStr()},reminder:{enabled:false,days:{}},notes:''};renderHabitForm();setTimeout(()=>document.getElementById('hf-name')?.focus(),80)}
function togglePalette(){const p=document.getElementById('habit-palette');if(p)p.style.display=p.style.display==='none'?'grid':'none'}
function habitPickColor(c){hForm.color=c;renderHabitForm()}
function habitFreqChange(v){hForm.frequency.type=v;if(v==='x_per_week'&&hForm.frequency.x>7)hForm.frequency.x=3;if(v==='x_per_month'&&hForm.frequency.x>31)hForm.frequency.x=10;if(v==='x_in_y_days'&&(!hForm.frequency.y||hForm.frequency.y<2))hForm.frequency.y=14;renderHabitForm()}
function habitToggleReminder(){hForm.reminder.enabled=!hForm.reminder.enabled;if(hForm.reminder.enabled&&Object.keys(hForm.reminder.days||{}).length===0)hForm.reminder.days={0:'09:00',1:'09:00',2:'09:00',3:'09:00',4:'09:00',5:'09:00',6:'09:00'};renderHabitForm()}
function habitSaveForm(){
  if(!hForm)return;
  if(!hForm.name||!hForm.name.trim()){toast('Please enter a habit name','warning');return}
  if(hForm.type==='measurable'&&!hForm.unit.trim()){toast('Please enter a unit','warning');return}
  const habits=getHabits(),now=Date.now();
  const clean=JSON.parse(JSON.stringify(hForm));
  clean.name=clean.name.trim();clean.question=(clean.question||'').trim();clean.unit=(clean.unit||'').trim();clean.notes=(clean.notes||'').trim();
  if(clean.type==='measurable'&&clean.target!==''&&clean.target!=null)clean.target=Number(clean.target);else if(clean.type==='measurable')clean.target=null;
  if(hFormMode==='edit'&&clean.id){const i=habits.findIndex(x=>x.id===clean.id);if(i>=0){clean.updatedAt=now;habits[i]=clean}}
  else{clean.id='h_'+now+'_'+Math.random().toString(36).slice(2,7);clean.createdAt=now;clean.updatedAt=now;clean.active=true;habits.push(clean)}
  saveHabits(habits);habitCloseForm();renderHabits();
  toast(hFormMode==='edit'?'Habit updated':'Habit created','check');
}
function habitOpenLog(id){
  const h=getHabits().find(x=>x.id===id);if(!h)return;
  hLogHabitId=id;
  const date=hSelDate||todayStr(),log=getHabitLog(id,date);
  document.getElementById('habit-log-title').textContent=h.name;
  document.getElementById('habit-log-body').innerHTML=`<div style="font-size:13px;color:var(--txt2);font-weight:400;line-height:1.65;margin-bottom:14px">${escapeHtml(h.question||('How many '+escapeHtml(h.unit||'')+' today?'))}</div><div class="habit-field"><div class="habit-row" style="gap:10px"><input class="fi" id="hl-val" type="number" min="0" step="any" value="${log?.value!=null?log.value:0}" style="text-align:center;font-size:20px;font-family:'Poppins',sans-serif;font-weight:900;padding:14px"/><div style="font-size:15px;font-weight:900;color:var(--txt2);min-width:60px">${escapeHtml(h.unit||'')}</div></div></div><div class="habit-field"><label class="habit-label">Notes (Optional)</label><textarea class="fi" id="hl-note" style="min-height:60px;resize:vertical;font-weight:400" placeholder="Anything to remember?">${escapeHtml(log?.note||'')}</textarea></div>`;
  document.getElementById('habit-log-foot').innerHTML=`<button class="btn bg-b bfl" onclick="habitSkipLog()">Skip</button><button class="btn bp bfl" onclick="habitSaveLog()">Save</button>`;
  document.getElementById('habit-log-ov').classList.add('open');
  setTimeout(()=>{const el=document.getElementById('hl-val');if(el){el.focus();el.select()}},80);
}
function habitCloseLog(){document.getElementById('habit-log-ov').classList.remove('open');hLogHabitId=null}
function habitSkipLog(){if(!hLogHabitId){habitCloseLog();return}const date=hSelDate||todayStr();deleteHabitLog(hLogHabitId,date);habitCloseLog();renderHabits()}
function habitSaveLog(){
  if(!hLogHabitId)return;
  const h=getHabits().find(x=>x.id===hLogHabitId);if(!h){habitCloseLog();return}
  const date=hSelDate||todayStr(),valEl=document.getElementById('hl-val'),noteEl=document.getElementById('hl-note');
  const val=Number(valEl?.value)||0,note=(noteEl?.value||'').trim();
  let status='completed';
  if(h.target!=null&&h.target!==''){const target=Number(h.target);if(h.targetCondition==='atleast')status=val>=target?'completed':'missed';else status=val<=target?'completed':'missed'}
  else if(val===0)status='unanswered';
  setHabitLog(h.id,date,{status,value:val,note});
  if(status==='completed')celebrateHabit(document.querySelector('.habit-modal-foot .bp'),h.color);
  habitCloseLog();renderHabits();
}
hydrateIcons();
renderSkillsGrid('home-skills-grid');
// ── Service Worker Registration ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('✓ Service worker registered:', reg.scope))
      .catch(err => console.warn('Service worker registration failed:', err));
  });
}