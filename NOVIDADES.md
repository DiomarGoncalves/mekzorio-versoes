# Novidades

## v0.2.4-alfa

> Não conecta com a v0.2.3-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: reinicie o servidor, que ele se
> atualiza sozinho ao ligar). Mundos e saves antigos abrem normalmente. A ferrovia e as linhas novas só aparecem em
> mundos criados a partir desta versão.

- **Mais inimigos:**
  - **Carrapato:** pequeno e rápido, ataca em bando.
  - **Atirador:** acerta de longe, sem chegar perto.
  - **Detonador:** corre até o alvo e explode, ferindo tudo em volta.
  - **Triturador:** lento e muito resistente, derruba muro.
  - **Torres mais cheias:** além das sentinelas, cada torre de vigia tem um acampamento em volta, maior quanto mais
    longe do início.
- **Nível novo "Invasões"** (em Novo mundo → Guardiões; é o mais difícil):
  - **Como funciona:** depois dos primeiros 15 minutos, ondas saem do lado da torre viva mais perto e marcham até a
    sua fábrica. Elas crescem conforme você avança.
  - **Como se defender:** muros, torretas com munição e MEKs de segurança. Derrubar as torres em volta da base acaba
    com as invasões daquele lado.
- **Inimigos de cara nova:** a sentinela, o Guardião do Nó e os quatro novos ganharam formas arredondadas, com olho
  grande aceso, no lugar dos caixotes.
- **Usinas abandonadas** (mundos novos): geradores a carvão que, restaurados pelo MEK zelador, se abastecem sozinhos e
  dão energia para quem puxar um poste.
- **Linhas abandonadas de cada região** (mundos novos): fábrica de cabos com turbinas eólicas, fazenda solar, vidraria
  elétrica, fábrica de engrenagens e olaria. A montadora volta já com a receita.
- **Ferrovia antiga entre as regiões** (mundos novos):
  - **O que se encontra:** trilhos enferrujados ligando as regiões vizinhas, com uma estação em cada ponta e postes de
    luz apagados ao lado.
  - **Restaurar:** com a região religada, clique no trilho. Cada clique restaura até 60 trilhos, a 1 pedra cada, e a
    ferrugem some em onda.
  - **Depois:** ponha uma locomotiva e ela vai de uma estação à outra. À noite os postes do trecho restaurado acendem.
- **Morros (teste)** (opção em Novo mundo, desligada por padrão):
  - **O que muda:** planaltos grandes e altos, de topo plano, com barranco em volta e mais minério em cima.
  - **Subir:** só por rampa. Há rampas naturais, e a Carga de demolição abre uma nova no pé do barranco. Descer dá
    de qualquer lugar.
  - **Construir:** máquinas só no plano; esteira, cano e poste acompanham a rampa.
  - **É um teste:** pode mudar ou sair nas próximas versões.
- **Carregar mundo:** os botões Exportar e Apagar não somem mais quando o mundo tem muitos mods.

## v0.2.3-alfa

> Não conecta com a v0.2.2-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: reinicie o servidor, que ele se
> atualiza sozinho ao ligar). Mundos e saves antigos abrem normalmente.

- **Avião que plana:** soltando o acelerador o avião não para mais no ar para cair reto. Ele perde velocidade, abaixa
  o bico e desce aos poucos, sempre para a frente; perto do chão arredonda, encosta e rola até parar. Shift continua
  descendo mais rápido.
- **Pouso suave:** o helicóptero (e qualquer descida) vai amaciando no último tile em vez de parar de uma vez no chão.
- **Mapa sem travadinhas voando:** andando rápido, o mapa novo agora chega e é desenhado aos poucos, em vez de uma
  fileira inteira no mesmo instante (era isso que dava a travadinha a cada trecho, principalmente de avião).
