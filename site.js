const artworks = [
  {file:'10.png', title:'Untitled Diptych', medium:'Oil on canvas', size:'2 pieces, 1 × 1', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Wardrobe: Ángela Marín Negro'},
  {file:'11.png', title:'Untitled Diptych', medium:'Oil on canvas', size:'2 pieces, 1 × 1', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Wardrobe: Ángela Marín Negro'},
  {file:'ss.jpeg', title:'Small Baroque Panel', medium:'Acrylic on wood panel', size:'15 × 20 cm', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Wardrobe: Ángela Marín Negro'},
  {file:'Image.png', title:'Conversation at the Bar', medium:'Mixed media (acrylic, paper and pastels)', size:'50 × 40 cm'},
  {file:'B2F6CE42-793E-45C5-B657-8F5EFC62C0A8.jpeg', title:'Untitled', medium:'Charcoal on paper', size:'100 × 70 cm'},
  {file:'dddd.jpeg', title:'Still Life with Chair', medium:'Acrylic on wood', size:'20 × 14 cm'},
  {file:'rrrr.png', title:'Thread Brushes', medium:'Mixed media (acrylic on wood, thread and fabric)', size:'15 × 7 cm'},
  {file:'CUERNOS.png', title:'Untitled', medium:'Acrylic on canvas', size:'100 × 70 cm', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Wardrobe: Ángela Marín Negro'},
  {file:'QQ.png', title:'Untitled', medium:'Acrylic on canvas', size:'100 × 70 cm', project:'SALVADOR', credit:'Alea Media Salvador, SL — Salvador<br>Production Designer: Antonio Calvo Domínguez<br>Wardrobe: Ángela Marín Negro'},
  {file:'8.png', title:'Untitled', medium:'Acrylic on canvas', size:'200 × 100 cm', project:'NUDES', credit:'Vértigo Films, SL<br>Production Designer: Elisabet Gomà<br>Wardrobe: —'},
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
const asset = (section, name) => `assets/${encodeURIComponent(folder[section])}/${encodeURIComponent(name)}`;
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
    const projectImage = work.project === 'NUDES' ? 'assets/CONTEXT/nudes-poster.jpg' : 'assets/CONTEXT/salvador.jpg';
    context.classList.add('is-visible');
    if (work.project === 'NUDES') {
      context.classList.add('is-nudes');
      context.innerHTML = `<img class="context-still" src="assets/CONTEXT/nudes-still.jpg" alt="Artwork in set context"><div class="context-credit"><img src="${projectImage}" alt="Nudes project"><p><strong>${work.project}</strong><br>${work.credit}</p></div>`;
    } else {
      context.innerHTML = `<img src="${projectImage}" alt="${work.project} project"><p><strong>${work.project}</strong><br>${work.credit}</p>`;
    }
  }
}


document.querySelectorAll('.artworks-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => { location.href = 'index.html'; });
});
document.querySelectorAll('.site-header').forEach((header) => {
  const toggle = document.createElement('button');
  toggle.className = 'mobile-toggle'; toggle.type = 'button'; toggle.setAttribute('aria-label', 'Open menu');
  toggle.addEventListener('click', () => header.classList.toggle('is-menu-open'));
  header.append(toggle);
  header.querySelector('.nav')?.addEventListener('click', () => header.classList.remove('is-menu-open'));
});






