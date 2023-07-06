const express = require('express');
const app = express();

// Endpoint GET para el formulario
app.get('/formulario', (req, res) => {
  // Retorna el formulario HTML
    res.send(`
    <form method="POST" action="/procesar">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>
        <br>
        <input type="submit" value="Enviar">
    </form>
    `);
});

// Endpoint POST para procesar los datos del formulario
app.post('/procesar', (req, res) => {
    const { nombre, email } = req.body;
  // Hacer algo con los datos del formulario
    res.send('Los datos del formulario son: Nombre: ${nombre}, Email: ${email}');
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000...'));
