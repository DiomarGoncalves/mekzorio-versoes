// MEKZORIO — aba Mods: desenha os cartões a partir do mods.json (a lista que o idealizador mantém).
(() => {
  const lista = document.getElementById('lista-mods');
  const escapar = t => String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const seguro = url => (/^(https:\/\/|[\w./-]+$)/.test(url || '') ? url : '#');
  fetch('mods.json')
    .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
    .then(dados => {
      const mods = dados.mods || [];
      if (!mods.length) { lista.innerHTML = '<p class="mods-aviso">Ainda não há mods na lista.</p>'; return; }
      lista.innerHTML = mods.map(m => `
        <article class="cartao mod">
          <div class="mod-topo">
            ${m.icone ? `<img class="icone" src="${escapar(seguro(m.icone))}" alt="" width="48" height="48">` : ''}
            <div>
              <h3>${escapar(m.nome)}</h3>
              <p class="mod-autor">por ${escapar(m.autor)} · versão ${escapar(m.versao)}</p>
            </div>
          </div>
          ${(m.selos || []).length ? `<p class="mod-selos">${m.selos.map(s => `<span class="selo">${escapar(s)}</span>`).join('')}</p>` : ''}
          <p>${escapar(m.descricao)}</p>
          <p class="mod-jogo">Funciona no jogo ${escapar(m.jogo)}</p>
          <a class="botao botao-secundario" href="${escapar(seguro(m.baixar))}" download>Baixar</a>
        </article>`).join('');
    })
    .catch(() => { /* aberto direto do disco: fica o aviso */ });
})();
