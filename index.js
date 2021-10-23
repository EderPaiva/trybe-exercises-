const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors')


// Cors basicamente é nosso servidor!!!
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});
// Iniciando conexão!!
app.use(cors());

io.on('connection', (socket) => {
    // enviando pro front que usuario se conectou
    console.log('Alguém se conection');
    // Enviando a mensagem da desconexão lembre-se que nome da funçao é disconnect
    socket.on('disconnect', ()=>{
        console.log('Alguém se desconectou')
    })
    socket.on('mensagem',(msg)=> {
      io.emit('newConnection', {message: msg})
    })
    socket.emit('message',' Seja bem vindo ao chat!! Este back emitindo pro front!')

    socket.broadcast.emit('newConnection', {message:'Eba urro front alguém se conectou'})
})
// Rota get que faz a importação do html
app.get('/', (req, res) => {
 return  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});