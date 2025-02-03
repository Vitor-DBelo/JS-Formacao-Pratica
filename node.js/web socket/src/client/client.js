const socket = new WebSocket('ws://usaUrl.com.br'); // Substitua pela URL correta

// Evento disparado quando a conexão for aberta
socket.onopen = () => {
    console.log('🔵 Conexão estabelecida');
    socket.send('Cliente conectado!');
};

// Evento disparado quando uma mensagem for recebida do servidor
socket.onmessage = (event) => {
    console.log('📩 Mensagem recebida do servidor:', event.data);
    

    if (event.data === 'ping') {
        console.log('⚡ Respondendo ao ping com pong...');
        socket.send('pong'); // Simulando resposta ao ping do servidor
    }
};

// Evento disparado quando a conexão for fechada
socket.onclose = () => {
    console.log('🔴 Conexão fechada com o servidor');
};

// Evento disparado em caso de erro
socket.onerror = (error) => {
    console.error('❌ Erro na conexão WebSocket:', error);
};

// Checando o estado da conexão periodicamente
setInterval(() => {
    console.log('🔍 Estado da conexão:', socket.readyState);
}, 5000);
