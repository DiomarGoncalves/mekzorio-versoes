# MEKZORIO no painel Pterodactyl

O egg ensina o painel Pterodactyl a instalar e ligar o servidor dedicado do MEKZORIO. Você importa ele uma
vez e depois cria quantos servidores quiser. Ele vem junto de cada versão, em qualquer um destes lugares (é o
mesmo arquivo):

- `Mekzorio-egg-pterodactyl.json`, solto na pasta das versões e na página do Release no GitHub;
- `pterodactyl/egg-mekzorio.json`, dentro do `.zip` do servidor (junto com este LEIA-ME).

## 1. Importar o egg (uma vez só)

1. Entre no painel como administrador e clique na engrenagem (**Admin**).
2. Vá em **Nests**. Se quiser, crie um Nest novo chamado `MEKZORIO` (botão **Create New**); pode também usar um que já existe.
3. Ainda em **Nests**, clique em **Import Egg**, escolha o arquivo do egg (`Mekzorio-egg-pterodactyl.json` ou `egg-mekzorio.json`), escolha o Nest e clique em **Import**.

Se um dia este arquivo mudar, importe de novo: abra o egg MEKZORIO no painel e use **Update Egg** com o arquivo novo.

## 2. Separar uma porta

O jogo usa a porta **UDP** (o padrão é 27777).

1. **Admin → Nodes →** o seu node **→ Allocation**.
2. Em **Assign New Allocations**, ponha o IP do node e a porta (por exemplo `27777`) e clique em **Submit**.

O Pterodactyl libera a porta em TCP e UDP ao mesmo tempo; não tem opção separada para UDP. Se a máquina do node
tiver firewall, libere a porta em UDP nele também (por exemplo, `ufw allow 27777/udp`).
Se a hospedagem for de uma empresa, a porta normalmente já vem liberada.

## 3. Criar o servidor

1. **Admin → Servers → Create New**.
2. Dê um nome, escolha o dono, o node e, em **Default Allocation**, a porta do passo 2.
3. Memória: 1024 MB já dá para começar (2048 MB para mundos grandes ou muita gente). Disco: pelo menos 2048 MB.
4. Em **Nest** escolha `MEKZORIO` e em **Egg** escolha `MEKZORIO`. A imagem Docker já vem escolhida (`Debian`).
5. Preencha as opções (dá para mudar depois na aba **Startup** do servidor):

   | Opção | O que é |
   |---|---|
   | Link do pacote do servidor | Deixe o que já vem: baixa sempre a última versão publicada. |
   | Nome do servidor | Nome que os jogadores veem. |
   | Senha | Senha para entrar. Vazio = sem senha. |
   | Máximo de jogadores | Quantas pessoas ao mesmo tempo. |
   | Nome do mundo | Só vale quando o mundo é criado pela primeira vez. |
   | Seed | Número que gera o mapa (vazio = sorteado). Só vale para mundo novo. |

6. Clique em **Create Server**. O painel baixa e instala o servidor sozinho.
   (Se a instalação disser "Falta o servidor", veja "Se o download não funcionar", no fim.)
7. Clique em **Start** e espere aparecer no console:
   `Servidor '...' pronto na porta 27777.` Aí o painel mostra o servidor como ligado.

A porta vem sempre da porta escolhida no painel. As opções acima também vêm do painel: se você mudar a
mesma coisa no `servidor.json`, vale o que está no painel.

**Como os amigos entram:** no jogo, **Multijogador → Entrar por endereço**, digitem o endereço que aparece no
topo do servidor no painel (IP e porta, por exemplo `200.150.10.20:27777`) e cliquem em **Entrar**.

**Desligar:** o botão **Stop** do painel manda o comando `parar`, que salva o mundo antes de desligar.
Evite o **Kill**: ele desliga na hora e perde o que foi feito desde o último salvamento automático (5 minutos).
No console do painel também dá para digitar os comandos do servidor: `jogadores`, `info`, `salvar`, `copia`,
`dizer <texto>`, `expulsar <nome>`, `banir <nome>`, `desbanir <nome>`, `cargo <nome> admin|construtor|visitante`,
`cargos`, `lista ligar|desligar`, `lista add|tirar <nome>`.

**Administradores e cargos:** ponha o seu nome do jogo em `"admins": ["SeuNome"]` no `servidor.json` (aba **Files**)
e reinicie. Aí você usa os mesmos comandos pelo chat do jogo, começando com `/` (ex.: `/cargo Ana visitante`).
Visitante só anda, conversa e olha; com a **lista** ligada, só entra quem está nela.
**Cópias de segurança:** a cada 60 minutos o mundo é copiado para `saves/mundo-copias/<data>` (as 24 últimas).

