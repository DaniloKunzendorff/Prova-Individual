import { con } from "./connection.js";

export async function consultarTodos()
{
    const comando= `select id_anime  id,
                           nm_anime nome
                      from tb_anime`

    const [linhas]= await con.query[comando]
    return linhas;
    
}

export async function addAnime(nome)
{
    const comando= `insert into tb_anime(nome.anime)
                    values(?)
    `

    const [linhas]= await con.query[comando[nome.anime]]
    return linhas;
    
}
