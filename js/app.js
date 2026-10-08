// AI Video Generate Guide For You (By Deepak Miglani) - Interactive Logic
// Formatted in Natural Hinglish (English Alphabets) for Creators & Beginners

document.addEventListener('DOMContentLoaded', () => {
  initClickTutorial();
  initAssetPack();
  initCharacters();
  initRoadmap();
  initSimulator();
  initProjects();
  initPromptLibrary();
  initCustomGenerator();
  initProTips();
  initMobileNav();
  initThemeToggle();
});

// Web Audio Feedback
function playChime(type = 'success') {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'beat') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    }
  } catch (e) {
    // Audio context ignore
  }
}

// Copy to Clipboard with Toast Notification in Hinglish
function copyTextToClipboard(text, label = "Prompt") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`✅ ${label} copy ho gaya! Ab Google Flow mein paste karo.`);
      playChime('success');
    }).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(`✅ ${label} copy ho gaya!`);
    playChime('success');
  } catch (err) {
    showToast(`⚠️ Copy nahi ho paya, manually copy karein.`);
  }
  document.body.removeChild(ta);
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>📋</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 1. Render Visual Click-by-Click Steps in Hinglish
function initClickTutorial() {
  const container = document.getElementById('clickStepsGrid');
  if (!container) return;

  container.innerHTML = APP_DATA.clickByClickTutorial.map(step => `
    <div class="click-step-card">
      <div class="click-step-top">
        <div class="click-step-num">${step.stepNumber}</div>
        <span class="click-step-tag">${step.platform}</span>
      </div>
      <h4>${step.title}</h4>
      <p>${step.actionHinglish}</p>
      <div class="click-step-tip">
        💡 <strong>Pro Tip:</strong> ${step.tip}
      </div>
    </div>
  `).join('');
}

// 2. Render Downloadable Asset Pack in Hinglish
function initAssetPack() {
  const container = document.getElementById('assetCardsGrid');
  if (!container) return;

  container.innerHTML = APP_DATA.assetPack.map(asset => `
    <div class="asset-card">
      <div class="asset-card-thumb-wrap">
        <img src="${asset.file}" alt="${asset.name}" loading="lazy">
        <span class="asset-card-tag">${asset.badge}</span>
      </div>
      <div class="asset-card-content">
        <h4>${asset.name}</h4>
        <p>${asset.purpose}</p>
        <a href="${asset.file}" download="${asset.downloadName}" class="btn-download-asset" onclick="playChime('success'); showToast('📥 Download start: ${asset.downloadName}');">
          <span>📥</span> Download Image
        </a>
      </div>
    </div>
  `).join('');
}

