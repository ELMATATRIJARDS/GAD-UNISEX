/**
 * @swagger
 * /formulario:
 *   get:
 *     description: Retorna el formulario HTML
 *     produces:
 *      - text/html
 *     responses:
 *       200:
 *         description: Formulario HTML
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
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
    /**
   *@swagger
   */process