- **Um mundo mais vivo:**
  - **Vento:** árvores, capim, flores e arbustos balançam, mais na ventania e na chuva.
  - **Sons:** de dia, pássaros e folhas na mata e ondinhas na beira dos lagos.
  - **Noite:** vaga-lumes onde há vegetação e grilos mais fortes na mata.
  - **Bichinhos:** bem menos besouros e pássaros de lata correndo de você.
- **Restos da Rede antiga** (mundos novos):
  - **O que se encontra:** sítios abandonados pelo mapa, com linhas de esteira enferrujada, trilho velho, postes
    caídos, carcaças de máquina e carros abandonados.
  - **Desmontar rende:** é como cortar árvore, e dá engrenagens, placas, cabo e sucata.
- **Linhas de produção abandonadas** (mundos novos):
  - **O que se encontra:** pelo mapa, longe do início, linhas paradas e enferrujadas da Rede antiga: uma mineradora
    sobre ferro ou cobre que mandava o minério por esteiras até um divisor, duas fornalhas e um baú (ou uma mina de
    carvão com baú).
  - **MEK zelador:** cada linha tem um MEK de manutenção antigo, caído e apagado enquanto a região está desligada.
  - **Restaurar:** depois de religar o Nó da região, ele se levanta. Clique numa peça e pague metade do material dela
    (o mouse em cima mostra quanto); o MEK vai até lá e conserta com faíscas, uma peça por vez. Restaurada, ela é a
    máquina normal: a linha volta a minerar e fundir e as placas chegam no baú.
  - **Noite:** o sítio acordado fica com luz âmbar.

## v0.2.2-alfa

> Não conecta com a v0.2.1-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: reinicie o servidor, que ele se
> atualiza sozinho ao ligar). Mundos e saves antigos abrem normalmente.

- **Voo com Espaço e Shift:** o helicóptero fica no chão até você apertar Espaço; Espaço sobe e Shift desce, bem mais
  alto que antes (helicóptero até 16 tiles, avião até 22). O avião corre na pista e só decola com Espaço depois de
  pegar velocidade. Os dois só pousam em chão livre: em cima de água ou de construções, ficam pairando baixinho.
- **Inclinações no voo:** o helicóptero abaixa o bico ao andar e deita na curva; o avião levanta o bico subindo e
  deita a asa na curva.
- **Braço puxador** (violeta, pesquisa Automação): pega o item a 2 tiles atrás (por cima de uma esteira, por exemplo)
  e solta encostado, no tile da frente. Para mods: campo `dropReach` no braço.
- **Veículos sem pulinhos:** carros, helicóptero, avião e trens andam lisos na tela, em qualquer câmera (antes davam
  uns trancos, principalmente em monitores de 75/144 Hz e jogando pela internet).
- **Ícones em cima das máquinas:** na primeira pessoa ficam desligados (tela limpa); a tecla H liga e desliga os da
  câmera que você está usando, e há duas opções em Opções → Interface.

## v0.2.1-alfa

> Não conecta com a v0.2.0-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: reinicie o servidor, que ele se
> atualiza sozinho ao ligar). Mundos e saves antigos abrem normalmente.

- **Colisão nas árvores** (opção no Novo mundo, desligada por padrão): o tronco bloqueia quem anda e os carros; dá
  para passar entre as árvores, e voando não conta.
- **Correção:** duas cópias diferentes da 0.2.0 tinham o mesmo número de rede e davam "mensagem inválida do servidor:
  bytes sobrando na mensagem" ao entrar. A 0.2.1 deixa tudo igual de novo.

## v0.2.0-alfa

> Não conecta com servidores da v0.1.x: atualize o jogo e o servidor juntos (no Pterodactyl: reinicie o servidor,
> que ele se atualiza sozinho ao ligar; se não atualizar, Reinstalar o servidor). Mundos e saves antigos abrem
> normalmente. Fez um mod a partir de um exemplo e ele pede `"base": "^0.1.0"`? Troque para `">=0.1.0"`.

