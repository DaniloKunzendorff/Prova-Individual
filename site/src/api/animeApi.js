import axios from 'axios'
const api = axios.create({baseURL:'http://localhost:5000'})

export async function consultar() {
    const a = await api.get('/anime')
    return a.data;
}

export async function cadastrar(nome) {
    const a = await api.post('/anime/add', {
        nome : nome
    })
    return a.data;
}