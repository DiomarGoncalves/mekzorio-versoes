// MEKZORIO — tipos da API dos scripts de mod (gerado pelo jogo; não edite: veja docs/mods-api.md).
// Copie este arquivo para a pasta scripts/ do seu mod: o VS Code passa a mostrar as funções e o que cada uma faz.
// API de mods 1 ("apiVersion": 1 no manifest.json).

declare module "mekzorio" {
  interface Player { id: number; name: string; x: number; y: number; health: number; online: boolean; vehicle: number | null }
  interface BuildingInfo { id: number; type: string; x: number; y: number; width: number; height: number; rotation: number; working: boolean }
  interface EnemyType { id: string; name: string; ai: string; health: number; damage: number; speed: number; sight: number; leash: number; scrap: number; weight: number; friendly: boolean }
  interface EnemyDefeated { id: number; type: string | null; ai: string; kind: string; x: number; y: number; data: Record<string, any> | null }
  interface EnemyInfo { id: number; type: string | null; ai: string; x: number; y: number; health: number; maxHealth: number; damage: number; friendly: boolean; state: string; controlled: boolean; homeX: number; homeY: number; order: "move" | "stop" | "attackPlayer" | "attackBuilding" | "attackEnemy" | null }
  interface Tile { x: number; y: number; terrain: string; resource: string | null; amount: number; flora: string | null; building: number | null; walkable: boolean }
  interface Stack { item: string; count: number }
  interface MachineSlots { input: Stack | null; fuel: Stack | null; output: Stack | null; byproduct: Stack | null }
  interface FluidBox { fluid: string | null; amount: number; capacity: number; input: boolean }
  interface Tech { id: string; name: string; done: boolean; available: boolean; current: boolean; units: number; unitsDone: number; level: number; repeat: boolean; delivery: boolean; effect: string | null }
  interface ContractState { region: number; contract: string | null; item: string | null; perMinute: number; seconds: number; ratePerMinute: number; sustainedSeconds: number; index: number; count: number }
  /** Uma peça de janela. type: text, button, field, row, bar, icon, image, list, tabs, graph, separator. */
  interface Piece {
    type: "text" | "button" | "field" | "row" | "bar" | "icon" | "image" | "list" | "tabs" | "graph" | "separator" | "slot" | "slots";
    id?: string; text?: string; size?: number; color?: string; primary?: boolean; disabled?: boolean; tooltip?: string;
    label?: string; value?: string | number; placeholder?: string; children?: Piece[]; item?: string; count?: number;
    src?: string; width?: number; height?: number; items?: (string | { icon?: string; text: string })[];
    tabs?: { title: string; body: Piece[] }[]; series?: { values: number[]; color?: string }[];
    slot?: number; hint?: string; from?: number; columns?: number;   // slot/slots: espaços do baú da construção da janela (building)
  }
  interface Form { id?: string; title?: string; width?: number; building?: number; body: Piece[] }

  /** Eventos do jogo: o script registra funções que o jogo chama. */
  export const events: {
    /** Chama `fn` a cada `ticks` ticks (30 ticks = 1 segundo). `onTick(fn)` = todo tick. */
    onTick(ticks: number, fn: (tick: number) => void): void;
    /** Forma geral dos eventos abaixo, pelo nome (`"playerJoin"`, `"craft"`…). */
    on(name: string, fn: (data: any) => void): void;
    /** Um jogador entrou. */
    onPlayerJoin(fn: (player: Player) => void): void;
    /** Um jogador saiu. */
    onPlayerLeave(fn: (p: { id: number; name: string }) => void): void;
    /** Mensagem no chat (comandos `/…` não chegam aqui). */
    onChat(fn: (m: { player: Player; text: string }) => void): void;
    /** Uma construção foi posta (por jogador ou script). */
    onBuild(fn: (b: BuildingInfo) => void): void;
    /** Uma construção saiu do mundo. */
    onRemove(fn: (r: { id: number; x: number; y: number }) => void): void;
    /** Uma máquina terminou uma receita. Só é registrado se algum script ouve (não pesa à toa). */
    onCraft(fn: (c: { building: BuildingInfo; recipe: string }) => void): void;
    /** Uma pesquisa terminou (infinita: a cada nível). */
    onResearch(fn: (r: { tech: string }) => void): void;
    /** Um contrato de Nó foi cumprido. */
    onContract(fn: (c: { contract: string; region: number }) => void): void;
    /** Um jogador caiu. */
    onDeath(fn: (d: { player: Player }) => void): void;
    /** Um foguete foi lançado. */
    onRocketLaunch(fn: (r: { building: number; x: number; y: number; victory: boolean; launches: number }) => void): void;
    /** Um inimigo foi derrubado (`type`: o id dele no JSON; `ai`: o comportamento; `data`: o que este mod guardou nele com `e.data`). O mesmo que `enemies.onDefeated`. */
    onEnemyDefeated(fn: (e: EnemyDefeated) => void): void;
  };

