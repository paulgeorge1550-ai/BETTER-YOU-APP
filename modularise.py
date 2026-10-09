#!/usr/bin/env python3
"""
Better You — Modularization Script
Splits app.js and styles.css into page-named files.
Keeps index.html as a single SPA (no page reloads).

USAGE:
  python modularize.py            -> dry run, shows plan only
  python modularize.py --apply    -> writes files (after backup)
"""
import os, re, sys, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
BACKUP = os.path.join(ROOT, '_backup_before_split')
APPLY = '--apply' in sys.argv

# ─────────────────────────────────────────────
# JS ROUTING — top-level declaration name -> file
# ─────────────────────────────────────────────
JS_ROUTES = {
    # Data
    'WORKOUTS':'js/data/workouts.js',
    'GREETINGS':'js/data/verses.js','PUSH_QUOTES':'js/data/verses.js','WORD_VERSES':'js/data/verses.js',
    'LIFE_SKILLS':'js/data/skills.js',
    'DAILY_DRIVES':'js/data/drives.js','MOTIVATIONS':'js/data/drives.js',
    'COMM_SEED':'js/data/community.js',
    'DEFAULT_BIBLE_PLAN':'js/data/constants.js','MONTH_NAMES':'js/data/constants.js','DAY_FULL':'js/data/constants.js',
    'HABIT_COLORS':'js/data/constants.js','HABIT_STATUS_CYCLE':'js/data/constants.js','CIRC':'js/data/constants.js',
    # Icons
    'ICONS':'js/shared/icons.js','ico':'js/shared/icons.js','hydrateIcons':'js/shared/icons.js','injectIcons':'js/shared/icons.js',
    # State (all top-level lets)
    'user':'js/shared/state.js','tSec':'js/shared/state.js','selDay':'js/shared/state.js',
    'ytFilterTier':'js/shared/state.js','workoutOverrides':'js/shared/state.js',
    'customPlan':'js/shared/state.js','customExercises':'js/shared/state.js',
    'cePickerDay':'js/shared/state.js','cpLongTimer':'js/shared/state.js','ytLinks':'js/shared/state.js',
    'activeHabitList':'js/shared/state.js','habitIdx':'js/shared/state.js',
    'greetingTimer':'js/shared/state.js','habitRotTimer':'js/shared/state.js','hView':'js/shared/state.js',
    # Utilities
    'escapeHtml':'js/shared/utilities.js','fmtDate':'js/shared/utilities.js','parseDate':'js/shared/utilities.js',
    'addDays':'js/shared/utilities.js','todayStr':'js/shared/utilities.js','dayName':'js/shared/utilities.js',
    'fmt12':'js/shared/utilities.js','parseReps':'js/shared/utilities.js','distributeEvenly':'js/shared/utilities.js',
    'isLightColor':'js/shared/utilities.js','animC':'js/shared/utilities.js','counted':'js/shared/utilities.js',
    # UI
    'toast':'js/shared/ui.js','previewToast':'js/shared/ui.js','glowCard':'js/shared/ui.js',
    'glowTop':'js/shared/ui.js','celebrateHabit':'js/shared/ui.js','streakJump':'js/shared/ui.js',
    # Navigation
    'TAB_MAP':'js/shared/navigation.js','PAGE_TO_TAB':'js/shared/navigation.js','nav':'js/shared/navigation.js',
    'grd':'js/shared/navigation.js','commNav':'js/shared/navigation.js','switchTab':'js/shared/navigation.js',
    'setActiveTab':'js/shared/navigation.js','updateTabBarVisibility':'js/shared/navigation.js',
    'toggleMob':'js/shared/navigation.js','closeMob':'js/shared/navigation.js','toggleDD':'js/shared/navigation.js',
    'closeDD':'js/shared/navigation.js','updateNavUser':'js/shared/navigation.js','toggleTheme':'js/shared/navigation.js',
    # Auth
    'doReg':'js/shared/auth.js','doLogin':'js/shared/auth.js','loginUser':'js/shared/auth.js',
    'signOut':'js/shared/auth.js','showErr':'js/shared/auth.js','hideErr':'js/shared/auth.js','selG':'js/shared/auth.js',
    # Dashboard
    'getTimeBucket':'js/pages/dashboard.js','pickGreeting':'js/pages/dashboard.js',
    'animateGreeting':'js/pages/dashboard.js','startGreetingRotation':'js/pages/dashboard.js',
    'getTodayHabits':'js/pages/dashboard.js','getHabitsDoneToday':'js/pages/dashboard.js',
    'updateHabitCount':'js/pages/dashboard.js','setHabitDisplay':'js/pages/dashboard.js',
    'initHabitRotation':'js/pages/dashboard.js','startHabitRotation':'js/pages/dashboard.js',
    'getBiblePlan':'js/pages/dashboard.js','renderSpiritualCard':'js/pages/dashboard.js',
    'getTodayWorkout':'js/pages/dashboard.js','renderSessionCard':'js/pages/dashboard.js',
    'renderDash':'js/pages/dashboard.js','bookmarkVerse':'js/pages/dashboard.js',
    'shareVerse':'js/pages/dashboard.js','pulseSpiritualBtn':'js/pages/dashboard.js',
    'openPersTab':'js/pages/dashboard.js','openSpiritualTab':'js/pages/dashboard.js',
    'startTodayWorkout':'js/pages/dashboard.js',
    # Skills
    'renderSkillsGrid':'js/pages/skills.js',
    # Personal shell
    'renderPersonal':'js/pages/personal.js','showPersTab':'js/pages/personal.js','setDiff':'js/pages/personal.js',
    'buildWeekTabs':'js/pages/personal.js','selectDay':'js/pages/personal.js',
    'updateWorkoutHeaderBtns':'js/pages/personal.js','showSpiritualTab':'js/pages/personal.js',
    # Workouts
    'getDayExercises':'js/pages/workouts.js','renderExCards':'js/pages/workouts.js',
    'renderCustomExCards':'js/pages/workouts.js','renderExerciseCardHTML':'js/pages/workouts.js',
    'renderExEditPanel':'js/pages/workouts.js','toggleExEdit':'js/pages/workouts.js',
    'exEditStep':'js/pages/workouts.js','exEditSave':'js/pages/workouts.js','exEditReset':'js/pages/workouts.js',
    'startSession':'js/pages/workouts.js','tickSet':'js/pages/workouts.js','markExDone':'js/pages/workouts.js',
    'completeAllSets':'js/pages/workouts.js','resetWorkout':'js/pages/workouts.js',
    'openTimer':'js/pages/workouts.js','updTimer':'js/pages/workouts.js','closeTimerAndRun':'js/pages/workouts.js',
    'closeTimer':'js/pages/workouts.js','skipTimer':'js/pages/workouts.js','timerAdd':'js/pages/workouts.js',
    'logSession':'js/pages/workouts.js','openCong':'js/pages/workouts.js','closeCong':'js/pages/workouts.js',
    'applyOverride':'js/pages/workouts.js','saveWorkoutOverrides':'js/pages/workouts.js',
    'exerciseStoreKey':'js/pages/workouts.js','resolveRef':'js/pages/workouts.js',
    'normalizeCustomExercise':'js/pages/workouts.js','getWeekKey':'js/pages/workouts.js',
    'checkWeekReset':'js/pages/workouts.js','sessionKey':'js/pages/workouts.js',
    'isSessionLocked':'js/pages/workouts.js','lockSession':'js/pages/workouts.js',
    # Custom exercises / plan
    'getCustomPlan':'js/pages/custom-exercises.js','saveCustomPlan':'js/pages/custom-exercises.js',
    'getCustomExercises':'js/pages/custom-exercises.js','saveCustomExercises':'js/pages/custom-exercises.js',
    'getPublicExercises':'js/pages/custom-exercises.js','savePublicExercises':'js/pages/custom-exercises.js',
    'cpToggleEdit':'js/pages/custom-exercises.js','cpCopyOpen':'js/pages/custom-exercises.js',
    'cpCopyFrom':'js/pages/custom-exercises.js','cpDeletePlan':'js/pages/custom-exercises.js',
    'cpCardDown':'js/pages/custom-exercises.js','cpCardUp':'js/pages/custom-exercises.js',
    'cpMenuOpen':'js/pages/custom-exercises.js','cpMenuEdit':'js/pages/custom-exercises.js',
    'cpMenuRemove':'js/pages/custom-exercises.js','cePickerOpen':'js/pages/custom-exercises.js',
    'cePickerClose':'js/pages/custom-exercises.js','cePickerSetTab':'js/pages/custom-exercises.js',
    'cePickerRender':'js/pages/custom-exercises.js','ceModeLabel':'js/pages/custom-exercises.js',
    'cePickerPick':'js/pages/custom-exercises.js','cePickerEdit':'js/pages/custom-exercises.js',
    'cePickerDelete':'js/pages/custom-exercises.js','renderCEForm':'js/pages/custom-exercises.js',
    'ceFormSetMode':'js/pages/custom-exercises.js','ceFormSave':'js/pages/custom-exercises.js',
    # Habits
    'getHabits':'js/pages/habits.js','saveHabits':'js/pages/habits.js','getHabitLogs':'js/pages/habits.js',
    'saveHabitLogs':'js/pages/habits.js','hLogKey':'js/pages/habits.js','getHabitLog':'js/pages/habits.js',
    'setHabitLog':'js/pages/habits.js','deleteHabitLog':'js/pages/habits.js','isHabitScheduledOn':'js/pages/habits.js',
    'habitFreqLabel':'js/pages/habits.js','renderHabits':'js/pages/habits.js','renderHabitDayHTML':'js/pages/habits.js',
    'renderHabitCardHTML':'js/pages/habits.js','renderHabitAllHTML':'js/pages/habits.js',
    'renderHabitDetailHTML':'js/pages/habits.js','renderHabitCalendarHTML':'js/pages/habits.js',
    'computeHabitMetrics':'js/pages/habits.js','getWeekActual':'js/pages/habits.js',
    'habitShiftDate':'js/pages/habits.js','habitGoToday':'js/pages/habits.js','habitShowAll':'js/pages/habits.js',
    'habitShowDay':'js/pages/habits.js','habitOpenDetail':'js/pages/habits.js','habitTapStatus':'js/pages/habits.js',
    'habitCardDown':'js/pages/habits.js','habitCardUp':'js/pages/habits.js','habitOpenMenuAt':'js/pages/habits.js',
    'habitMenuEdit':'js/pages/habits.js','habitMenuDelete':'js/pages/habits.js','habitDelete':'js/pages/habits.js',
    'habitOpenCreate':'js/pages/habits.js','habitOpenEdit':'js/pages/habits.js','habitCloseForm':'js/pages/habits.js',
    'renderHabitForm':'js/pages/habits.js','habitFreqWordsHTML':'js/pages/habits.js','renderReminderPanel':'js/pages/habits.js',
    'habitToggleRemDay':'js/pages/habits.js','habitSetRemTime':'js/pages/habits.js','habitChooseType':'js/pages/habits.js',
    'togglePalette':'js/pages/habits.js','habitPickColor':'js/pages/habits.js','habitFreqChange':'js/pages/habits.js',
    'habitToggleReminder':'js/pages/habits.js','habitSaveForm':'js/pages/habits.js','habitOpenLog':'js/pages/habits.js',
    'habitCloseLog':'js/pages/habits.js','habitSkipLog':'js/pages/habits.js','habitSaveLog':'js/pages/habits.js',
    'seedDefaultHabits':'js/pages/habits.js','clearSeededHabits':'js/pages/habits.js',
    # Community
    'renderComm':'js/pages/community.js','renderFeed':'js/pages/community.js','createPost':'js/pages/community.js',
    'react':'js/pages/community.js','toggleCB':'js/pages/community.js','submitC':'js/pages/community.js',
    'delPost':'js/pages/community.js','renderMembers':'js/pages/community.js',
    # Admin
    'renderAdmin':'js/pages/admin.js','renderYTManager':'js/pages/admin.js','saveYT':'js/pages/admin.js',
    'previewYT':'js/pages/admin.js','filterYTTier':'js/pages/admin.js','renderAdminPublicList':'js/pages/admin.js',
    'adminPushPublic':'js/pages/admin.js','aPanel':'js/pages/admin.js',
    # Profile
    'renderProfile':'js/pages/profile.js',
}

