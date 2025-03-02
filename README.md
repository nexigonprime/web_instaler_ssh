# Web Installer - Instalador de Aplicações Linux via Web

## 📋 Descrição
Web Installer é uma interface web intuitiva para instalação e gerenciamento de aplicações em servidores Linux. A aplicação permite conectar-se a servidores via SSH e instalar diversos pacotes e serviços com apenas alguns cliques.

## 🚀 Funcionalidades Detalhadas

### 🔌 Conexão SSH
- Formulário de conexão com campos para:
  - Endereço do servidor
  - Porta SSH (padrão: 22)
  - Nome de usuário
  - Senha
- Terminal web integrado para execução de comandos
- Feedback visual do status da conexão

### 📦 Catálogo de Aplicações
Organizadas em categorias para fácil navegação:

#### 🌐 Servidores Web
- **Nginx**: Servidor web de alto desempenho
- **Apache**: Servidor web mais popular do mundo
- **Node.js**: Runtime JavaScript para backend
- **Lighttpd**: Servidor web leve e rápido

#### 💾 Bancos de Dados
- **MySQL**: Sistema de gerenciamento de banco de dados relacional
- **PostgreSQL**: Banco de dados objeto-relacional avançado
- **MongoDB**: Banco de dados NoSQL
- **Redis**: Armazenamento de estrutura de dados em memória
- **CouchDB**: Banco de dados orientado a documentos
- **Cassandra**: Banco de dados distribuído

#### 🔒 Segurança
- **PiVPN**: 
  - Instalador simplificado de VPN
  - Suporte para OpenVPN e WireGuard
  - Geração automática de certificados
  - Gerenciamento fácil de usuários
  - Compatível com todos os dispositivos
  - **Aviso**: Recomendado executar comandos diretamente no terminal do servidor

- **UFW**: Firewall simplificado
- **Fail2ban**: Proteção contra tentativas de invasão

#### 📊 Monitoramento
- **Grafana**: Visualização de métricas
- **Prometheus**: Sistema de monitoramento e alerta
- **Netdata**: Monitoramento em tempo real
- **Zabbix**: Monitoramento enterprise

#### 🐳 Containers e Orquestração
- **Docker**: Plataforma de containerização
- **Docker Compose**: Orquestração de containers
- **Kubernetes**: Sistema de orquestração em larga escala

### 🖥️ Interface do Usuário
- Design responsivo e intuitivo
- Modal de detalhes para cada aplicação mostrando:
  - Ícone e nome
  - Descrição detalhada
  - Recursos principais
  - Requisitos do sistema
  - Comandos de instalação
- Botão "Copiar Comando" para fácil execução
- Terminal web integrado para execução de comandos

### ⚙️ Funcionalidades do Terminal
- Emulador de terminal completo
- Suporte a cores e formatação
- Histórico de comandos
- Auto-scroll
- Feedback em tempo real

## 💻 Pré-requisitos
- Node.js (v12 ou superior)
- Navegador web moderno
- Servidor Linux com acesso SSH
- Conexão com internet

## 🔧 Instalação e Configuração

### Instalação Local

1. Baixe o repositório:
```bash
curl -O https://file.gamerdesk.xyz/wil/webinstalerv1.zip
cd web-installer
```

ou

[download](https://github.com/nexigonprime/web_instaler_ssh/releases/tag/webinstaler)

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
node index.js
```

4. Acesse a aplicação: 
```bash
http://localhost:3000
```