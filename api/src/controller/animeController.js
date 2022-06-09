import { consultarTodos, addAnime } from "../repository/animeRepository.js"
import { Router } from "express"

const server = Router();

server.get('/anime', async (req, resp) => {
    try {
        const resposta = await consultarTodos();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }}
)

server.post('/anime/add', async (req, resp) => {
    try {
        const novoAnime = req.body;
        const resposta = await addAnime(novoAnime);
        if(resposta == undefined){throw new Error('Insira o nome do Anime!')}
        resp.status(200).send(resposta)
    } catch (err) {
        resp.status(401).send({
            Erro: err.message
        })
    }
})



export default server;