  /** O mundo: tempo, chão, construções, itens no chão, mensagem a todos. */
  export const world: {
    /** Tick atual do mundo (30 por segundo). */
    readonly tick: number;
    /** Semente do mundo. */
    readonly seed: number;
    /** Nome do mundo. */
    readonly name: string;
    /** Hora do dia de 0 a 1 (0 = meia-noite, 0.5 = meio-dia). */
    readonly timeOfDay: number;
    /** Número do dia. */
    readonly day: number;
    /** Mensagem para todos no chat. */
    message(text: string): void;
    /** O que há num tile: terreno, jazida, vegetação, construção. */
    tile(x: number, y: number): Tile;
    /** A construção que ocupa o tile. */
    buildingAt(x: number, y: number): BuildingInfo | null;
    /** Construções numa área (até 500; `radius` em tiles, padrão 32). */
    findBuildings(opts?: { type?: string; x?: number; y?: number; radius?: number }): BuildingInfo[];
    /** Larga itens num monte no chão; devolve quantos couberam. */
    dropItems(x: number, y: number, item: string, count?: number): number;
    /** Constrói sem jogador e sem gastar item (`rotation` 0–3). `null` se não cabe. */
    build(type: string, x: number, y: number, rotation?: number): Building | null;
    /** Tira uma construção do mundo (sem devolver nada). */
    remove(id: number): boolean;
  };

  /** Jogadores: lista, mensagens, teleporte, inventário. */
  export const players: {
    /** Todos os jogadores do mundo (online ou não). */
    list(): Player[];
    /** Um jogador pelo id. */
    get(id: number): Player | null;
    /** Mensagem só para um jogador. */
    message(id: number, text: string): void;
    /** Leva o jogador até (x, y) se ali dá para ficar (não dentro de veículo). */
    teleport(id: number, x: number, y: number): boolean;
    /** Põe itens no inventário; devolve quantos couberam. */
    give(id: number, item: string, count?: number): number;
    /** Tira itens do inventário; devolve quantos saíram. */
    take(id: number, item: string, count?: number): number;
    /** Quantos daquele item o jogador tem. */
    count(id: number, item: string): number;
    /** Se o jogador é administrador do servidor. */
    isAdmin(id: number): boolean;
  };

  /** Dados do mod salvos com o mundo (qualquer valor que vire JSON; até 1 milhão de caracteres). */
  export const storage: {
    /** Lê um valor guardado (`null` se não há). */
    get(key: string): any;
    /** Guarda um valor (vai no save do mundo). */
    set(key: string, value: any): void;
    /** Apaga um valor. */
    delete(key: string): void;
    /** As chaves guardadas. */
    keys(): string[];
  };

  /** Comandos no chat (/nome). */
  export const commands: {
    /** Cria `/name` no chat. O que `fn` devolve vai só para quem digitou. `admin: true` = só administradores. */
    register(name: string, fn: (player: Player, args: string[], text: string) => string | void, opts?: { admin?: boolean; description?: string }): void;
  };

  /** Construções: máquinas com script, clique, procurar, construir. */
  export const buildings: {
    /** Chama `fn` para cada construção do tipo (ex.: `"meu_mod:prensa"`) a cada `ticks` ticks — é assim que se faz máquina nova. */
    onTick(type: string, ticks: number, fn: (b: Building) => void): void;
    /** Um jogador clicou numa construção do tipo (precisa de `"script": true` no JSON). */
    onInteract(type: string, fn: (b: Building, player: Player) => void): void;
    /** Uma construção pelo id. */
    get(id: number): Building | null;
    /** A construção que ocupa o tile. */
    at(x: number, y: number): Building | null;
    /** Como `world.findBuildings`, já como objetos. */
    find(opts?: { type?: string; x?: number; y?: number; radius?: number }): Building[];
    /** Como `world.build`. */
    build(type: string, x: number, y: number, rotation?: number): Building | null;
  };

