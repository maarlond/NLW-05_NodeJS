import express from "express";

const app = express(); // adicionando o servidor

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Excluir
 * PATCH = Alterar uma informação especifica
 */

app.get("/", (request, response) => {
    //return response.send("Olá NLW 05!");
    return response.json({
        message: "Olá NLW 05!",
        
    });

});

app.post("/", (request, response) => {
    return response.json({message: "Usuário salvo com sucesso!"})
});
app.listen(3333, () => console.log("Server is running on port 3333!"));