**Mods com scripts.** Além de dados (JSON), modelos do Blockbench e sons, um mod agora pode trazer **scripts em
JavaScript**: máquinas com comportamento próprio, janelas com as peças do jogo, peças do modelo girando, comandos no
chat, pesquisas, contratos e inimigos com ordens (andar, atacar, fugir). Os scripts rodam **só no servidor e
trancados** — sem acesso aos seus arquivos, à internet ou ao resto do computador, com limite de memória e de tempo; os
mods com script têm a marca **SCRIPTS** na lista. Para começar, em **Menu → Mods → Criar mod** você dá um nome e o jogo
monta um mod que já funciona (uma prensa com script e a janela dela). O jogo também traz o mod de exemplo
**Mecânica**: um motor rotativo a carvão, uma caixa de engrenagem que prensa placas em engrenagens e um ladrão de
engrenagens (comando `/ladrao`) que vem roubar da sua caixa. A **[documentação completa](documentacao/index.html)** e
a **[aba Mods](mods.html)** estão no site.

- **Janelas de mod com espaços de item:** a máquina de um mod pode ter a própria janela, com os espaços arrastáveis
  como nos baús do jogo (Shift + clique e Ctrl também).
- **Mods no servidor como no Bedrock:** ao entrar num servidor com mods, o jogo mostra a lista e baixa só o que falta,
  só para aquela partida. Os seus mods não mudam.
- **Modo desenvolvedor** (Opções → Interface): **F8** abre o console dos mods (o que os scripts escrevem, erros com
  arquivo e linha, recarregar scripts, rodar uma linha de JavaScript) e o **F3** mostra os ids.
- **Inimigos e MEKs em dados:** vida, dano, velocidade, visão e modelo de cada inimigo vêm de um arquivo; um mod pode
  criar os seus.
- **Exportar e importar mundo:** um arquivo só (pasta "MEKZORIO - Mundos" nos Documentos) para mandar um mundo ou um
  mapa pronto para um amigo. No Carregar mundo e no menu de pausa; avisa se faltar algum mod.
- **Construir em 1ª pessoa:** o lugar da peça aparece no chão (verde cabe, vermelho não) com uma seta para onde ela
  manda; arrastar esteira e trilho segue o caminho; a câmera não atravessa as máquinas.
- **Veículos:** a mira acerta o carro em qualquer parte; **duas pessoas no carro e no avião** (quem entra primeiro
  dirige); o boneco vai sentado no carro, no helicóptero e no avião; **E** dentro do carro abre o porta-malas.
- **Q larga o item** da mão no chão.
- **Produção:** janela menor, com rolagem, e um **gráfico de energia** dos últimos 10 minutos (o que as máquinas pedem
  e o que as redes dão).
- Árvores maiores nas câmeras 3D.

## v0.1.9-alfa

> Não conecta com servidores da v0.1.8-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: reinicie o
> servidor, que ele se atualiza sozinho ao ligar; se não atualizar, Reinstalar o servidor).
> Mundos e saves antigos abrem normalmente.

**Câmera 3D (F7).** O jogo continua abrindo na visão de cima, e agora o **F7** troca para **primeira pessoa** (o mouse
olha em volta, a mira no centro escolhe onde construir; segure Alt para soltar o mouse) e **terceira pessoa** (arraste
com o botão do meio para girar). Dirigindo carro, helicóptero, avião ou andando de trem, a câmera vai atrás do veículo
e o mouse olha em volta. Nas câmeras 3D: céu com sol, lua, dois planetas e estrelas à noite, lanterna à noite, pulo
no **espaço**, jetpack voando acima das máquinas, veículos maiores e itens em pé nas esteiras. Funciona em qualquer
servidor (é só a câmera do seu computador). A tecla pode ser trocada em Opções → Controles.