  /** O objeto de uma construção (o `b` de `buildings.onTick` e afins). */
  interface Building {
    /** Número da construção. */
    readonly id: number;
    /** Tudo de uma vez (`null` se ela não existe mais). */
    readonly info: BuildingInfo & { enabled: boolean; power: number; recipe: string | null; inventory: Stack[]; slots: MachineSlots; fluids: FluidBox[] } | null;
    /** Tipo (id da construção no JSON). */
    readonly type: string;
    /** Canto de origem (tile). */
    readonly x: number;
    /** Canto de origem (tile). */
    readonly y: number;
    /** Se ainda está no mundo. */
    readonly exists: boolean;
    /** Se está trabalhando agora. */
    readonly working: boolean;
    /** Quanto da energia pedida chegou (0 a 1). */
    readonly power: number;
    /** `false` desliga a máquina (qualquer uma): não trabalha nem pede energia. Vai no save. */
    enabled: boolean;
    /** Máquina de mod com `"power"` no JSON: `true` enquanto quer energia (veja quanto chegou em `power`). */
    wantsPower: boolean;
    /** Itens do baú (`container`). */
    readonly inventory: Stack[];
    /** Máquina: entrada, combustível, saída e subproduto. */
    readonly slots: MachineSlots;
    /** Tanques de líquido. */
    readonly fluids: FluidBox[];
    /** Quantos daquele item ela tem (baú e espaços da máquina). */
    count(item: string): number;
    /** Põe itens como um braço poria; devolve quantos entraram. */
    insert(item: string, count?: number): number;
    /** Tira itens (somem); sem `item`, qualquer um. Devolve quantos saíram. */
    extract(item?: string, count?: number): number;
    /** Põe líquido nos tanques; devolve quanto entrou. */
    addFluid(fluid: string, amount: number): number;
    /** Tira líquido; devolve quanto saiu. */
    takeFluid(fluid: string, amount: number): number;
    /** Construções encostadas, com o lado. */
    neighbors(): { side: "east" | "south" | "west" | "north"; building: Building }[];
    /** Dados deste mod nesta construção, salvos com o mundo (somem quando ela sai). */
    readonly data: { get(key: string): any; set(key: string, value: any): void; delete(key: string): void };
    /** Tira do mundo (sem devolver nada). */
    remove(): boolean;
    /** Toca uma animação do `.bbmodel` (qualquer uma). `null` volta à do estado (`animations` no JSON). */
    animate(name: string | null, opts?: { loop?: boolean; speed?: number }): void;
    /** Pose de um osso, somada à animação: `rotation` (graus), `position`, `spin` (graus por segundo, girando sempre). `null` tira. */
    pose(bone: string, pose: { rotation?: [number, number, number]; position?: [number, number, number]; spin?: [number, number, number] } | null): void;
  }

  /** Inimigos e MEKs: criar, procurar, um código por tipo a cada tick. O comportamento de cada um é um dos 7 do jogo (`ai` no JSON); o script pode assumir o controle com ordens. */
  export const enemies: {
    /** Todos os inimigos que existem (do jogo e dos mods), com os números do JSON. */
    types(): EnemyType[];
    /** Cria um inimigo no ponto (a casa dele fica ali). `null` no mundo Pacífico, em chão onde não se anda e para o MEK de segurança (que precisa de um Posto). Até 50 por tick. */
    spawn(type: string, x: number, y: number): Enemy | null;
    /** Um inimigo vivo pelo id. */
    get(id: number): Enemy | null;
    /** Os vivos (até 500); com `radius`, só os perto de x, y, do mais perto ao mais longe. */
    list(opts?: { type?: string; x?: number; y?: number; radius?: number }): Enemy[];
    /** Os vivos até `radius` tiles (padrão 16) do ponto, do mais perto ao mais longe. */
    near(x: number, y: number, radius?: number, type?: string): Enemy[];
    /** Chama `fn` para cada inimigo vivo do tipo (ex.: `"meu_mod:sucateiro"`) a cada `ticks` ticks. */
    onTick(type: string, ticks: number, fn: (e: Enemy) => void): void;
    /** Um inimigo foi derrubado, com os dados que este mod guardou nele (`e.data`). Como `events.onEnemyDefeated`. */
    onDefeated(fn: (e: EnemyDefeated) => void): void;
  };

