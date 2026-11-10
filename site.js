// MEKZORIO — página do jogo: menu no celular, versão mais nova (GitHub), novidades (NOVIDADES.md), foto grande na
// galeria e cartões aparecendo ao rolar. As páginas da documentação e dos mods usam só o menu e os cartões. O jogo é vendido no itch.io.
(() => {
  const REPO = 'DiomarGoncalves/mekzorio-versoes';

  // ---------- menu no celular ----------
  const menuBotao = document.querySelector('.menu-botao');
  const menu = document.getElementById('menu');
  menuBotao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    menuBotao.setAttribute('aria-expanded', String(aberto));
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') { menu.classList.remove('aberto'); menuBotao.setAttribute('aria-expanded', 'false'); }
  });

  // O jogo é vendido no itch.io (os botões de compra já apontam para lá); aqui só a versão e as novidades.

  // ---------- versão mais nova (tamanho dos arquivos e data) ----------
  const mb = bytes => `${Math.round(bytes / 1048576)} MB`;
  if (document.getElementById('versao-atual')) fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
    .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
    .then(rel => {
      const data = new Date(rel.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
      document.getElementById('versao-atual').textContent = `Versão mais nova: ${rel.tag_name} · ${data} · Windows e Linux`;
      document.getElementById('versao-baixar').textContent =
        `Versão ${rel.tag_name}, de ${data}, à venda no itch.io. Todos que jogam juntos precisam da mesma versão.`;
      for (const asset of rel.assets || []) {
        const el = document.querySelector(`[data-tamanho="${asset.name}"]`);
        if (el) el.textContent = `· ${mb(asset.size)}`;
      }
    })
    .catch(() => { /* sem internet ou limite da API: a página continua com os links diretos */ });

  // ---------- novidades (lidas do NOVIDADES.md) ----------
  const escapar = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const emLinha = t => escapar(t)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, (m, texto, url) => (/^(https?:|[\w./-]+$)/.test(url) ? `<a href="${url}">${texto}</a>` : texto));

  function versoes(md) {
    const lista = [];
    let atual = null, item = null, citacao = null;
    for (const linha of md.split('\n')) {
      const titulo = linha.match(/^##\s+(.+)/);
      if (titulo) { atual = { titulo: titulo[1].trim(), citacoes: [], itens: [] }; lista.push(atual); item = citacao = null; continue; }
      if (!atual) continue;
      if (/^>\s?/.test(linha)) {
        const t = linha.replace(/^>\s?/, '');
        if (citacao !== null) atual.citacoes[atual.citacoes.length - 1] += ' ' + t; else atual.citacoes.push(t);
        citacao = true; item = null; continue;
      }
      citacao = null;
      if (/^\s*-\s+/.test(linha)) { item = linha.replace(/^\s*-\s+/, ''); atual.itens.push(item); continue; }
      if (item !== null && /^\s+\S/.test(linha)) { atual.itens[atual.itens.length - 1] += ' ' + linha.trim(); continue; }
      item = null;
    }
    return lista;
  }

  const lista = document.getElementById('lista-novidades');
  if (lista) fetch('NOVIDADES.md')
    .then(r => (r.ok ? r.text() : Promise.reject(r.status)))
    .then(md => {
      const vs = versoes(md);
      if (!vs.length) return;
      lista.innerHTML = '';
      vs.forEach((v, i) => {
        const d = document.createElement('details');
        d.className = 'versao';
        if (i === 0) d.open = true;
        const [nome, ...resto] = v.titulo.split(/\s+—\s+/);
        d.innerHTML =
          `<summary>${escapar(nome)}${i === 0 ? ' <span class="selo">mais nova</span>' : ''}` +
          `${resto.length ? `<span style="color:var(--texto-fraco);font-size:16px">— ${escapar(resto.join(' — '))}</span>` : ''}</summary>` +
          `<div class="versao-corpo">${v.citacoes.map(c => `<blockquote>${emLinha(c)}</blockquote>`).join('')}` +
          `<ul>${v.itens.map(t => `<li>${emLinha(t)}</li>`).join('')}</ul></div>`;
        lista.appendChild(d);
      });
    })
    .catch(() => { /* abrindo o arquivo direto do disco: fica o aviso com o link */ });

  // ---------- foto grande (só na página do jogo) ----------
  const caixa = document.getElementById('lightbox');
  if (caixa) {
    const grande = caixa.querySelector('img');
    const legenda = caixa.querySelector('.lightbox-legenda');
    const fotos = [...document.querySelectorAll('.galeria button')];
    let atual = 0;
    function mostrar(i) {
      atual = (i + fotos.length) % fotos.length;
      const b = fotos[atual];
      grande.src = b.dataset.grande;
      grande.alt = b.querySelector('img').alt;
      legenda.textContent = b.closest('figure').querySelector('figcaption').textContent;
    }
    function abrir(i) { mostrar(i); caixa.hidden = false; document.body.style.overflow = 'hidden'; caixa.querySelector('.lightbox-fechar').focus(); }
    function fechar() { caixa.hidden = true; document.body.style.overflow = ''; fotos[atual].focus(); }
    fotos.forEach((b, i) => b.addEventListener('click', () => abrir(i)));
    caixa.querySelector('.lightbox-fechar').addEventListener('click', fechar);
    caixa.querySelector('.esquerda').addEventListener('click', () => mostrar(atual - 1));
    caixa.querySelector('.direita').addEventListener('click', () => mostrar(atual + 1));
    caixa.addEventListener('click', e => { if (e.target === caixa) fechar(); });
    document.addEventListener('keydown', e => {
      if (caixa.hidden) return;
      if (e.key === 'Escape') fechar();
      if (e.key === 'ArrowLeft') mostrar(atual - 1);
      if (e.key === 'ArrowRight') mostrar(atual + 1);
    });
    // Arrastar o dedo para os lados troca a foto no celular.
    let toqueX = null;
    caixa.addEventListener('touchstart', e => { toqueX = e.touches[0].clientX; }, { passive: true });
    caixa.addEventListener('touchend', e => {
      if (toqueX === null) return;
      const dx = e.changedTouches[0].clientX - toqueX;
      if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
      toqueX = null;
    });
  }

  // ---------- aparecer ao rolar ----------
  const alvos = document.querySelectorAll('.cartao, .galeria figure, .passo, .download');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const obs = new IntersectionObserver(entradas => {
      for (const e of entradas) if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px' });
    alvos.forEach((el, i) => { el.classList.add('revelar'); el.style.transitionDelay = `${(i % 4) * 60}ms`; obs.observe(el); });
  }
})();
