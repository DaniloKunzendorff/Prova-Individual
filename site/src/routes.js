import { Link } from "react-router-dom";

function routes(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/consultar'>Consultar</Link>
            <Link to='/cadastrar'>Cadastrar</Link>
        </div>
    )
}