  /** O objeto de um inimigo (o `e` de `enemies.onTick` e afins). Posição em tiles, com fração (10.5 = meio do tile 10). */
  interface Enemy {
    /** Número do inimigo. */
    readonly id: number;
    /** Tudo de uma vez (`null` se ele caiu ou sumiu). */
    readonly info: EnemyInfo | null;
    /** Id do inimigo no JSON. */
    readonly type: string;
    /** O comportamento: `sentinel`, `warden`, `mek`, `rogue_mek`, `scavenger`, `dismantler` ou `watcher`. */
    readonly ai: string;
    /** Posição (tiles, com fração). */
    readonly x: number;
    /** Posição (tiles, com fração). */
    readonly y: number;
    /** Se ainda está vivo no mundo. */
    readonly exists: boolean;
    /** Vida. Mudar cura ou fere (até `maxHealth`); 0 derruba, como um golpe (solta a sucata). */
    health: number;
    /** Vida cheia (do JSON). */
    readonly maxHealth: number;
    /** `true` para o MEK de segurança do jogador. */
    readonly friendly: boolean;
    /** `guarding` (parado), `chasing` (andando/lutando), `returning`, `patrol` ou `dying`. */
    readonly state: string;
    /** `true` enquanto segue ordens do script (o comportamento do jogo fica parado). Não vai no save: ao abrir o mundo ele volta ao normal até o script mandar de novo. */
    readonly controlled: boolean;
    /** Ordem: andar até o ponto (contorna água e construções) e parar lá. */
    moveTo(x: number, y: number): void;
    /** Ordem: ir atrás do jogador e bater. Quando ele cai, fica parado esperando ordem. */
    attackPlayer(player: Player | number): boolean;
    /** Ordem: ir até a construção e bater até derrubar. */
    attackBuilding(b: Building | BuildingInfo | number): boolean;
    /** Ordem: lutar com outro inimigo ou MEK. */
    attackEnemy(e: Enemy | number): boolean;
    /** Ordem: ficar parado onde está (também assume o controle). */
    stop(): void;
    /** Devolve ao comportamento do jogo (ele volta para casa ou segue o que fazia). */
    release(): void;
    /** Fere. Se cair, a sucata vai para `by` (ou para quem estiver perto). */
    damage(amount: number, by?: Player | number): void;
    /** Some do mundo sem soltar nada e sem o evento de derrubado. */
    remove(): boolean;
    /** Dados deste mod neste inimigo, salvos com o mundo. Quando ele cai, vêm no evento `onDefeated` (`data`) e depois somem. */
    readonly data: { get(key: string): any; set(key: string, value: any): void; delete(key: string): void };
  }

  /** Telas: janelas com as peças do jogo, avisos e texto no HUD. */
  export const ui: {
    /** Abre (ou atualiza, com o mesmo `id`) uma janela para o jogador. Clique, Enter num campo e fechar chamam `onEvent`. */
    show(player: Player | number, form: Form, onEvent?: (e: { button: string; fields: Record<string, string>; closed: boolean; player: Player }) => void): void;
    /** Fecha a janela. */
    close(player: Player | number, id?: string): void;
    /** Aviso rápido embaixo da tela (`color`: `accent`, `danger`, `energy` ou `#rrggbb`). */
    toast(player: Player | number, text: string, color?: string): void;
    /** Linha fixa no alto da tela (até 8); `null` tira. */
    hud(player: Player | number, id: string, text: string | null): void;
  };

  /** Pesquisas. */
  export const research: {
    /** Todas as pesquisas com o estado de cada uma. */
    list(): Tech[];
    /** A pesquisa em andamento. */
    readonly current: string | null;
    /** Escolhe a pesquisa do laboratório (`null` = nenhuma). */
    select(id: string | null): boolean;
    /** Se a pesquisa está concluída. */
    isDone(id: string): boolean;
    /** Nível de uma pesquisa infinita. */
    level(id: string): number;
    /** Conclui (e libera as receitas); infinita: +1 nível. */
    grant(id: string): boolean;
    /** Unidades de presente para a pesquisa atual. */
    progress(units?: number): void;
    /** Soma das infinitas com esse efeito (`mining_speed`, `crafting_speed`, `research_speed` ou um do mod). */
    bonus(effect: string): number;
  };

  /** Contratos dos Nós (um por região). */
  export const contracts: {
    /** O contrato ativo de cada região, com o ritmo e o tempo mantido. */
    list(): ContractState[];
    /** O contrato ativo da região fecha no próximo tick, com as recompensas. */
    finish(region: number): boolean;
  };

  /** Sorteio com semente do mundo (igual em todo servidor que roda o mesmo mundo). */
  export const random: {
    /** Número de 0 a 1 (igual a `Math.random()`, que também tem semente). */
    next(): number;
    /** Inteiro de `min` a `max` (inclusive). */
    int(min: number, max: number): number;
  };

  /** Mensagens para o console (F8 no modo desenvolvedor, ou o console do servidor). */
  export const console: {
    /** Mensagem. */
    log(...values: any[]): void;
    /** Mensagem. */
    info(...values: any[]): void;
    /** Aviso (amarelo). */
    warn(...values: any[]): void;
    /** Erro (vermelho). */
    error(...values: any[]): void;
  };

  /** Chama `fn` uma vez, daqui a `ticks` ticks. */
  export function after(ticks: number, fn: () => void): void;
}
