// Função para lidar com requisições HTTP
const handleHttpRequest = (req, res) => {
    
    // Verifica se a URL requisitada é a raiz "/"
    if (req.url === '/') {
        // Configura o cabeçalho da resposta com status 200 (OK) e tipo de conteúdo "text/plain" com codificação UTF-8
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

        // Envia uma resposta simples informando que o servidor HTTP está ativo
        res.end('Servidor HTTP está funcionando!');
    } 
    
    // Verifica se a requisição é um GET para o endpoint "/doc"
    else if (req.method === 'GET' && req.url === '/doc') {
        // Retorna um status 404 (Não encontrado) com uma mensagem simples
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Doc exec');
    } 
    
    // Caso nenhuma das condições acima seja atendida, retorna um erro 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Serviço não encontrado');
    }
};

// Exporta a função para ser utilizada em outro arquivo
export default handleHttpRequest;