- **Wiki do jogo (F2):** busque qualquer item (sem acento: "braco" acha o braço) e veja uma **prévia ao vivo** dele
  funcionando — a esteira levando placas, a fornalha recebendo minério e carvão por esteiras, o trem dando a volta —,
  o que ele faz de verdade, os números de produção (itens por segundo, tempo da receita, energia), como se faz e onde
  se usa.
- **Shift + clique no inventário:** com só o inventário aberto, leva o item da barra de atalhos para a mochila e de
  volta (junta nas pilhas iguais). Com máquina, carro ou trem aberto, continua mandando para eles.
- **R gira o trilho:** aponte para um trilho e aperte R — reto, curva e desvio giram e se religam sozinhos. Antes de
  pôr um trilho solto, o R escolhe se ele fica deitado ou em pé.
- **Correção:** com chuva, neblina ou neve, a visão de cima não fica mais toda cinza.

## v0.1.8-alfa

> Não conecta com servidores da v0.1.7-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: Reinstalar o
> servidor). Mundos e saves antigos abrem normalmente — e agora, ao abrir um mundo de uma versão anterior, o jogo e o
> servidor guardam antes uma cópia intacta dele (pasta `<mundo>.bak-antes-da-0.1.8`), para nada se perder na
> atualização. Uma versão mais antiga não abre um mundo salvo por uma mais nova: ela avisa e não mexe em nada.

**Prospecção (expansão nova).** A pesquisa Prospecção (depois do Processamento de urânio) libera a **sonda de
prospecção**: ligada na energia, ela sonda o subsolo e, a cada 2 minutos, revela um **veio profundo** de ferro ou
cobre perto dela — muito mais rico que as jazidas comuns — e marca no mapa. Cada sonda acha 3. Os veios só saem com
a **mineradora de lixiviação** e um pouco de ácido sulfúrico.

- **Livros de projetos (blueprints):** na janela de projetos (B), junte projetos em livros e exporte o livro inteiro
  de uma vez — como texto para colar para um amigo ou como arquivo (pasta "MEKZORIO - Projetos" nos Documentos) — e
  importe de volta em outro mundo ou outro computador.
- **Pegar os itens da esteira:** segure **X** com o mouse em cima da esteira e os itens dela vêm para o inventário
  (também pega um monte largado no chão). A tecla pode ser trocada em Opções → Controles.
- **Servidor no painel (Pterodactyl) se atualiza sozinho:** ao ligar, ele confere se saiu versão nova e se atualiza
  antes de abrir (mundos e configuração ficam). Para ganhar isso: importe o egg novo e faça um Reinstall uma vez.
- **Linux pelo apt:** instale uma vez com o apt (Ubuntu, Debian, Mint…) e as versões novas chegam no `apt upgrade`;
  o jogo aparece no menu de aplicativos. Passo a passo no README.
- **Equilíbrio do fim:** a pesquisa Projeto Orbital ficou um terço menor (1000 unidades em vez de 1500): era tão
  pesada quanto o jogo inteiro antes dela.
- **Mapa de teste:** área nova com as máquinas de 07/11 funcionando (fornalha de aço, braço de pilha ao lado do comum,
  laboratório 2 e bomba de cano levando água do lago ao tanque).

## v0.1.7-alfa

> Não conecta com servidores da v0.1.6-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: Reinstalar o
> servidor). Mundos e saves antigos abrem normalmente.

**Vida mecânica: mais parceiros e mais inimigos.** Os inimigos novos são opcionais, como os guardiões: no modo
Pacífico não existem, e nenhum deles vem atacar a base de surpresa.

- **MEK ajudante** (pesquisa Automação): um robozinho que anda atrás de você com uma mochila de 16 espaços, recolhe os
  itens largados no chão por perto e coleta junto quando você coleta minério ou madeira perto dele. Um por jogador;
  botão direito nele guarda no inventário com tudo.