// 3. Render Character Cards in Hinglish
function initCharacters() {
  const container = document.getElementById('charactersGrid');
  if (!container) return;

  container.innerHTML = APP_DATA.characters.map((char) => {
    const isFeatured = char.id === 'sonia';
    const cropClass = char.cropFocus ? `crop-${char.cropFocus}` : '';
    return `
      <div class="char-card ${isFeatured ? 'featured' : ''}">
        <div class="char-img-wrapper ${cropClass}">
          <img src="${char.image}" alt="${char.name}" loading="lazy">
          <span class="char-badge">${char.badge}</span>
        </div>
        <div class="char-content">
          <div class="char-header">
            <div class="char-name">
              <span>${char.name}</span>
            </div>
            <div class="char-role">${char.role}</div>
          </div>
          <ul class="char-details-list">
            <li><strong>Age:</strong> ${char.age}</li>
            <li><strong>Outfit:</strong> ${char.outfit.top}, ${char.outfit.bottom}</li>
            <li><strong>Key Look:</strong> ${char.outfit.hair} • ${char.outfit.accessories}</li>
            <li><strong>Voice Style:</strong> ${char.voiceStyle}</li>
            <li><strong>Nature:</strong> ${char.personality}</li>
          </ul>
          <div class="char-prompt-snippet" title="${char.promptLock}">
            <code>${char.promptLock}</code>
          </div>
          <div class="char-btn-group">
            <button class="char-copy-btn" onclick="copyTextToClipboard(\`${escapeForAttr(char.promptLock)}\`, '${char.name} Lock')">
              <span>📋</span> Copy Prompt
            </button>
            <a href="${char.downloadFile}" download="${char.id}_reference.png" class="char-dl-btn" onclick="playChime('success'); showToast('📥 Photo download ho rahi hai!');">
              <span>📥</span> Photo
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Render 5-Step Roadmap in Hinglish
function initRoadmap() {
  const container = document.getElementById('roadmapFlow');
  if (!container) return;

  container.innerHTML = APP_DATA.roadmapSteps.map(step => `
    <div class="roadmap-card">
      <div class="step-number-circle">
        <span class="icon">${step.icon}</span>
        <span class="step-label">Step ${step.step}</span>
      </div>
      <div class="roadmap-body">
        <h3>${step.title}</h3>
        <div class="roadmap-subtitle">${step.subtitle}</div>
        <p class="roadmap-text">${step.explanationHinglish}</p>
        <div class="roadmap-rule-tag">
          <span>⚡ Golden Rule:</span> ${step.keyRule}
        </div>
      </div>
      <div class="roadmap-action-box">
        <span>Action Needed</span>
        <strong>${step.action}</strong>
      </div>
    </div>
  `).join('');
}

// 5. Google Flow Simulator in Hinglish
let simState = { activeStep: 1 };

const SIM_DATA = [
  {
    step: 1,
    name: "Step 1: Starter Image (Scene Ka Pehla Frame)",
    attachments: [
      { name: "Sonia Mam Reference", note: "Original Sonia Photo", img: "assets/images/sonia_ref.png" },
      { name: "Cast Kids Reference", note: "Aarav, Meera, Kabir", img: "assets/images/cast_kids_ref.jpg" }
    ],
    prompt: `Using the attached SONIA reference image and the attached CAST IMAGE, keep all four characters EXACTLY identical to the attached images: Sonia Mam, Aarav, Meera and Kabir, with the same faces, hair, skin tones, heights, ages and outfits. Pixar-quality 3D animation with a cinematic feature-film look, vertical 9:16. Setting: a bright, beautiful modern Indian school classroom in warm morning light through big windows, light-wood desks in two neat rows, a large floating holographic board showing one glowing horizontal number line with a bright golden zero marker and soft blue glow on its left side, and a tall glowing vertical thermometer standing beside the board. Sonia stands near the board at the front, one hand open toward the class, warm confident smile. The three kids sit at their desks in the front row, looking at Sonia with bright curious faces. Teal and warm-orange cinematic grade, soft lens flare, golden dust, shallow depth of field, ultra-detailed textures. No readable text.`,
    ratio: "9:16 (Vertical)",
    duration: "Still 3D Frame",
    actionName: "Generate Starter Image"
  },
  {
    step: 2,
    name: "Step 2: Clip 1 (0 to 10 Seconds)",
    attachments: [
      { name: "Starter Image (First Frame)", note: "Uploaded as Start Frame", img: "assets/images/classroom_preview.jpg" },
      { name: "Sonia Mam Reference", note: "Character Anchor", img: "assets/images/sonia_ref.png" },
      { name: "Cast Kids Reference", note: "Students Anchor", img: "assets/images/cast_kids_ref.jpg" }
    ],
    prompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use the attached Starter Image as the first frame. Also use the attached SONIA reference image and the attached CAST IMAGE as strict character references. CHARACTER LOCK (most important, never change): Sonia Mam, Aarav, Meera and Kabir look identical to attached images. ANIMATION: 0-3s: harmonium intro; slow dolly-in, Meera raises hand and stands. 3-6s: Meera sings question pointing at number line; Sonia turns with smile. 6-10s: Sonia sings answer, thermometer drops below zero with glowing slab "-5". LYRICS: MEERA: "मैम मैम, ये माइनस क्या बला है?" SONIA: "सुनो सुनो, ज़ीरो से नीचे का रास्ता है, थर्मामीटर में माइनस पाँच दिखता है!" EVERYONE: "सवाल-जवाब!"`,
    ratio: "9:16 (Vertical)",
    duration: "10 Seconds",
    actionName: "Generate Clip 1"
  },
  {
    step: 3,
    name: "Step 3: Clip 2 (10 to 20 Seconds - Daisy Chain)",
    attachments: [
      { name: "Clip 1 Last Frame Screenshot", note: "10th second screenshot as Start Frame!", img: "assets/images/clip1_meera.jpg" },
      { name: "Sonia Mam Reference", note: "Character Anchor", img: "assets/images/sonia_ref.png" },
      { name: "Cast Kids Reference", note: "Students Anchor", img: "assets/images/cast_kids_ref.jpg" }
    ],
    prompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use the attached last frame of the previous clip as the first frame. Also use the attached SONIA reference image and the attached CAST IMAGE as strict character references. ANIMATION: 0-3s: Aarav raises hand shyly, pushes glasses and sings question. 3-6s: Sonia walks to board, three glowing coins each with "-2" drop from above. 6-9s: three coins merge with flash into "-6". 9-10s: Aarav thumbs up, kids clap on beat. LYRICS: AARAV: "मैम मैम, तीन बार माइनस दो, कुल कितना होगा?" SONIA: "सुनो सुनो, हर बार दो सिक्के कटे, कुल माइनस छह हुए!" EVERYONE: "सवाल-जवाब!"`,
    ratio: "9:16 (Vertical)",
    duration: "10 Seconds",
    actionName: "Generate Clip 2"
  },
  {
    step: 4,
    name: "Step 4: Clip 3 to 6 (Daisy Chain Loop)",
    attachments: [
      { name: "Previous Clip Last Frame", note: "Always upload last screenshot", img: "assets/images/clip3_staircase.jpg" },
      { name: "Sonia Mam Reference", note: "Keep Locked", img: "assets/images/sonia_ref.png" },
      { name: "Cast Kids Reference", note: "Keep Locked", img: "assets/images/cast_kids_ref.jpg" }
    ],
    prompt: `Repeat the exact same process for Clip 3, Clip 4, Clip 5 and Clip 6! Always attach the LAST FRAME SCREENSHOT of the preceding clip as the FIRST FRAME for the next clip. Keep character locks constant, maintain 96 BPM tempo and call-and-response refrain 'सवाल-जवाब!'.`,
    ratio: "9:16 (Vertical)",
    duration: "10 Seconds each",
    actionName: "Chain Remaining Clips"
  }
];

function initSimulator() {
  const tabsContainer = document.getElementById('simTabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = SIM_DATA.map(d => `
    <button class="sim-step-tab ${d.step === 1 ? 'active' : ''}" onclick="switchSimStep(${d.step})">
      ${d.name}
    </button>
  `).join('');

  renderSimContent(1);
}

window.switchSimStep = function(stepNum) {
  playChime('beat');
  simState.activeStep = stepNum;
  document.querySelectorAll('.sim-step-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i + 1 === stepNum);
  });
  renderSimContent(stepNum);
};

function renderSimContent(stepNum) {
  const data = SIM_DATA.find(d => d.step === stepNum) || SIM_DATA[0];
  const slotsContainer = document.getElementById('simSlots');
  const promptBox = document.getElementById('simPromptText');
  const ratioEl = document.getElementById('simRatio');
  const durationEl = document.getElementById('simDuration');
  const copyBtn = document.getElementById('simCopyBtn');

  if (slotsContainer) {
    slotsContainer.innerHTML = data.attachments.map(att => `
      <div class="sim-slot active">
        <div class="sim-slot-thumb">
          <img src="${att.img}" alt="${att.name}">
        </div>
        <div class="sim-slot-info">
          <h5>${att.name}</h5>
          <p>${att.note}</p>
        </div>
      </div>
    `).join('');
  }

  if (promptBox) promptBox.textContent = data.prompt;
  if (ratioEl) ratioEl.textContent = data.ratio;
  if (durationEl) durationEl.textContent = data.duration;
  if (copyBtn) {
    copyBtn.onclick = () => copyTextToClipboard(data.prompt, `Simulator Step ${stepNum} Prompt`);
  }
}

// 6. Projects Showcase in Hinglish
let currentProject = 'maths-qna';

function initProjects() {
  const buttons = document.querySelectorAll('.project-pill-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      playChime('beat');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProject = btn.dataset.project;
      renderCurrentProject();
    });
  });

  renderCurrentProject();
}

function renderCurrentProject() {
  const project = APP_DATA.projects.find(p => p.id === currentProject);
  if (!project) return;

  const metaContainer = document.getElementById('projectMetaCard');
  const timelineContainer = document.getElementById('clipsTimeline');

  if (metaContainer) {
    metaContainer.innerHTML = `
      <div class="project-meta-details">
        <div class="p-tag" style="margin-bottom:0.6rem; display:inline-block;">${project.badge}</div>
        <h3>${project.title}</h3>
        <p><strong>Topic Concept:</strong> ${project.topic} | <strong>Target Audience:</strong> ${project.targetAudience}</p>
        <div class="project-tags-row">
          <span class="p-tag">⏱️ Duration: ${project.duration}</span>
          <span class="p-tag">🎵 Music Style: ${project.musicGenre}</span>
          <span class="p-tag">🥁 Tempo: ${project.tempo}</span>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; gap:0.6rem;">
        <button class="btn-primary" onclick="copyTextToClipboard(\`${escapeForAttr(project.starterImagePrompt)}\`, 'Starter Image Prompt')">
          <span>🖼️</span> Copy Starter Prompt
        </button>
        <a href="${project.bgImage}" download="${project.id}_starter.jpg" class="btn-secondary" style="font-size:0.85rem; padding:0.65rem 1.25rem;" onclick="playChime('success'); showToast('📥 Starter Image download ho rahi hai!');">
          <span>📥</span> Download Starter Image
        </a>
      </div>
    `;
  }

  if (timelineContainer) {
    timelineContainer.innerHTML = project.clips.map((clip, idx) => {
      const isOpen = idx === 0 ? 'open' : '';
      return `
        <div class="clip-accordion-item ${isOpen}" id="clip-${clip.num}">
          <div class="clip-accordion-header" onclick="toggleClipAccordion('clip-${clip.num}')">
            <div class="clip-header-left">
              <span class="clip-badge-time">${clip.time}</span>
              <div class="clip-header-title">
                <h4>${clip.title}</h4>
                <span>🔗 Attachments: ${clip.attachments}</span>
              </div>
            </div>
            <span class="clip-toggle-icon">▼</span>
          </div>
          <div class="clip-accordion-body">
            <div class="clip-full-content-grid">
              <!-- Visual Preview & Download -->
              <div class="clip-visual-preview-box">
                <img src="${clip.previewImage}" alt="${clip.title}" loading="lazy">
                <a href="${clip.previewImage}" download="clip_${clip.num}_preview.jpg" class="clip-preview-dl-btn" onclick="playChime('success'); showToast('📥 Clip ${clip.num} photo download ho gayi!');">
                  <span>📥</span> Download Clip Photo
                </a>
              </div>

              <!-- Information & Lyrics -->
              <div class="clip-meta-grid">
                <div class="clip-info-card">
                  <h5>📖 Scene Ka Matlab (Hinglish Guide)</h5>
                  <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.6;">${clip.conceptHinglish}</p>
                  <div style="margin-top:0.75rem; font-size:0.8rem; color:var(--accent-gold);">
                    <strong>Google Flow Mein Kya Upload Karein:</strong><br>
                    👉 ${clip.attachments}
                  </div>
                </div>

                <div class="clip-info-card">
                  <h5>🎤 Singing Lyrics & Lip-Sync</h5>
                  <div class="clip-lyrics-display">
                    ${clip.lyrics.question ? `<div class="kid-line">👦 ${clip.lyrics.question}</div>` : ''}
                    ${clip.lyrics.teacher ? `<div class="teacher-line">👩‍🏫 ${clip.lyrics.teacher}</div>` : ''}
                    ${clip.lyrics.answer ? `<div class="teacher-line">👩‍🏫 ${clip.lyrics.answer}</div>` : ''}
                    ${clip.lyrics.kids ? `<div class="kid-line">👧👦 ${clip.lyrics.kids}</div>` : ''}
                    ${clip.lyrics.refrain ? `<div class="group-line">🎶 ${clip.lyrics.refrain}</div>` : ''}
                  </div>
                </div>
              </div>
            </div>

            <!-- Prompt Code Box -->
            <div class="clip-prompt-code-wrap">
              <div class="clip-code-top-bar">
                <span>Google Flow / AI Video Ready Prompt (${clip.time})</span>
                <button class="btn-copy-prompt" onclick="copyTextToClipboard(\`${escapeForAttr(clip.animationPrompt)}\`, 'Clip ${clip.num} Prompt')">
                  📋 Copy Clip ${clip.num} Prompt
                </button>
              </div>
              <pre class="clip-prompt-text">${clip.animationPrompt}</pre>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

window.toggleClipAccordion = function(clipId) {
  const el = document.getElementById(clipId);
  if (el) {
    el.classList.toggle('open');
    playChime('beat');
  }
};

// 7. Prompt Library in Hinglish
function initPromptLibrary() {
  const filterContainer = document.getElementById('libraryFilters');
  const cardsContainer = document.getElementById('libraryCardsGrid');
  if (!filterContainer || !cardsContainer) return;

  filterContainer.innerHTML = `
    <button class="filter-pill active" onclick="filterLib('all')">🌟 All Prompts (${countAllPrompts()})</button>
    ${APP_DATA.categories.map(c => `
      <button class="filter-pill" onclick="filterLib('${c.id}')">${c.title.split(':')[0]}</button>
    `).join('')}
  `;

  renderLibCards('all');
}

function countAllPrompts() {
  return APP_DATA.categories.reduce((acc, c) => acc + c.items.length, 0);
}

window.filterLib = function(catId) {
  playChime('beat');
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${catId}'`));
  });
  renderLibCards(catId);
};

function renderLibCards(catId) {
  const cardsContainer = document.getElementById('libraryCardsGrid');
  if (!cardsContainer) return;

  let items = [];
  if (catId === 'all') {
    APP_DATA.categories.forEach(c => {
      c.items.forEach(item => items.push({ ...item, categoryName: c.title }));
    });
  } else {
    const cat = APP_DATA.categories.find(c => c.id === catId);
    if (cat) {
      items = cat.items.map(item => ({ ...item, categoryName: cat.title }));
    }
  }

  cardsContainer.innerHTML = items.map(item => `
    <div class="prompt-lib-card">
      <div class="prompt-lib-header">
        <h4>${item.name}</h4>
        <span class="lib-tag">${item.tag}</span>
      </div>
      <pre class="prompt-lib-code">${item.prompt}</pre>
      <button class="btn-copy-prompt" style="width:100%; justify-content:center;" onclick="copyTextToClipboard(\`${escapeForAttr(item.prompt)}\`, '${item.name}')">
        📋 Copy Prompt
      </button>
    </div>
  `).join('');
}

// 8. Custom Prompt Generator in Hinglish
function initCustomGenerator() {
  const btn = document.getElementById('generateCustomPromptBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    playChime('success');
    const subject = document.getElementById('genSubject').value;
    const topic = document.getElementById('genTopic').value || "Fractions / Bhinn";
    const style = document.getElementById('genStyle').value;
    const age = document.getElementById('genAge').value;
    const kidQuestion = document.getElementById('genKidQuestion').value || "Mam Mam, aadha aur chauthai milkar kya banega?";
    const teacherAnswer = document.getElementById('genTeacherAnswer').value || "Suno suno, pizza ke tukde jodo, teen-chauthai ban jayega!";

    const generatedPrompt = `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16.
TOPIC: ${subject} - ${topic}
CHARACTER LOCK (Strict, never change): SONIA MAM (warm Indian female teacher, ponytail, brown shirt with heart pocket), and 3 Indian students AARAV (glasses), MEERA (yellow ribbon braids), KABIR (curly hair, cheeky grin, age: ${age}).
STYLE & MUSIC: ${style}, 96 BPM steady tempo, call-and-response sawal-jawab song.
SETTING: Modern Indian school classroom in warm morning light, large floating holographic board demonstrating ${topic} with glowing golden visual elements.
CAMERA: Smooth slow dolly-in on speaking student, then a graceful cut-in to Sonia Mam smiling warmly as she explains on the glowing board.
ANIMATION:
0-3s: Student raises hand excitedly and sings question.
3-7s: Sonia steps forward, visual props and glowing holographic numbers appear on board illustrating ${topic}.
7-10s: All students clap on the rhythm and join together in a happy refrain.
LYRICS:
STUDENT SINGS: "${kidQuestion}"
SONIA MAM SINGS: "${teacherAnswer}"
EVERYONE SINGS TOGETHER: "सवाल-जवाब! Fun with ${subject}!"`;

    const outputBox = document.getElementById('genOutputText');
    const copyCustomBtn = document.getElementById('copyCustomPromptBtn');

    if (outputBox) outputBox.textContent = generatedPrompt;
    if (copyCustomBtn) {
      copyCustomBtn.style.display = 'inline-flex';
      copyCustomBtn.onclick = () => copyTextToClipboard(generatedPrompt, "Custom Generated Prompt");
    }
    showToast("🎉 Naya Custom Prompt Generate Ho Gaya!");
  });
}