# IIFE routes (matched by containing function name)
IIFE_ROUTES = {
    'boot':'js/pages/boot.js',
    'initHeroBurst':'js/pages/dashboard.js',
    'initDuoCardReact':'js/pages/dashboard.js',
}

# ─────────────────────────────────────────────
# CSS ROUTING — selector prefix -> file
# Order matters — first match wins
# ─────────────────────────────────────────────
CSS_PREFIX_ROUTES = [
    (('.hero-card','.home-greet','.home-wrap','.amb-','.dust','.burst-dust','.verse-',
      '.push-','.duo-','.pd-','.quick-','.qa-','.session-','.hero-inner','.hero-divider',
      '.hw-char','.hw-space','#pg-dashboard'), 'css/pages/dashboard.css'),
    (('.habit-',), 'css/pages/habits.css'),
    (('.comm-','.create-card','.post-','.pav','.pnm','.ptm','.pbody','.rr','.rb',
      '.cb-','.widget','.wt2','.mav','.mn','.ms','.pab'), 'css/pages/community.css'),
    (('.admin-','.apt','.ast','.asn','.asl','.atb','.afc','.yt-','.tier-filter','.tf-btn',
      '.fr2','.ap.on','.ag'), 'css/pages/admin.css'),
    (('.more-',), 'css/pages/more.css'),
    (('.profile-','.prof-','.ach','.cal-','.cc'), 'css/pages/profile.css'),
    (('.auth-','.gbtn','.terms-','.tcb','.tct','.gb-row','.gbb','.fgt'), 'css/pages/auth.css'),
    (('.timer-','.t-ring','.t-svg','.t-bg','.t-arc','.t-num','.t-acts','.t-pl','.tcl','.tsk','.tad','.ts2','.tt',
      '.cong-','.confetti','.cp-','.ce-','.ex-','.sets-','.sbt','.start-btn','.session-done-btn',
      '.diff-','.week-','.wt','.rest-','.dash-sb','.dash-main','.sb-','.sbl','.dash-sec','.ds-hdr','.ds-t',
      '.dd-ban','.dd-','.stats-row','.sc','.sn','.sl','.dash-tab'), 'css/pages/personal.css'),
    (('.hero','.moon-','.star','.snowflake','.prev-','.pch','.pct','.live-dot','.pr','.pillars-','.pc','.pil-',
      '.ptag','.growth-','.gc','.books-','.bk','.ls-','.testi-','.tc','.ts','.tq','.ta','.tav',
      '.cta-sec','.fg-grid','.fb-','.fc-t','.fl-lk','.fb-line','footer'), 'css/pages/home.css'),
    # Fallback to global
]