- **Posto de segurança: Guarda ou Reparador.** O reparador conserta o que as sentinelas bateram e junta a sucata dos
  destroços para o posto; o guarda agora acompanha você enquanto você está na área do posto.
- **Coletor de sucata:** robozinho enferrujado das torres de vigia que rouba baús, saídas de máquinas e esteiras perto
  da torre e foge de você. Derrubado, devolve tudo o que levou.
- **Desmontador** (só no nível Patrulhas, nas torres de longe): desmonta máquinas paradas e deixa as peças no chão.
- **Sentinela voadora:** drone de vigia das torres de longe; quando vê você, chama as sentinelas. Derrube primeiro.
- **Bichinhos mecânicos:** besouros-robô e "pássaros" de lata pela grama — mais deles perto das regiões religadas.
  Só enfeite (desligam com "Efeitos").
- **English:** Opções → Interface → Idioma troca a interface e os nomes para inglês (menus, inventário, fabricação,
  pesquisa, máquinas, avisos e mensagens; algumas janelas menos usadas ainda em português).
- **Música:** trilha ambiente calma e original no menu e no jogo (com pausas entre as faixas); volume em Opções → Som.
- **Correção:** com o jogo lento, o som do golpe das sentinelas às vezes não tocava.

## v0.1.6-alfa

> Não conecta com servidores da v0.1.5-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: Reinstalar o
> servidor). Mundos e saves antigos abrem normalmente — a partir desta versão isso é testado automaticamente com saves
> reais de cada versão publicada.

- **Interface nova:** janelas menores, nítidas (ícones sem borrar) e centralizadas, que se ajustam a qualquer tela —
  de notebook até tela espelhada de celular. A escala automática acompanha a tela; "Tamanho da interface" ajusta por cima.
- **Receita num espaço só:** montadoras, planta química e fornalhas mostram um espaço com a receita; o clique abre uma
  lista com busca (como os filtros).
- **Largar itens:** Z larga 1 item da barra no chão (Shift+Z, a pilha); arrastar do inventário para o chão também.
  Na esteira, o item entra nela; no chão vira um monte que abre como baú e some quando esvazia.
- **Troca direta:** divisor, passagem ou esteira de outro nível por cima de uma esteira troca sem precisar tirar antes.
- **Divisor com saída preferida:** tudo sai por um lado; o outro só recebe a sobra.
- **Líquidos à vista:** cada cano de máquina mostra uma gota com o nome do líquido que entra ou sai, e a janela da
  máquina mostra os líquidos junto dos ingredientes.
- **Trem por partes:** clique na locomotiva para combustível e roteiro; clique num vagão para a carga dele.
- **Luminária:** perto de um poste ligado, acende sozinha à noite e ilumina a fábrica (pesquisa Energia).
- **Máquinas novas:** fornalha de aço (a carvão, o dobro da velocidade), braço de pilha (até 5 itens por viagem),
  laboratório 2 (o dobro da velocidade) e bomba de cano (empurra líquido num sentido só).
- **Dia a dia mais fácil:** Alt + botão direito copia a configuração de uma máquina (receita, filtro, pedidos) e
  Alt + clique cola em outra; a dica de cada item diz onde ele é feito e onde é usado; máquinas paradas mostram um
  aviso em cima (sem energia, sem combustível, sem receita, saída cheia).
- **Modo detalhes (H):** em cima de cada máquina, o ícone do que ela está fazendo; em braços e divisores com filtro,
  o item do filtro. Q pega na mão a peça apontada (como o botão do meio).
- **Desfazer (Ctrl+Z):** volta o último arrasto, colagem ou remoção (até 20); o que foi tirado volta com a receita
  e o filtro. Sem nada na mão, **R** gira a esteira ou o braço apontado.
- **Fabricar com os intermediários:** com as placas no inventário, pedir um braço ou uma esteira já faz antes as
  engrenagens, os fios e os circuitos que faltam (a Fabricação mostra em dourado o que vai ser feito antes).
