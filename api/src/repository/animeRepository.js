import { con } from "./connection.js";

export async function consultarTodos()
{
    const comando= `select nm_anime
                      from tb_anime`

    const [linhas]= await con.query[comando]
    return linhas;
    
}

export async function addAnime(nome)
{
    const comando= `insert into tb_anime(nome)
                            values(?)
    `

    const [linhas]= await con.query[comando[nome]]
    return linhas;
    
}