# Keyframes routing (name -> file)
KEYFRAMES_ROUTES = {
    'habitBurst':'css/pages/habits.css',
    'moonFloat':'css/pages/home.css','moonGlow':'css/pages/home.css','starTwinkle':'css/pages/home.css',
    'snowFall':'css/pages/home.css','floatY':'css/pages/home.css',
    'confettiFall':'css/pages/personal.css','dProgressShimmer':'css/pages/dashboard.css',
    'dFadeUp':'css/pages/dashboard.css','burstRise':'css/pages/dashboard.css',
    'glowDriftA':'css/pages/dashboard.css','glowDriftB':'css/pages/dashboard.css','dustRise':'css/pages/dashboard.css',
    'hwChar':'css/pages/dashboard.css','btnHeartbeat':'css/pages/dashboard.css',
}

# ─────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────
def read(p):
    with open(os.path.join(ROOT, p), 'r', encoding='utf-8') as f: return f.read()

def write(p, c):
    full = os.path.join(ROOT, p); os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f: f.write(c)
    print(f'    wrote {p}  ({len(c.splitlines())} lines)')

def backup(p):
    src = os.path.join(ROOT, p)
    if not os.path.exists(src): return
    dst = os.path.join(BACKUP, p); os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)

# ─────────────────────────────────────────────
# JS Parser
# ─────────────────────────────────────────────
JS_DECL = re.compile(r'^(?:async\s+)?(?:function|const|let|var|class)\s+(\w+)')
JS_IIFE_NAMED = re.compile(r'^\((?:async\s+)?function\s+(\w+)')
JS_IIFE_ANON  = re.compile(r'^\(\(\)\s*=>')