- **Fila de pesquisa:** até 5 pesquisas esperando; quando a atual termina, a próxima começa sozinha.
- **Aviso de ataque:** sentinelas batendo na sua fábrica avisam na tela (distância e direção) e piscam no minimapa.
- **Barra que lembra o item:** o espaço da barra que esvaziou guarda o item apagado e ele volta sozinho para lá.
- **Dica com o estado:** passar o mouse numa máquina mostra o que ela faz, o andamento e o que a segura.
- **Pesquisa concluída** avisa na tela o que ela libera.
- **Marcadores no mapa:** M, botão direito marca um ponto com nome; aparece no mapa e no minimapa de todos os jogadores
  (com o nome de quem marcou) e fica salvo no mundo.
- **Gráfico de produção:** na janela de Produção (P), clique num item para ver quanto foi feito e gasto por minuto nos
  últimos 10 minutos.
- **Chão:** caminho de pedra (ande 30% mais rápido) e, no meio do jogo, concreto (50% mais rápido, feito na planta
  química). Calce arrastando o mouse; recolha segurando o clique.
- **Servidor mais leve:** fábricas grandes gastam bem menos tempo por passo do servidor.
- **Etapa final mais justa:** o foguete pede bem menos petróleo (combustível sólido e de foguete mais baratos).
- **Correções:** motores a vapor ligados na medida exata ao reator davam pouca energia; o monte de itens tinha colisão.
- **Mods:** um segundo mod de exemplo, a Destilaria (com líquidos), aparece em Menu → Mods ao lado da Fornalha de
  tijolos.

## v0.1.5-alfa

> Não conecta com servidores da v0.1.4-alfa: atualize o jogo e o servidor juntos (no Pterodactyl: Reinstalar o
> servidor; saves e `servidor.json` ficam). Mundos antigos abrem normalmente (o urânio da região 5 aparece em mundos
> novos; nos antigos, só nas jazidas das ruínas ainda não exploradas).

- **Fim do jogo: foguete orbital.** A pesquisa Projeto Orbital libera o **silo de lançamento**. Ele monta 100
  segmentos de foguete (estrutura leve, combustível de foguete, unidades de controle e urânio empobrecido), e o
  foguete vai aparecendo do poço. O primeiro lançamento leva as **cinco peças das regiões** e é a **vitória**. O
  mundo continua.
- **Depois da vitória:** cada foguete com **satélite** traz 500 **pacotes orbitais**. Eles servem para três
  **pesquisas infinitas**: mineração, montagem e laboratório mais rápidos, a cada nível.
- **Urânio e energia nuclear:**
  - urânio na região 5 e perto das ruínas de longe, tirado pela **mineradora de lixiviação** com ácido sulfúrico;
  - **centrífuga** para enriquecer o urânio e reprocessar as células gastas;
  - **reator nuclear** que move seis motores a vapor. Sem água ele esquenta, avisa no chat e **explode**.
- **Janelas menores:** espaços de item e janelas de máquina mais compactos. O tamanho da interface agora vai de 50%
  a 160%.
- **Janelas fixas:** a janela da máquina, do veículo e o inventário ficam presos no lado esquerdo, lado a lado.
- **Tela inicial nova** e Novo mundo mais limpo.
- **Esteiras sem pulinhos:** os itens andam lisos e estão mais bonitos.
- **Multijogador:** entrar de outro computador com o mesmo nome volta ao mesmo jogador, com os itens.
- **Versão diferente:** quando a versão do jogo e a do servidor não batem, a mensagem diz quem precisa atualizar.
- **Correção:** motores a vapor alimentados na medida exata davam menos energia do que deviam.
- Sons novos para as máquinas do urânio e para o silo; o mapa de teste ganhou a usina nuclear e o silo.

## v0.1.4-alfa

