# Clonar o repositório hubcloud-playout na branch master para /var/www/playout
sudo git clone -b master https://github.com/imaginatech/hubcloud-playout.git /var/www/playout

# Entrar no diretório clonado
cd /var/www/playout

# Instalar dependências do projeto
npm install

# Iniciar o aplicativo em modo de desenvolvimento
npm run dev &

# Criar serviço para reiniciar o aplicativo automaticamente
sudo sh -c 'echo "[Unit]
Description=Hubcloud Playout Service
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/playout
ExecStart=/usr/bin/npm run dev
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=hubcloud-playout

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/hubcloud.service'

# Recarregar serviços systemd
sudo systemctl daemon-reload

# Habilitar o serviço hubcloud
sudo systemctl enable hubcloud

# Baixar o arquivo ffplayout deb e armazená-lo no diretório /tmp
wget -P /tmp https://github.com/ffplayout/ffplayout/releases/download/v0.24.4/ffplayout_v0.24.4-1_amd64.deb

# Instalar o ffplayout usando o dpkg
sudo apt install /tmp/ffplayout_v0.24.4-1_amd64.deb

# Instalar o ffmpeg
sudo apt install -y ffmpeg

# Habilitar o serviço ffplayout
sudo systemctl enable ffplayout

# Iniciar o serviço ffplayout
sudo systemctl enable --now ffpapi

# Instalação do NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Atualização do Node.js e npm para a versão mais recente
nvm install node --latest-npm

# Instalação do Nginx
sudo apt update && sudo apt install -y nginx

# Configuração do Servidor WEB

# Criar diretório para os arquivos do app
sudo mkdir -p /var/www/playout

# Adicionar configuração do diretório no Nginx
sudo sh -c 'echo "server {
    listen 80;
    server_name hubtv.hubwatch.online;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}" > /etc/nginx/sites-available/playout'

# Criar link simbólico para habilitar o site
sudo ln -s /etc/nginx/sites-available/playout /etc/nginx/sites-enabled/

# Testar a configuração do Nginx
sudo nginx -t

# Reiniciar o serviço do Nginx para aplicar as alterações
sudo systemctl restart nginx
