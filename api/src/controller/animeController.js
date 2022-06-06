import { consultarTodos, addAnime } from "../repository/animeRepository.js"
import { Router } from "express"

const server = Router();

server.get('/anime', async (req, resp) => {
    try {
        const {anime} = req.params;
        const resposta = await consultarTodos(anime);
        if(!resposta)
        {throw new Error('ocorreu um erro!')}
        resp.status(200).send({
            resposta
        })
    } catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }}
)

server.post('/anime/adicionar', async (req, resp) => {
    try {
        const {anime} = req.body;
        const resposta = await addAnime(anime);
        if(resposta == undefined){throw new Error('Insira o nome do Anime!')}
        resp.status(200).send({
            resposta
        })
    } catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }
})



export default server;