// 9. Pro Tips & Mistakes in Hinglish
function initProTips() {
  const container = document.getElementById('proTipsGrid');
  if (!container) return;

  container.innerHTML = APP_DATA.proTips.map(tip => `
    <div class="tip-card">
      <h4>⚠️ ${tip.title}</h4>
      <p>${tip.desc}</p>
    </div>
  `).join('');
}

// Mobile Nav Toggle
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      playChime('beat');
    });
    document.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Mobile Bottom Bar active state & sound
  const mobItems = document.querySelectorAll('.mob-bar-item');
  mobItems.forEach(item => {
    item.addEventListener('click', () => {
      mobItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      playChime('beat');
    });
  });
}

// Theme Toggle
function initThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    btn.innerHTML = isLight ? '🌙' : '☀️';
    playChime('beat');
  });
}

// Switch Phone Mockup Preview in Hinglish
window.switchPhonePreview = function(scene) {
  playChime('beat');
  const img = document.getElementById('phoneMockupImg');
  const lyricP = document.getElementById('previewLyricText');
  const lyricS = document.getElementById('previewLyricSub');
  const btns = document.querySelectorAll('.preview-switch-btn');

  btns.forEach(b => b.classList.remove('active'));

  if (scene === 'maths') {
    btns[0].classList.add('active');
    if (img) img.src = 'assets/images/clip1_meera.jpg';
    if (lyricP) lyricP.textContent = 'Meera: "मैम मैम, ये माइनस क्या बला है?"';
    if (lyricS) lyricS.textContent = 'Sonia: "सुनो सुनो, ज़ीरो से नीचे का रास्ता है!"';
  } else {
    btns[1].classList.add('active');
    if (img) img.src = 'assets/images/gravity_garden.jpg';
    if (lyricP) lyricP.textContent = 'Sonia: "ऊपर जो फेंका, नीचे वो आया..."';
    if (lyricS) lyricS.textContent = 'Bache: "ग्रैविटी! ग्रैविटी!"';
  }
};

function escapeForAttr(str) {
  return str.replace(/`/g, '\\`').replace(/"/g, '&quot;').replace(/\n/g, '\\n');
}
