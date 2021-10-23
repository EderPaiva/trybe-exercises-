const express = require('express');
const app = express();
const http = require('http').createServer(app);


// Rota get que faz a importação do html
app.get('/', (req, res) => {
 return  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});