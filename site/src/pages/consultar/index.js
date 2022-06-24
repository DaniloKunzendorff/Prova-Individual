import {consultar} from '../../api/animeApi.js';
import { useEffect, useState } from 'react';
import './index.scss';


export default function Index() {
    const [anime, setAnime] = useState([]);
    
    async function carregarAnimes() {
        const a = await consultar();
        setAnime(a);
    }

    useEffect(() => {
        carregarAnimes();
    }, [])
  
    return(
        <main className="consultar">
            <div>
                Consultar
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {anime.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>)}
                </tbody>
            </table>
            
            <a href="/">Home</a>

        </main>
    )
}