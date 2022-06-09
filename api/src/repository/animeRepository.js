import { con } from "./connection.js";

export async function consultarTodos()
{
    const comando =
     `select id_anime id,
             nm_anime nome
        from tb_anime`;

    const [linhas]= await con.query(comando)
    return linhas;
    
}

export async function addAnime(anime)
{
    const comando= `insert into tb_anime(nm_anime)
                            values(?)
    `

    const [resposta]= await con.query(comando, [anime.nome])
    anime.id = resposta.insertId;
    return anime;
    
}
