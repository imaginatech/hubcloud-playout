# HubCloud

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/docs/images/logo-dark.png">
  <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="/docs/images/logo-light.png" style="max-width: 280px; height: auto;">
</picture>

---

## Requisitos:

- Debian 11 ou superior
- Nginx
- Node.js versão 20 ou superior


## Instalação:

1. Instale o backend do playout na versão mais recente, [clique para aqui mais detalhes.](https://github.com/ffplayout/ffplayout/blob/master/docs/install.md)

2. Instale as dependências:
```bash
    # Instalação do NVM (Node Version Manager)
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
```bash
    # Atualização do Node.js e npm para a versão mais recente
    nvm install node --latest-npm
```
```bash
    # Instalação do Nginx
    sudo apt update && sudo apt install -y nginx
```

3. Configurar Servidor WEB

```bash
    # Criar diretório para os arquivos do app
    sudo mkdir -p /var/www/playout
```
```bash
    # Adicionar configuração do diretório no Nginx
    sudo sh -c 'echo "server {
        listen 80;
        server_name localhost;

        location / {
            root /var/www/playout;
            index index.html index.htm;
        }
    }" > /etc/nginx/sites-available/playout'
```
```bash
    # Criar link simbólico para habilitar o site
    sudo ln -s /etc/nginx/sites-available/playout /etc/nginx/sites-enabled/
```
```bash
    # Testar a configuração do Nginx
    sudo nginx -t
```
```bash
    # Reiniciar o serviço do Nginx para aplicar as alterações
    sudo systemctl restart nginx
```