def parse_js(src):
    lines = src.split('\n')
    chunks, cur_start, cur_name = [], None, None

    def flush(end):
        nonlocal cur_start, cur_name
        while end > cur_start and (lines[end].strip()=='' or lines[end].strip().startswith('//')): end -= 1
        chunks.append((cur_name, '\n'.join(lines[cur_start:end+1]),
                       cur_start+1, end+1))

    for i, line in enumerate(lines):
        if not line or line[0].isspace(): continue
        name = None
        m = JS_DECL.match(line)
        if m: name = m.group(1)
        else:
            m = JS_IIFE_NAMED.match(line)
            if m: name = '__iife_' + m.group(1)
            elif JS_IIFE_ANON.match(line): name = '__iife_anon_' + str(i)
        if name:
            if cur_start is not None: flush(i - 1)
            cur_start, cur_name = i, name

    if cur_start is not None: flush(len(lines) - 1)
    return chunks

# ─────────────────────────────────────────────
# CSS Parser
# ─────────────────────────────────────────────
def parse_css_blocks(src):
    blocks, i, n = [], 0, len(src)
    while i < n:
        if src[i].isspace(): i += 1; continue
        start = i
        if src[i:i+2] == '/*':
            end = src.find('*/', i+2)
            if end == -1: break
            blocks.append(src[i:end+2]); i = end + 2; continue
        depth = 0
        while i < n:
            c = src[i]
            if c == '{': depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0: i += 1; break
            i += 1
        blocks.append(src[start:i])
    return blocks

