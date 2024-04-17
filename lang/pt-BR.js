export default {
    ok: 'Ok',
    cancel: 'Cancelar',
    alert: {
        wrongLogin: 'Dados de login incorretos!',
    },
    button: {
        login: 'Login',
        home: 'Início',
        player: 'Playout',
        media: 'Media',
        message: 'Mensagem',
        logging: 'Logging',
        channels: 'Canais',
        configure: 'Configurar',
        logout: 'Sair',
    },
    error: {
        notFound: 'Página não encontrada',
        serverError: 'Erro do servidor interno',
    },
    input: {
        username: 'Usuário',
        password: 'Senha',
    },
    system: {
        cpu: 'Processador',
        cores: 'Núcleos',
        load: 'Carregamento',
        memory: 'Memoria',
        swap: 'Memória virtual',
        total: 'Total',
        usage: 'Uso',
        network: 'Internet',
        in: 'Entrada',
        out: 'Saida',
        storage: 'Armazenamento',
        device: 'Dispositivo',
        size: 'Tamanho total',
        used: 'Disponível',
    },
    control: {
        noClip: 'Nenhum clipe está sendo reproduzido',
        ingest: 'Ingestão ao vivo',
        start: 'Iniciar playout',
        last: 'Ir para o clipe anterior',
        stop: 'Parar o serviço do playout',
        reset: 'Redefinir estado do playout',
        restart: 'Reiniciar playout',
        next: 'Ir para o próximo clipe',
    },
    player: {
        start: 'Reproduzir',
        file: 'Arquivo',
        play: 'Iniciar',
        duration: 'Duração',
        in: 'Entrada',
        out: 'Saida',
        ad: 'Ad',
        edit: 'Editar',
        delete: 'Deletar',
        copy: 'Copiar playlist',
        loop: 'Loop dos clipes na lista de reprodução',
        remote: 'Adicionar fonte (remota) à lista de reprodução',
        import: 'Importar arquivo de texto/.m3u8',
        generate: 'Gerador de playlist simples e avançado',
        reset: 'Resetar lista de reprodução',
        save: 'Salvar lista de reprodução',
        deletePlaylist: 'Deletar lista de reprodução',
        unsavedProgram: 'Existe um programa que não está salvo!',
    },
    media: {
        notExists: 'Armazenamento não existe!',
        create: 'Criar pasta',
        upload: 'Fazer upload de arquivos',
        deleteTitle: 'Excluir arquivo/pasta',
        deleteQuestion: 'Tem certeza que deseja excluir?',
        preview: 'Visualização',
        rename: 'Renomear arquivo',
        newFile: 'Novo nome de arquivo',
        createFolder: 'Criar pasta',
        foldername: 'Nome da pasta',
        current: 'Atual',
        overall: 'Total',
        uploading: 'Enviando',
        moveError: 'Erro ao mover',
        deleteError: 'Erro ao excluir!',
        folderExists: 'A pasta já existe',
        folderCreate: 'Criação da pasta concluída...',
        folderError: 'Erro ao criar pasta',
        uploadError: 'Erro ao carregar',
        fileExists: 'O arquivo já existe!',
    },
    message: {
        savePreset: 'Salvar predefinição',
        newPreset: 'Nova predefinição',
        delPreset: 'Excluir predefinição',
        delText: 'Tem certeza de que deseja excluir a predefinição?',
        placeholder: 'Mensagem',
        xAxis: 'Eixo X',
        yAxis: 'Eixo Y',
        showBox: 'Mostrar caixa',
        boxColor: 'Cor da caixa',
        boxAlpha: 'Caixa Alfa',
        size: 'Tamanho',
        spacing: 'Espaçamento',
        overallAlpha: 'Alfa geral',
        fontColor: 'Cor da fonte',
        fontAlpha: 'Fonte Alfa',
        borderWidth: 'Largura da borda',
        send: 'Enviar',
        name: 'Nome',
    },
    config: {
        channel: 'Canal',
        user: 'Usuário',
        channelConf: 'Configuração do canal',
        addChannel: 'Adicionar novo canal',
        name: 'Nome',
        previewUrl: 'URL de visualização',
        configPath: 'Caminho de configuração',
        extensions: 'Extensões extras',
        service: 'Serviço',
        save: 'Salvar',
        delete: 'Deletar',
        updateChannelSuccess: 'Atualização da configuração do canal com sucesso!',
        updateChannelFailed: 'Falha na atualização da configuração do canal!',
        errorChannelDelete: 'O primeiro canal não pode ser excluído!',
        deleteChannelSuccess: 'Excluir configuração da GUI com sucesso!',
        deleteChannelFailed: 'Falha ao excluir configuração da GUI!',
        playoutConf: 'Configuração do playout',
        general: 'Geral',
        rpcServer: 'RPC Server',
        mail: 'Email',
        logging: 'Logging',
        processing: 'Processamento',
        ingest: 'Ingerir',
        playlist: 'Playlist',
        storage: 'Armazenamento',
        text: 'Texto',
        task: 'Tarefa',
        out: 'Saida',
        placeholderPass: 'Senha',
        help: 'Ajuda',
        generalText: `Às vezes pode acontecer que um arquivo esteja corrompido, mas ainda possa ser reproduzido, o que pode causar um erro de streaming em todos os arquivos seguintes. A única maneira de corrigir isso é parar e reiniciar o ffplayout. Aqui só dizemos quando parar, o processo de início é com você. A melhor maneira é um serviço systemd no Linux.
        'stop_threshold' irá parar o ffplayout se for assíncrono no tempo acima deste valor. Um número menor que 3 pode causar erros inesperados.`,
        rpcText: 'Execute um servidor JSON RPC para obter informações sobre o que está sendo reproduzido e para algumas funções de controle.',
        mailText: `Enviar mensagens de erro para o endereço de e-mail, como lista de reprodução ausente; formato JSON inválido; faltando caminho do clipe. Deixe o destinatário em branco se não precisar dele. 'mail_level' pode ser INFO, WARNING ou ERROR. 'intervalo' significa segundos até que um novo e-mail seja enviado.`,
        logText: `Se 'log_to_file' for verdadeiro, registre no arquivo; se for falso, registre no console. 'backup_count' indica por quanto tempo os arquivos de log serão salvos em dias. 'local_time' para false definirá os carimbos de data e hora do log para UTC. Caminho para /var/log/ somente se você estiver executando como um daemon.
        'nível' pode ser DEBUG, INFO, WARNING, ERROR. 'ffmpeg_level' pode ser INFO, AVISO, ERRO. 'detect_silence' registra uma mensagem de erro se a linha de áudio ficar em silêncio por 15 segundos durante o processo de validação.`,
        processingText: `Processamento padrão para todos os clipes para torná-los únicos. O modo pode ser Playlist ou Pasta. 'aspecto' deve ser um número flutuante. 'logotipo' só é usado se o caminho existir.
        'logo_scale' dimensiona o logotipo para o tamanho desejado, deixe em branco se nenhum dimensionamento for necessário, o formato é 'largura:altura', por exemplo '100:-1' para dimensionamento proporcional. Com 'logo_opacity' você pode tornar o logotipo transparente.
        Com 'audio_tracks' é possível configurar quantas faixas de áudio devem ser processadas. 'audio_channels' pode ser usado se o áudio tiver mais canais do que apenas estéreo. Com 'logo_position' no formato 'x:y' você define a posição do logotipo. Com 'custom_filter' é possível aplicar filtros adicionais. As saídas do filtro devem terminar com [c_v_out] para filtros de vídeo e [c_a_out] para filtros de áudio.`,
        ingestText: `Execute um servidor para um fluxo de ingestão. Este fluxo substituirá o streaming normal até que seja concluído. Existe apenas um mecanismo de autenticação muito simples para verificar se o nome do stream está correto. 'custom_filter' pode ser usado da mesma forma que na seção de processo.`,
        playlistText: `'path' pode ser um caminho para um único arquivo ou diretório. Para diretório especifique apenas a pasta raiz, por exemplo '/playlists', os subdiretórios serão lidos pelo programa. Os subdiretórios precisam desta estrutura '/playlists/2018/01'.
        'day_start' é o horário em que a playlist deve começar, deixe 'day_start' vazio se a playlist deve sempre começar do início. 'length' representa a duração alvo da lista de reprodução; se estiver vazio, a duração real não será considerada. 'infinit: true' funciona com um único arquivo de lista de reprodução e faz um loop infinito.`,
        storageText: `Reproduza arquivos ordenados ou aleatórios do caminho. 'filler_clip' serve para preencher o final até chegar a 24 horas, ele fará um loop quando necessário. Defina 'extensões' para pesquisar apenas arquivos com essa extensão. Defina 'shuffle' como 'true' para selecionar arquivos aleatoriamente.`,
        textText: `Sobreponha texto em combinação com libzmq para manipulação remota de texto. No Windows, o caminho do arquivo da fonte deve ser 'C\\:/WINDOWS/fonts/DejaVuSans.ttf'. 'text_from_filename' ativa a extração de texto de um nome de arquivo. Com 'style' você pode definir os parâmetros do drawtext como posição, cor, etc. Postar texto via API irá substituir isso. Com 'regex' você pode formatar o nome do arquivo para obter um título.`,
        taskText: `Execute um programa externo com um determinado objeto de mídia. O objeto de mídia está no formato JSON e contém todas as informações sobre o clipe atual. O programa externo pode ser um script ou um binário. ou um binário, mas deve ser executado apenas por um curto período de tempo.`,
        outText: `A compactação de playout final. Ajuste as configurações de acordo com suas necessidades. 'mode' possui as opções 'desktop', 'hls', 'null', 'stream'. Use 'stream' e ajuste as configurações de 'output_param:' se desejar transmitir para um servidor rtmp/rtsp/srt/.... Na produção, não sirva playlist hls com ffpapi, use nginx ou outro servidor web!`,
        restartTile: 'Reiniciar playout',
        restartText: 'Reiniciar o ffplayout para aplicar as alterações?',
    },
    user: {
        title: 'Configuração do usuário',
        add: 'Adicionar usuário',
        delete: 'Excluir',
        name: 'Nome de usuário',
        mail: 'Email',
        password: 'Senha',
        newPass: 'Nova senha',
        confirmPass: 'Confirmar senha',
        save: 'Salvar',
        admin: 'Admin',
        deleteNotPossible: 'Excluir usuário atual não é possível!',
        deleteSuccess: 'Excluir usuário concluído!',
        deleteError: 'Erro ao excluir usuário',
        addSuccess: 'Usuário adicionado com sucesso!',
        addFailed: 'Falha ao adicionar usuário!',
        mismatch: 'Senha incorreta!',
        updateSuccess: 'Atualização do perfil do usuário com sucesso!',
        updateFailed: 'Falha na atualização do perfil do usuário!',
    },
}
