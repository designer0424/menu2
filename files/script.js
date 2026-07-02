/* ============================================
   MONTPELLIER RESTOBAR — LÓGICA
   No editar para cambiar contenido.
   Edita menu-data.js para platos/precios/imgs.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const nav     = document.getElementById('category-nav');
  const content = document.getElementById('menu-content');
  const overlay = document.getElementById('modal-overlay');
  const modalCard = document.getElementById('modal-card');

  // ── Construir NAV ─────────────────────────
  Object.keys(MENU_DATA).forEach((key, i) => {
    const cat = MENU_DATA[key];
    const btn = document.createElement('button');
    btn.className   = 'nav-btn' + (i === 0 ? ' active' : '');
    btn.dataset.key = key;
    btn.textContent = cat.title;
    btn.addEventListener('click', () => switchCategory(key));
    nav.appendChild(btn);
  });

  // ── Construir SECCIONES ───────────────────
  Object.entries(MENU_DATA).forEach(([key, cat], i) => {
    const section = document.createElement('section');
    section.className = 'menu-section' + (i === 0 ? ' active' : '');
    section.id = `section-${key}`;

    section.innerHTML = `
      <div class="section-header">
        <p class="section-tagline">${cat.tagline}</p>
        <h2 class="section-title">${cat.title}</h2>
        <div class="ornament">
          <div class="ornament-line"></div>
          <div class="ornament-diamond"></div>
          <div class="ornament-line right"></div>
        </div>
      </div>
      <div class="items-grid" id="grid-${key}"></div>
    `;

    const grid = section.querySelector(`#grid-${key}`);
    cat.items.forEach((item, idx) => grid.appendChild(buildItem(item, idx)));

    content.appendChild(section);
  });

  // ── Cambiar categoría ─────────────────────
  function switchCategory(key) {
    document.querySelectorAll('.nav-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.key === key));
    document.querySelectorAll('.menu-section').forEach(s =>
      s.classList.toggle('active', s.id === `section-${key}`));
  }

  // ── Construir tarjeta ─────────────────────
  function buildItem(item, index) {

  // Título de sección dentro del menú
if (item.type === 'section') {
  const title = document.createElement('div');

  title.style.gridColumn = '1 / -1';
  title.style.textAlign = 'center';
  title.style.margin = '45px 0 25px';

  title.innerHTML = `
    <div class="ornament">
      <div class="ornament-line"></div>
      <div class="ornament-diamond"></div>
      <div class="ornament-line right"></div>
    </div>

    <h2 class="section-title autor-title">
      ${item.title}
    </h2>

    <div class="ornament">
      <div class="ornament-line"></div>
      <div class="ornament-diamond"></div>
      <div class="ornament-line right"></div>
    </div>
  `;

  return title;

  }

  const div = document.createElement('div');
  div.className = 'menu-item';

  const tagsHTML = (item.tags || []).map(tag => {
    const cls = tag.toLowerCase() === 'vegano'  ? 'vegano'
              : tag.toLowerCase() === 'popular' ? 'popular'
              : tag.toLowerCase() === 'chef'    ? 'chef' : '';
    return `<span class="tag ${cls}">${tag}</span>`;
  }).join('');

  const imgHTML = item.img
    ? `<div class="item-thumb"><img src="${item.img}" alt="${item.name}" loading="lazy"/></div>`
    : `<div class="item-thumb" style="display:flex;align-items:center;justify-content:center;">
         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A37C4A" stroke-width="1" opacity="0.4">
           <rect x="3" y="3" width="18" height="18" rx="1"/>
           <circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
       </div>`;

  div.innerHTML = `
    <div class="item-inner">
      ${imgHTML}
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        ${tagsHTML ? `<div class="item-tags">${tagsHTML}</div>` : ''}
      </div>
      <div class="item-right">
        <span class="item-price">${item.shot && item.bottle
  ? `
    <div class="item-prices">
      <span class="item-price">Shot: ${item.shot}</span>
      <span class="item-price">Botella: ${item.bottle}</span>
    </div>
  `
  : `<span class="item-price">${item.price}</span>`
}
        <div class="item-arrow">›</div>
      </div>
    </div>
  `;

  div.addEventListener('click', () => openModal(item));
  return div;
}

  // ── MODAL ─────────────────────────────────
  function openModal(item) {
    const tagsHTML = (item.tags || []).map(tag => {
      const cls = tag.toLowerCase() === 'vegano'  ? 'vegano'
                : tag.toLowerCase() === 'popular' ? 'popular'
                : tag.toLowerCase() === 'chef'    ? 'chef' : '';
      return `<span class="tag ${cls}">${tag}</span>`;
    }).join('');

    const imgSection = item.img
      ? `<div class="modal-img-wrap"><img src="${item.img}" alt="${item.name}"/></div>`
      : `<div class="modal-img-placeholder">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#A37C4A" stroke-width="0.8">
             <rect x="3" y="3" width="18" height="18" rx="1"/>
             <circle cx="8.5" cy="8.5" r="1.5"/>
             <polyline points="21 15 16 10 5 21"/>
           </svg>
         </div>`;

    const allergensSection = item.allergens && item.allergens !== 'Ninguno'
      ? `<span class="modal-allergens-label">Alérgenos</span>
         <p class="modal-allergens-value">${item.allergens}</p>`
      : '';

    modalCard.innerHTML = `
      <div class="modal-handle"></div>
      <button class="modal-close" id="modal-close-btn" aria-label="Cerrar">✕</button>
      ${imgSection}
      <div class="modal-body">
        ${tagsHTML ? `<div class="modal-tags">${tagsHTML}</div>` : ''}
        <h2 class="modal-name">${item.name}</h2>
        <p class="modal-price">${item.price}</p>
        <div class="modal-divider"></div>
        <p class="modal-desc">${item.desc}</p>
        ${allergensSection}
      </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Cerrar al tocar el fondo
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

});
