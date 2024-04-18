const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'challenge.html'));
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    const respuesta = {
        mensaje: '¡Hola desde Express!',
        fecha: new Date(),
        datos: [1, 2, 3, 4, 5]
      };
      const saludo = "Hola"
res.send(saludo)    
});
// app.get('/idk', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index1.html'));
// });
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});
