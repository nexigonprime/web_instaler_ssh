const express = require('express');
const path = require('path');
const Client = require('ssh2').Client;
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Configurar o Express para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Armazenar conexões SSH ativas
const activeConnections = new Map();

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para conectar via SSH
app.post('/connect-ssh', (req, res) => {
    const { host, port, username, password } = req.body;
    const conn = new Client();
    
    // Gerar um ID único para a conexão
    const connectionId = Date.now().toString();

    conn.on('ready', () => {
        console.log('Cliente SSH conectado!');
        activeConnections.set(connectionId, conn);
        res.json({ 
            success: true, 
            connectionId,
            message: 'Conexão SSH estabelecida com sucesso!'
        });
    }).on('error', (err) => {
        console.error('Erro na conexão SSH:', err);
        res.json({ 
            success: false, 
            error: `Erro na conexão: ${err.message}`
        });
    }).connect({
        host,
        port: parseInt(port),
        username,
        password,
        readyTimeout: 5000,
        keepaliveInterval: 10000
    });
});

// Rota para executar comandos
app.post('/execute-command', (req, res) => {
    const { command, connectionId } = req.body;
    const conn = activeConnections.get(connectionId);

    if (!conn) {
        return res.json({ 
            success: false, 
            error: 'Conexão SSH não encontrada. Por favor, conecte-se novamente.' 
        });
    }

    conn.exec(command, (err, stream) => {
        if (err) {
            return res.json({ 
                success: false, 
                error: `Erro ao executar comando: ${err.message}` 
            });
        }

        let output = '';
        let errorOutput = '';

        stream.on('data', (data) => {
            output += data.toString();
        }).stderr.on('data', (data) => {
            errorOutput += data.toString();
        }).on('close', () => {
            res.json({ 
                success: true, 
                output: output,
                error: errorOutput
            });
        });
    });
});

// Rota para desconectar
app.post('/disconnect-ssh', (req, res) => {
    const { connectionId } = req.body;
    const conn = activeConnections.get(connectionId);

    if (conn) {
        conn.end();
        activeConnections.delete(connectionId);
        res.json({ success: true, message: 'Desconectado com sucesso.' });
    } else {
        res.json({ success: false, error: 'Conexão não encontrada.' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 