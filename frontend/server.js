const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos de la carpeta "build"
app.use(express.static(path.join(__dirname, 'build')));

// Para cualquier ruta, cargar el archivo "index.html"
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configurar el puerto en el que quieres que la app se ejecute
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

