import * as http from 'http';      
import { WebSocketServer } from 'ws';

// Importação das funções que irão lidar com as requisições HTTP e as conexões WebSocket
import handleHttpRequest from './routs/routs.js'; // Lida com as requisições HTTP
import handleWebSocketConnection from './websocket/websocket.js'   // Lida com as conexões WebSocket

// Definição da porta do servidor. Se a variável de ambiente PORT estiver definida, usa ela, caso contrário, 
// usa a porta 8080.
const port = process.env.PORT || 8080;

// Criação do servidor HTTP, passando a função 'handleHttpRequest' para lidar com as requisições
const server = http.createServer(handleHttpRequest);

// Criação do servidor WebSocket, associando ele ao servidor HTTP criado acima
// O servidor WebSocket vai funcionar na mesma porta do servidor HTTP
const wss = new WebSocketServer({ server });

// Evento que será acionado toda vez que uma nova conexão WebSocket for estabelecida
wss.on('connection', handleWebSocketConnection);

// Inicia o servidor HTTP na porta definida acima e exibe uma mensagem no console indicando que o servidor foi iniciado
server.listen(port, () => {
    console.log(`Server Start ${port}`);
});