def css_selector(block):
    t = block.strip()
    if t.startswith('/*') or t.startswith('@'): return None
    idx = t.find('{')
    if idx == -1: return None
    sel = t[:idx].strip()
    if ',' in sel: sel = sel.split(',')[0].strip()
    return sel

def route_css_block(block):
    t = block.strip()
    if t.startswith('@media'): return 'css/responsive.css'
    if t.startswith('@keyframes'):
        name = re.match(r'@keyframes\s+(\w+)', t)
        if name and name.group(1) in KEYFRAMES_ROUTES:
            return KEYFRAMES_ROUTES[name.group(1)]
        return 'css/global.css'
    if t.startswith('@'):
        return 'css/global.css'
    sel = css_selector(block)
    if not sel: return 'css/global.css'
    for prefixes, dest in CSS_PREFIX_ROUTES:
        for p in prefixes:
            if sel.startswith(p): return dest
    return 'css/global.css'

# ─────────────────────────────────────────────
# Build index.html <head> and script tags
# ─────────────────────────────────────────────
CSS_FILES = [
    'css/global.css',
    'css/pages/home.css',
    'css/pages/dashboard.css',
    'css/pages/personal.css',
    'css/pages/habits.css',
    'css/pages/community.css',
    'css/pages/admin.css',
    'css/pages/more.css',
    'css/pages/profile.css',
    'css/pages/auth.css',
    'css/responsive.css',
]

JS_FILES = [
    'js/data/community.js',      # COMM_SEED first (used by state.js)
    'js/shared/state.js',        # all globals
    'js/data/constants.js',
    'js/data/verses.js',
    'js/data/skills.js',
    'js/data/drives.js',
    'js/data/workouts.js',
    'js/shared/icons.js',
    'js/shared/utilities.js',
    'js/shared/ui.js',
    'js/shared/navigation.js',
    'js/shared/auth.js',
    'js/pages/skills.js',
    'js/pages/spiritual.js',
    'js/pages/habits.js',
    'js/pages/workouts.js',
    'js/pages/custom-exercises.js',
    'js/pages/personal.js',
    'js/pages/dashboard.js',
    'js/pages/community.js',
    'js/pages/admin.js',
    'js/pages/profile.js',
    'js/pages/boot.js',
]

def rewrite_index(src):
    # Replace stylesheet link
    src = re.sub(r'<link rel="stylesheet" href="styles\.css"\s*/?>',
                 '\n'.join(f'<link rel="stylesheet" href="{f}"/>' for f in CSS_FILES),
                 src)
    # Replace app.js script with all new scripts
    src = re.sub(r'<script src="app\.js"></script>',
                 '\n'.join(f'<script src="{f}"></script>' for f in JS_FILES),
                 src)
    return src

