// Função para lidar com as conexões WebSocket dos clientes
const handleWebSocketConnection = (ws) =>{ 
    console.log('Novo cliente conectado.'); // Mensagem quando um novo cliente se conecta

    // Envia um ping para o cliente a cada 30 segundos para verificar se a conexão está viva
    setInterval(() => {
        if (ws.readyState === ws.OPEN) {
            console.log('Enviando ping...');
            ws.ping();  // Envia um ping para o cliente
        }
    }, 30000);  // Envia o ping a cada 30 segundos

    // Evento message quando o servidor recebe uma mensagem do cliente
    ws.on('message', (message) => {
        console.log('Mensagem recebida:', message.toString());
        ws.send('Servidor recebeu: ' + message);  // Envia uma resposta de volta para o cliente
    });

    // Evento disparado quando o servidor recebe um pong do cliente
    ws.on('pong', () => {
        console.log('Pong recebido do cliente.');
    });

    // Evento close quando a conexão WebSocket é fechada (desconexão do cliente)
    ws.on('close', () => {
        console.log('Cliente desconectado.');
    });
    
    // Evento error em caso de erro na conexão WebSocket
    ws.on('error', (err) => {
        console.error('Erro no WebSocket:', err); // Exibe o erro ocorrido no console
    });

    
};
console.log('Servidor WebSocket rodando na porta', process.env.PORT);

export default handleWebSocketConnection;