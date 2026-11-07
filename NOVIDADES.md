# Novidades

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
- **Máquinas novas:** fornalha de aço (a carvão, o dobro da velocidade), braço de pilha (até 5 itens por viagem),
  laboratório 2 (o dobro da velocidade) e bomba de cano (empurra líquido num sentido só).
- **Dia a dia mais fácil:** Alt + botão direito copia a configuração de uma máquina (receita, filtro, pedidos) e
  Alt + clique cola em outra; a dica de cada item diz onde ele é feito e onde é usado; máquinas paradas mostram um
  aviso em cima (sem energia, sem combustível, sem receita, saída cheia); marcadores com nome no mapa (M, botão direito)
  que aparecem no minimapa.
- **Caminho de pedra:** calce o chão arrastando o mouse e ande 30% mais rápido em cima.
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