## 4. Onde ficam o mundo e a configuração

Na aba **Files** (gerenciador de arquivos) do servidor:

- `saves/mundo/` — o mundo. `saves/mundo.bak1`, `bak2`… são as cópias de segurança das últimas gravações.
  Para guardar o mundo no seu computador, selecione a pasta `saves`, compacte (**Archive**) e baixe o arquivo.
- `servidor.json` — as outras opções (administradores, banidos, quantos backups, distância de visão…).
  Mude com o servidor desligado e ligue de novo.
- `mods/` — o conteúdo do jogo. Não apague a pasta `mods/base`.

## 5. Atualizar para uma versão nova

**Sozinho (a partir da v0.1.8-alfa):** toda vez que o servidor liga, ele confere se saiu uma versão nova e, se saiu,
baixa e se atualiza antes de abrir — no console aparece "Versão nova: … Baixando…" e depois "Atualizado para a …".
Então, quando sair uma versão, basta **Restart**. A variável **Atualizar sozinho ao ligar** (aba **Startup**) em `0`
desliga isso. Sem internet ou com o GitHub fora, ele só avisa e liga na versão que já tem.

Para ganhar isso num servidor que já existia: importe o egg novo (**Admin → Nests → Import Egg**, por cima do antigo)
e faça **um** Reinstall; dali em diante é automático.

À mão (sempre funciona):

1. Desligue o servidor (**Stop**).
2. Na aba **Settings** do servidor, clique em **Reinstall Server**.

A reinstalação baixa o pacote novo e troca só os arquivos do programa. **A pasta `saves/` e o `servidor.json`
não são apagados.** Mods que você mesmo pôs em `mods/` também ficam; só os que vêm no pacote são trocados.
Lembrete: todos precisam jogar com a mesma versão do servidor (os amigos baixam o jogo novo também).

## 6. Se o download não funcionar

O link padrão baixa da página de versões do jogo no GitHub
(https://github.com/DiomarGoncalves/mekzorio-versoes/releases). Se ela estiver fora do ar ou ficar privada,
a instalação avisa "Falta o servidor". Aí:

1. Peça o `Mekzorio-servidor-linux.zip` a quem cuida do jogo.
2. No painel, aba **Files** do servidor, clique em **Upload** e envie o `.zip` (não descompacte).
3. Em **Settings**, clique em **Reinstall Server**. A instalação usa o `.zip` enviado.

Para atualizar desse jeito, apague o `.zip` antigo em **Files**, envie o novo e reinstale.

## 7. Se ficar "Installing" para sempre ou a instalação der erro

- **Use o egg mais novo** (importe de novo com **Update Egg**). Versões antigas do egg descompactavam o servidor no
  `/tmp` da instalação, que no Wings tem só 100 MB: ele enchia e a instalação travava em "Installing".
  Se travou com o egg antigo: **Admin → Servers →** o servidor **→ Manage → Toggle Install Status**, atualize o
  egg e clique em **Reinstall Server**.
- **"ERRO: falha ao descompactar o pacote"**: o `.zip` veio incompleto ou falta espaço. A instalação precisa de
  uns 400 MB livres no disco do servidor (o pacote e uma cópia temporária); depois de instalado ocupa uns 110 MB.
- **Nada aparece no console e continua "Installing"**: o problema é no painel. Confira se o node está com o
  coração verde (**Admin → Nodes**), se o serviço `pteroq` está rodando na máquina do painel e o
  `/var/log/pterodactyl/wings.log` na máquina do node.

## Detalhes técnicos (para quem mexe no painel)

- Imagem: `ghcr.io/parkervcp/yolks:debian`; instalação em `ghcr.io/parkervcp/installers:debian`.
- Comando de início: `MEKZORIO_PORTA={{SERVER_PORT}} ./Automacao.ServerApp servidor.json`.
  O servidor lê `MEKZORIO_PORTA`, `MEKZORIO_NOME`, `MEKZORIO_SENHA`, `MEKZORIO_MAX_JOGADORES`, `MEKZORIO_MUNDO`
  e `MEKZORIO_SEED` do ambiente, por cima do `servidor.json`.
- "Ligado" quando o console mostra `pronto na porta`; comando de parar: `parar`.
- A instalação trabalha numa pasta `.instalador.*` dentro da pasta do servidor (não no `/tmp`, que é um tmpfs
  de 100 MB no Wings) e apaga essa pasta no final.
- O egg usa o pacote glibc (`Mekzorio-servidor-linux.zip`). O pacote Alpine não roda nessa imagem.
