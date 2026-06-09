module.exports = (app) => {
     /**
     * @swagger
     * /api/users:
     *   get:
     *     summary: Lista usuários
     *     responses:
     *       200:
     *         description: Sucesso
     */  
    app.get("/api/users", (req, res) => {
        app.src.controllers.api.getAll(app, req, res);
    });

      /**
     * @swagger
     * /api/users:
     *   post:
 *     summary: Cria um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - nome
 *               - email
 *     responses:
 *       201:
 *         description: Usuário criado
     */  

    app.post("/api/users", (req, res) => {
        app.src.controllers.api.create(app, req, res);
    })
}

