![MEKZORIO](imagens/capa.jpg)

# MEKZORIO — versões de teste (alfa)

Jogo de automação industrial para PC (Windows e Linux), com multijogador cooperativo e mods.
Comece coletando à mão e termine com fábricas inteiras ligadas por esteiras, canos, trens e drones.

> **Versão alfa:** o jogo está em desenvolvimento e pode ter erros. Este repositório só tem as versões para
> baixar; o código do jogo não é público.

## Baixar

Abra **[Releases](../../releases/latest)** e baixe o arquivo do seu sistema:

| Arquivo | Para quê |
|---|---|
| `Mekzorio-jogo-windows.zip` | Jogar no Windows (10 ou 11, 64 bits) |
| `Mekzorio-jogo-linux.zip` | Jogar no Linux (64 bits) |
| `Mekzorio-servidor-linux.zip` | Servidor dedicado para Linux (qualquer distribuição) |
| `Mekzorio-servidor-linux-alpine.zip` | Servidor dedicado para Alpine Linux |
| `Mekzorio-egg-pterodactyl.json` | Egg para hospedar o servidor num painel Pterodactyl |

**Como abrir:** extraia o `.zip` inteiro (não abra de dentro do `.zip`) e abra o `Mekzorio.exe` (Windows) ou
o `Mekzorio.x86_64` (Linux). No Windows, se aparecer "O Windows protegeu o computador", clique em
**Mais informações → Executar assim mesmo** (acontece com todo jogo que ainda não tem assinatura digital).
O `LEIA-ME.txt` de cada pacote explica o resto.

## Jogar com amigos

- **Pelo próprio jogo:** quem hospeda abre um mundo, aperta Esc e escolhe **Abrir para a rede**. Os outros entram
  em **Multijogador → Entrar por endereço** (IP:porta; a porta padrão é 27777, UDP).
- **Servidor dedicado** (fica ligado sem ninguém jogando): use o `Mekzorio-servidor-linux.zip`. Para painel
  Pterodactyl, importe o `Mekzorio-egg-pterodactyl.json`; o passo a passo está em `pterodactyl/LEIA-ME.md` dentro
  do pacote do servidor.
- Todos precisam usar a **mesma versão** do jogo e do servidor.

## Imagens

| | |
|---|---|
| ![Fábrica](imagens/fabrica.jpg) | ![Trem](imagens/trem.jpg) |
| ![Montadoras](imagens/montadoras.jpg) | ![Jetpack](imagens/jetpack.jpg) |

## Achou um erro?

Abra uma **[Issue](../../issues/new/choose)** contando o que aconteceu, o que você estava fazendo e, se der, com
uma foto da tela. As novidades de cada versão ficam em [NOVIDADES.md](NOVIDADES.md).

---

MEKZORIO © DiomarGoncalves. Todos os direitos reservados. Veja os [termos de uso](TERMOS.md).