> Não conecta com servidores da v0.1.3-alfa: atualize o jogo e o servidor juntos. Mundos antigos abrem normalmente
> (ruínas e MEKs abandonados aparecem nas partes do mapa ainda não exploradas).

- **Correção para jogar em servidor:** jogo em português não entrava em servidor dedicado ("mods diferentes do
  servidor"). Resolvido.
- **Esteiras de duas fileiras:** cada esteira leva itens dos dois lados, sem misturar. Quem entra pela lateral cai na
  fileira daquele lado; o braço solta na do lado de lá. Carregam o dobro.
- **Logística 2 e 3:** divisor, esteira subterrânea e aérea rápidas (vermelhas) e expressas (azuis), com a esteira
  expressa nova.
- **Divisor com filtro e balanceadores:** escolha um item e o lado por onde ele sai; o divisor reparte igual entre as
  saídas, então dá para montar balanceadores.
- **Química do enxofre:** enxofre, ácido sulfúrico, lubrificante, rolamentos e wafers gravados (a esteira expressa e o
  circuito de processamento passam a usá-los).
- **Máquinas nível 2:** mineradora grande (5×5, o dobro da velocidade), poste grande (fio de 16 tiles) e baú de aço.
- **Ruínas da Rede:** espalhadas pelo mapa, mais ricas e guardadas quanto mais longe. O cofre tem **módulos** de
  velocidade e de eficiência, que você encaixa no espaço Módulo das máquinas elétricas.
- **MEKs de segurança:** o Posto de segurança monta, com sucata mecânica, até 3 MEKs que patrulham a sua base e
  enfrentam os guardiões. Pelo mapa, **MEKs abandonados** guardam as bases de longe e deixam saque.
- **Filtros mais fáceis:** um espaço só; clique e escolha o item numa lista com busca.
- **Mapa de teste** agora vem com o jogo (Novo mundo → Começar de). O jogo base não aparece mais em Mods.
- Interface: tamanho da interface aplica ao soltar, letras mais nítidas, armazém com rolagem, tecla E fecha a máquina
  junto com o inventário, pesquisa (T) abre sem travar.

## v0.1.3-alfa

> Não conecta com servidores da v0.1.2-alfa: atualize o jogo e o servidor juntos. Mundos antigos abrem normalmente
> (as novidades de mapa e de guardiões valem para mundos novos).

- **Guardiões mecânicos** (ameaça opcional, escolhida ao criar o mundo): Pacífico, Guardião do Nó, Territórios ou
  Patrulhas. Torres de vigia com sentinelas, um Guardião grande que trava cada Nó regional e bases espalhadas pelo
  mapa, mais fortes quanto mais longe. Segure o clique para atacar (arma no espaço Arma atira de longe); torretas
  atiram sozinhas. Derrubados deixam **sucata** e **Destroços** com saque (placas, aço, baterias, pacotes…).
- **Nós em etapas**: cada região religa, estabiliza e amplia, com pedidos em escala de fábrica; a última etapa dá
  uma peça do Projeto Orbital. Aviso grande ao fechar etapa e um feixe de luz no Nó.
- **Recursos exclusivos**: quartzo, lítio e petróleo só existem em volta do Nó da sua região (mundos novos).
- **Subprodutos**: aço solta escória e silício solta pó de sílica; dá para reaproveitar na fornalha.
- **Cortador de árvores** (pesquisa Silvicultura): corta em volta e replanta mudas. E **carvão vegetal**.
- **Mapa (M) e minimapa (N)** com o visual do mundo ao aproximar; bem de perto, o próprio jogo visto de cima.
- Sons novos dos guardiões; correções diversas.

## v0.1.2-alfa

> Não conecta com servidores da v0.1.1-alfa: atualize o jogo e o servidor juntos. Mundos antigos abrem normalmente.

- **Pesquisa em linha do tempo**: o começo é feito entregando itens pela janela de pesquisa, sem laboratório
  (Ferro → Cobre → Energia → Ciência); depois cada era traz um pacote novo. A lista mostra as pesquisas separadas
  por era.
- **Rede de Reativação**: os Nós de cada região têm contratos; religar uma região recupera tecnologias que só
  saem dela (eólica, solar, fundição elétrica e Automação 3). Na pesquisa, "ver no mapa" mostra onde fica o Nó.
- **Interface nova** em todas as máquinas: miniatura 3D, estado em uma palavra, receita com setas, consumo real
  e a lista do combustível que serve. Inventário com o equipamento identificado e pesquisa em três colunas.
- **Veículos e vagões** com espaços de verdade: arraste itens para o porta-malas, o tanque e os vagões do trem.
- **Busca** na fabricação (C) e nos itens do criativo (I).
- **Mapa (M) e minimapa (N)**: aproximando, mostram o chão, o minério, as árvores e as máquinas como no jogo;
  bem de perto (8x a 32x) o mapa vira uma janela do jogo visto de cima. Minimapa com zoom pela rodinha.
- **PC fraco**: qualidade Baixa/Média/Alta e Modo leve (OpenGL) em Opções → Gráficos.
- Correções: torreta com espaço de munição; poste e extrator de petróleo não pedem mais carvão.

## v0.1.1-alfa

> Não conecta com servidores da v0.1.0-alfa: atualize o jogo e o servidor juntos.

- **Helicóptero e avião** (pesquisas Aviação e Aviação 2): voam por cima de água e construções; o helicóptero só
  pousa em chão livre e o avião decola quando pega velocidade.
- **Montadora de veículos**: carro, helicóptero, avião, locomotiva e vagões saem só dela, com as peças por esteira.
- **Lataria dos veículos**: bater forte estraga; se acabar, o veículo explode. Parado, ela se recupera aos poucos.
- **Guia de primeiros passos** no canto da tela (Carreira e Sandbox), em 8 passos que se marcam sozinhos.
- **Janela Personagem** (botão acima de Ferramentas, tecla G) com o equipamento.
- **Braço longo**: pega e solta a 2 tiles.
- **Fornalhas com receita** (ou Auto) e a montadora mostra o que falta de cada ingrediente.
- **Servidor**: cargos (admin, construtor, visitante), comandos pelo chat (`/comando`), lista de quem pode entrar,
  cópias de segurança com data e baixar os mods do servidor ao entrar. Egg do Pterodactyl corrigido.
- O conteúdo do jogo agora vai protegido dentro do próprio jogo (não existe mais a pasta `mods` para apagar sem querer).
- Correções: rotor do helicóptero não treme; guardar o veículo sempre devolve ao inventário; fumaça na locomotiva.

## v0.1.0-alfa — primeira versão de teste

- **Começo da fábrica:** coleta à mão, fornalhas, baús, esteiras (com passagens subterrâneas e aéreas), braços
  mecânicos e máquinas montadoras em três níveis (receitas de até 6 ingredientes).
- **Energia:** geradores a carvão, painéis solares (dia e noite), turbinas de vento e baterias, ligados por postes.
- **Pesquisa e contratos:** árvore de pesquisa com pacotes de ciência; regiões para religar com contratos de produção.
- **Líquidos:** canos, bombas, tanques, extração de petróleo e refinaria.
- **Logística:** drones de entrega, trens com estações, sinais, desvios, cruzamentos e vagões de carga e de líquido.
- **Veículos e equipamento:** carro, jetpack e janela do personagem (costas, corpo, mão e arma).
- **Mundo:** biomas (planície, floresta, deserto, neve, pântano), árvores que dão madeira, dia e noite, clima.
- **Multijogador cooperativo:** hospedar pelo jogo ou em servidor dedicado (Linux, com egg para Pterodactyl).
- **Mods**, modo criativo e projetos (copiar e colar partes da fábrica).
