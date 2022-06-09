import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import anime from './controller/animeController.js'

const server = express();
server.use(cors());
server.use(express.json());

//Endpoits Config
server.use(anime);




server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))