def rewrite_sw(src):
    src = re.sub(r"const CACHE_NAME = 'better-you-v\d+';",
                 "const CACHE_NAME = 'better-you-v10';", src)
    assets = ['./','./index.html'] + [f'./{f}' for f in CSS_FILES + JS_FILES] + [
        './supabase-config.js','./supabase-sync.js','./manifest.json',
        './icon.svg','./icon-192.png','./icon-512.png']
    assets_str = 'const ASSETS = [\n' + ',\n'.join(f"  '{a}'" for a in assets) + '\n];'
    src = re.sub(r'const ASSETS = \[[^\]]*\];', assets_str, src, flags=re.DOTALL)
    return src

# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────
def main():
    print('=' * 60)
    print(' BETTER YOU — MODULARIZATION')
    print(' mode:', 'APPLY (writing files)' if APPLY else 'DRY RUN (no writes)')
    print('=' * 60)

    # Guard: if js/ already exists, refuse (idempotency)
    if os.path.exists(os.path.join(ROOT, 'js')):
        print('\n! js/ folder already exists.')
        print('  If this is a re-run, delete js/, css/ first.')
        sys.exit(1)

    if APPLY:
        print('\nBacking up originals...')
        os.makedirs(BACKUP, exist_ok=True)
        for f in ('app.js','styles.css','index.html','sw.js'):
            backup(f); print(f'    backed up {f}')

    # ── Split JS ──
    print('\nReading app.js...')
    js_src = read('app.js')
    chunks = parse_js(js_src)
    print(f'    found {len(chunks)} top-level chunks')

    grouped = {}
    unmapped = []
    for name, text, s, e in chunks:
        # IIFE names
        if name.startswith('__iife_'):
            real = name.replace('__iife_','').split('_')[0]
            dest = IIFE_ROUTES.get(real) or IIFE_ROUTES.get(real.replace('anon','')) or 'js/pages/boot.js'
        else:
            dest = JS_ROUTES.get(name)
            if not dest:
                unmapped.append((name, s, e)); dest = 'js/pages/_misc.js'
        grouped.setdefault(dest, []).append((name, text, s, e))

    if unmapped:
        print('\n! UNMAPPED DECLARATIONS (will go to js/pages/_misc.js):')
        for n, s, e in unmapped: print(f'    {n}  (lines {s}-{e})')

    print('\nWriting JS files...')
    for dest in sorted(grouped.keys()):
        body = '\n\n'.join(text for _, text, _, _ in grouped[dest])
        header = f'// Better You — {dest}\n// Auto-generated by modularize.py\n\n'
        if APPLY: write(dest, header + body)
        else: print(f'    [dry] {dest}  ({len(body.splitlines())} lines, {len(grouped[dest])} chunks)')

    # ── Split CSS ──
    print('\nReading styles.css...')
    css_src = read('styles.css')
    blocks = parse_css_blocks(css_src)
    print(f'    found {len(blocks)} top-level blocks')

    css_grouped = {}
    for b in blocks:
        dest = route_css_block(b)
        css_grouped.setdefault(dest, []).append(b)

    print('\nWriting CSS files...')
    for dest in sorted(css_grouped.keys()):
        body = '\n\n'.join(css_grouped[dest])
        header = f'/* Better You — {dest} */\n/* Auto-generated by modularize.py */\n\n'
        if APPLY: write(dest, header + body)
        else: print(f'    [dry] {dest}  ({len(body.splitlines())} lines, {len(css_grouped[dest])} blocks)')

    # ── Rewrite index.html ──
    print('\nRewriting index.html...')
    idx = read('index.html')
    idx_new = rewrite_index(idx)
    if APPLY: write('index.html', idx_new)
    else: print('    [dry] index.html (link/script tags replaced)')

    # ── Rewrite sw.js ──
    print('\nRewriting sw.js...')
    sw = read('sw.js')
    sw_new = rewrite_sw(sw)
    if APPLY: write('sw.js', sw_new)
    else: print('    [dry] sw.js (CACHE_NAME bumped to v10, ASSETS replaced)')

    print('\n' + '=' * 60)
    if APPLY:
        print(' DONE. Original app.js and styles.css are still on disk.')
        print(' Test in Live Server. Delete them once verified.')
    else:
        print(' DRY RUN complete. No files were written.')
        print(' Re-run with:  python modularize.py --apply')
    print('=' * 60)

if __name__ == '__main__':
    main()