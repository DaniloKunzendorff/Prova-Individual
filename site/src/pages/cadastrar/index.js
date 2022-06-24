import { cadastrar } from "../../api/animeApi.js";
import { useState } from "react";


export default function Index() {
    const [nome, setNome] = useState('');



    async function cadastrarAnime() {
        try{
            const a = await cadastrar(nome);
            setNome(a);
            alert('sucesso')
        }
        catch(err){
            alert(err.message)
        }
    }


    return(
        <main>
            <div>
                Cadastrar
            </div>

            <div>
                Nome do anime:
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                <button onClick={cadastrarAnime}>Adicionar</button>
            </div>

            <a href="/">Home</a>
        </main>
    )
}