# HubCloud

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/docs/images/logo-dark.png">
  <img alt="HubCloud logo" src="/docs/images/logo-light.png" style="max-width: 280px; height: auto;">
</picture>

---

## Requisitos:

- Debian 11 ou superior
- Nginx
- Node.js versão 20 ou superior


## Instalação:

1. Gere um token de acesso temporário nas configurações de sua conta:
   [Clique aqui para gerar seu token de acesso](https://github.com/settings/tokens)

2. Instale as dependências:
```bash
    sudo apt-get update && sudo apt-get install -y git && sudo apt-get install -y nginx && sudo apt-get install -y nodejs && curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && source ~/.bashrc && nvm install node && nvm use node && npm install -g pm2
```

3. Baixe o instalador:
```bash
    curl -o- https://github.com/imaginatech/hubcloud-playout/releases/download/1.0/install.sh
```
4. Torne o arquivo em executável:
```bash
    chmod +x install.sh
```
5. Efetue a instalação:
```bash
    ./install.sh
```
6. Cadastre o usuário administrador:
```bash
    ffpapi -a
```
7. Acesse através do dominio informado
