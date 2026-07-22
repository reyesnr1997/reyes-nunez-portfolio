const artworks = [
  {file:'10.png', title:'Untitled Diptych', medium:'Oil on canvas', size:'2 pieces, 1 × 1', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Set dresser: Ángela Marín Negro'},
  {file:'11.png', title:'Untitled Diptych', medium:'Oil on canvas', size:'2 pieces, 1 × 1', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Set dresser: Ángela Marín Negro'},
  {file:'ss.jpeg', title:'Small Baroque Panel', medium:'Acrylic on wood panel', size:'15 × 20 cm', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Set dresser: Ángela Marín Negro'},
  {file:'Image.png', title:'Conversation at the Bar', medium:'Mixed media (acrylic, paper and pastels)', size:'50 × 40 cm'},
  {file:'B2F6CE42-793E-45C5-B657-8F5EFC62C0A8.jpeg', title:'Untitled', medium:'Charcoal on paper', size:'100 × 70 cm'},
  {file:'dddd.jpeg', title:'Still Life with Chair', medium:'Acrylic on wood', size:'20 × 14 cm'},
  {file:'rrrr.png', title:'Thread Brushes', medium:'Mixed media (acrylic on wood, thread and fabric)', size:'15 × 7 cm'},
  {file:'CUERNOS.png', title:'Untitled', medium:'Acrylic on canvas', size:'100 × 70 cm', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Set dresser: Ángela Marín Negro'},
  {file:'QQ.png', title:'Untitled', medium:'Acrylic on canvas', size:'100 × 70 cm', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Set dresser: Ángela Marín Negro'},
  {file:'8.png', title:'Untitled', medium:'Acrylic on canvas', size:'200 × 100 cm', project:'NUDES', credit:'Vértigo Films, SL<br>Production Designer: Elisabet Gomà<br>Set dresser: —'},
  {file:'9.png', title:'Untitled', medium:'Oil on canvas', size:'100 × 70 cm'},
  {file:'0CF4EDE3-E398-4EE7-9E48-915204BC6359.jpeg', title:'Untitled', medium:'Watercolour on paper', size:'A3 (29.7 × 42 cm)'},
  {file:'1716D623-5471-43F5-9B5F-9ABB9F54DB49.jpeg', title:'Untitled', medium:'Oil on canvas', size:'100 × 70 cm'},
  {file:'WhatsApp Image 2026-06-13 at 14.52.59SSAA.jpeg', title:'Untitled', medium:'Oil on canvas', size:'100 × 70 cm'},
  {file:'aff.jpeg', title:'Realistic Clock', medium:'Acrylic on cardboard', size:'A3 (29.7 × 42 cm)'},
  {file:'20220128_162258.jpg', title:'Untitled Figure', medium:'Charcoal on paper', size:'100 × 70 cm'},
  {file:'WhatsApp Image 2026-06-13 at 13.40.05.jpeg', title:'Untitled', medium:'Watercolour on paper', size:'A3 (29.7 × 42 cm)'},
  {file:'abst.png', title:'Untitled', medium:'Oil on canvas', size:'100 × 100 cm'}
];
const galleries = {
  construction: ['WhatsApp Image 2026-07-20 at 13.46.58.jpeg','20230804_143637.jpg','20230717_161323.jpg','20230717_132709.jpg','20230711_132909.jpg','122.jpeg','20230728_161128.jpg','20230804_132620.jpg'],
  props: ['20230120_175321.jpg','ccccc.jpeg','20221208_113257.jpg','20260710_184001.jpg','WhatsApp Image 2026-06-14 at 18.06.09z.jpeg','IMG-20260710-WA0049.jpg'],
  murals: ['DDD.jpeg','WhatsApp Image 2026-06-13 at 13.35.35SS.jpeg','WhatsApp Image 2021-03-01 at 19.31.07 (2).jpeg','WhatsApp Image 2021-03-01 at 19.31.07 (3).jpeg','qqq.jpeg','111.jpeg','EE (1).jpeg','WhatsApp Image 2026-07-10 at 19.26.57qq.jpeg'],
  experience: ['ab67616d0000b27393fffb29c666fff5a3008c90.jpg','aq.png','arte.png','Aves_de_corral_cartel.jpg','jaguar-386505647-large.jpg','maxresdefault.jpg','NOG.png','nudes_nus-955596053-large.jpg','realtre.jpg','yadam.png']
};
const folder = { 'fine-arts':'FINE ARTS', construction:'CONSTRUCTION', props:'PROPS', murals:'MURALS', experience:'EXPERIENCE' };
const publishedAssets = {"ABOUT/IMG-20221215-WA0018.jpg":"about-img-20221215-wa0018-13f0886d.jpg","FINE ARTS/9.png":"fine-arts-9-62485139.png","MURALS/WhatsApp Image 2026-07-10 at 19.26.57qq.jpeg":"murals-whatsapp-image-2026-07-10-at-19-26-57qq-b1ebc724.jpeg","FINE ARTS/dddd.jpeg":"fine-arts-dddd-fc7d665a.jpeg","CONSTRUCTION/20230728_161128.jpg":"construction-20230728-161128-2d4abdb1.jpg","FINE ARTS/WhatsApp Image 2026-06-13 at 13.40.05.jpeg":"fine-arts-whatsapp-image-2026-06-13-at-13-40-05-9bf310d1.jpeg","FINE ARTS/abst.png":"fine-arts-abst-691087a9.png","MURALS/WhatsApp Image 2021-03-01 at 19.31.07 (2).jpeg":"murals-whatsapp-image-2021-03-01-at-19-31-07-2-5772c81f.jpeg","EXPERIENCE/yadam.png":"experience-yadam-1b3428d2.png","CONTEXT/nudes-poster.jpg":"context-nudes-poster-8865d8e9.jpg","EXPERIENCE/jaguar-386505647-large.jpg":"experience-jaguar-386505647-large-4d703383.jpg","HOME/2.jpg":"home-2-8a4d004c.jpg","MURALS/111.jpeg":"murals-111-ce851237.jpeg","CONSTRUCTION/20230717_132709.jpg":"construction-20230717-132709-de847a48.jpg","CONSTRUCTION/20230711_132909.jpg":"construction-20230711-132909-2c637b0f.jpg","SCENIC/Gemini_Generated_Image_1ii8oe1ii8oe1ii8.png":"scenic-gemini-generated-image-1ii8oe1ii8oe1ii8-96dabccb.png","EXPERIENCE/nudes_nus-955596053-large.jpg":"experience-nudes-nus-955596053-large-73a352ec.jpg","FINE ARTS/Image.png":"fine-arts-image-717ddd57.png","FINE ARTS/11.png":"fine-arts-11-319f17d7.png","CONSTRUCTION/20230804_143637.jpg":"construction-20230804-143637-4f309f76.jpg","MURALS/DDD.jpeg":"murals-ddd-429a7ac3.jpeg","FINE ARTS/1716D623-5471-43F5-9B5F-9ABB9F54DB49.jpeg":"fine-arts-1716d623-5471-43f5-9b5f-9abb9f54db49-d171e72e.jpeg","CONSTRUCTION/20230717_161323.jpg":"construction-20230717-161323-36775392.jpg","FINE ARTS/B2F6CE42-793E-45C5-B657-8F5EFC62C0A8.jpeg":"fine-arts-b2f6ce42-793e-45c5-b657-8f5efc62c0a8-0bff2ec2.jpeg","SCENIC/WhatsApp Image 2021-03-01 at 19.31.07 (2).jpeg":"scenic-whatsapp-image-2021-03-01-at-19-31-07-2-5772c81f.jpeg","CONSTRUCTION/WhatsApp Image 2026-07-20 at 13.46.58.jpeg":"construction-whatsapp-image-2026-07-20-at-13-46-58-eb768d06.jpeg","HOME/20230804_143637.jpg":"home-20230804-143637-4f309f76.jpg","CONSTRUCTION/20230804_132620.jpg":"construction-20230804-132620-e63d1937.jpg","CONSTRUCTION/122.jpeg":"construction-122-7ae5153a.jpeg","FINE ARTS/aff.jpeg":"fine-arts-aff-c528de96.jpeg","EXPERIENCE/aq.png":"experience-aq-038579d5.png","EXPERIENCE/NOG.png":"experience-nog-53e3a833.png","FINE ARTS/0CF4EDE3-E398-4EE7-9E48-915204BC6359.jpeg":"fine-arts-0cf4ede3-e398-4ee7-9e48-915204bc6359-cf0cc5c0.jpeg","FINE ARTS/8.png":"fine-arts-8-48bdb15c.png","PROPS/20221208_113257.jpg":"props-20221208-113257-d3b2068a.jpg","HOME/mejorada.png":"home-mejorada-7bb00f07.png","FINE ARTS/QQ.png":"fine-arts-qq-2bc41ca4.png","FINE ARTS/rrrr.png":"fine-arts-rrrr-32cc86ea.png","EXPERIENCE/ab67616d0000b27393fffb29c666fff5a3008c90.jpg":"experience-ab67616d0000b27393fffb29c666fff5a3008c90-cc874dbd.jpg","EXPERIENCE/realtre.jpg":"experience-realtre-5b62f0ff.jpg","MURALS/WhatsApp Image 2026-06-13 at 13.35.35SS.jpeg":"murals-whatsapp-image-2026-06-13-at-13-35-35ss-93bd7de2.jpeg","CONTEXT/salvador.jpg":"context-salvador-bd524f5d.jpg","PROPS/20260710_184001.jpg":"props-20260710-184001-6b4fec12.jpg","PROPS/20230120_175321.jpg":"props-20230120-175321-910602e5.jpg","FINE ARTS/WhatsApp Image 2026-06-13 at 14.52.59SSAA.jpeg":"fine-arts-whatsapp-image-2026-06-13-at-14-52-59ssaa-0a567633.jpeg","MURALS/EE (1).jpeg":"murals-ee-1-5c012764.jpeg","PROPS/WhatsApp Image 2026-06-14 at 18.06.09z.jpeg":"props-whatsapp-image-2026-06-14-at-18-06-09z-00c88b6a.jpeg","PROPS/ccccc.jpeg":"props-ccccc-180fc240.jpeg","PROPS/IMG-20260710-WA0049.jpg":"props-img-20260710-wa0049-0eccea65.jpg","FINE ARTS/10.png":"fine-arts-10-1a2b88db.png","FINE ARTS/20220128_162258.jpg":"fine-arts-20220128-162258-33f972d0.jpg","EXPERIENCE/Aves_de_corral_cartel.jpg":"experience-aves-de-corral-cartel-2b3d9919.jpg","MURALS/WhatsApp Image 2021-03-01 at 19.31.07 (3).jpeg":"murals-whatsapp-image-2021-03-01-at-19-31-07-3-de489dda.jpeg","FINE ARTS/CUERNOS.png":"fine-arts-cuernos-6105d400.png","CONTEXT/nudes-still.jpg":"context-nudes-still-fbff4bd6.jpg","EXPERIENCE/arte.png":"experience-arte-8a883560.png","EXPERIENCE/maxresdefault.jpg":"experience-maxresdefault-bd524f5d.jpg","FINE ARTS/ss.jpeg":"fine-arts-ss-23aadd37.jpeg","MURALS/qqq.jpeg":"murals-qqq-5b74bb91.jpeg"};
const asset = (section, name) => publishedAssets[`${folder[section]}/${name}`] || `assets/${encodeURIComponent(folder[section])}/${encodeURIComponent(name)}`;
document.querySelectorAll('[data-gallery]').forEach((container) => {
  const section = container.dataset.gallery;
  const items = section === 'fine-arts' ? artworks : galleries[section];
  items.forEach((item, index) => {
    const name = section === 'fine-arts' ? item.file : item;
    const image = document.createElement('img');
    image.loading = 'lazy'; image.src = asset(section, name); image.alt = section === 'fine-arts' ? item.title : `${section} artwork`;
    if (section === 'fine-arts') {
      const link = document.createElement('a'); link.href = `artwork.html?id=${index}`; link.append(image); container.append(link);
    } else {
      const button = document.createElement('button'); button.append(image); container.append(button);
      button.addEventListener('click', () => openLightbox(image.src, image.alt, section === 'props' && index === items.length - 2 ? 'uncropped' : section));
    }
  });
});
const lightbox = document.querySelector('.lightbox');
function openLightbox(src, alt, section) { lightbox.querySelector('img').src=src; lightbox.querySelector('img').alt=alt; lightbox.classList.toggle('is-gallery-crop', section === 'props' || section === 'murals'); lightbox.classList.add('is-open'); }
lightbox?.addEventListener('click', () => { lightbox.classList.remove('is-open'); lightbox.classList.remove('is-gallery-crop'); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') { lightbox?.classList.remove('is-open'); lightbox?.classList.remove('is-gallery-crop'); } });
const detail = document.querySelector('[data-artwork-detail]');
if (detail) {
  const id = Number(new URLSearchParams(location.search).get('id'));
  const work = artworks[id] || artworks[0];
  detail.querySelector('.artwork-image').src = asset('fine-arts', work.file);
  detail.querySelector('.artwork-image').alt = work.title;
  detail.querySelector('.artwork-info').innerHTML = `<p>${work.medium}<br>${work.size}</p>`;
  const context = detail.querySelector('.artwork-context');
  if (work.project) {
    const projectImage = work.project === 'NUDES' ? 'context-nudes-poster-8865d8e9.jpg' : 'context-salvador-bd524f5d.jpg';
    context.classList.add('is-visible');
    if (work.project === 'NUDES') {
      context.classList.add('is-nudes');
      context.innerHTML = `<img class="context-still" src="context-nudes-still-fbff4bd6.jpg" alt="Artwork in set context"><div class="context-credit"><img src="${projectImage}" alt="Nudes project"><p><strong>${work.project}</strong><br>${work.credit}</p></div>`;
    } else {
      context.innerHTML = `<img src="${projectImage}" alt="${work.project} project"><p><strong>${work.project}</strong><br>${work.credit}</p>`;
    }
  }
}
















document.querySelectorAll('.artworks-trigger').forEach((trigger) => {
  trigger.setAttribute('aria-expanded', 'false');
  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const artworksMenu = trigger.closest('.artworks');
    const open = artworksMenu.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(open));
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.artworks.is-open').forEach((artworksMenu) => {
    artworksMenu.classList.remove('is-open');
    artworksMenu.querySelector('.artworks-trigger')?.setAttribute('aria-expanded', 'false');
  });
});
document.querySelectorAll('.site-header').forEach((header) => {
  const toggle = document.createElement('button');
  toggle.className = 'mobile-toggle'; toggle.type = 'button'; toggle.setAttribute('aria-label', 'Open menu'); toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span>';
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('is-menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  header.append(toggle);
  header.querySelector('.nav')?.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    header.classList.remove('is-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  });
});

// Mobile-only contact speed dial.
const contactDial = document.createElement('div');
contactDial.className = 'contact-dial';
contactDial.innerHTML = `
  <button class="contact-dial-backdrop" type="button" aria-label="Close contact menu"></button>
  <div class="contact-dial-actions" aria-hidden="true">
    <a href="tel:+34608853646" aria-label="Call +34 608 853 646">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1.02L6.6 10.8Z"/></svg>
    </a>
    <a href="https://wa.me/34608853646" target="_blank" rel="noopener" aria-label="Write on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.5-1.45A9.9 9.9 0 1 0 12 2Zm0 17.8c-1.5 0-2.9-.4-4.1-1.15l-.3-.18-3.25.85.87-3.16-.2-.32A7.8 7.8 0 1 1 12 19.8Zm4.3-5.85c-.24-.12-1.4-.7-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-1.4-.7-2.33-1.26-3.27-2.85-.25-.43.25-.4.7-1.32.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.4-.58 1.6-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>
    </a>
    <a href="mailto:reyesnramirez@gmail.com" aria-label="Send an email">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 7.1L20.2 7H3.8L12 12.1Zm0 2.35L3 8.85V17h18V8.85l-9 5.6Z"/></svg>
    </a>
  </div>
  <button class="contact-dial-toggle" type="button" aria-label="Open contact menu" aria-expanded="false"><span></span><span></span><span></span></button>`;
document.body.append(contactDial);

const contactToggle = contactDial.querySelector('.contact-dial-toggle');
const contactActions = contactDial.querySelector('.contact-dial-actions');
const closeContactDial = () => {
  contactDial.classList.remove('is-open');
  contactToggle.setAttribute('aria-expanded', 'false');
  contactToggle.setAttribute('aria-label', 'Open contact menu');
  contactActions.setAttribute('aria-hidden', 'true');
};
contactToggle.addEventListener('click', () => {
  const open = contactDial.classList.toggle('is-open');
  contactToggle.setAttribute('aria-expanded', String(open));
  contactToggle.setAttribute('aria-label', open ? 'Close contact menu' : 'Open contact menu');
  contactActions.setAttribute('aria-hidden', String(!open));
});
contactDial.querySelector('.contact-dial-backdrop').addEventListener('click', closeContactDial);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeContactDial(); });

