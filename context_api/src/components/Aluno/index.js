import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export default () => {
    const { name , setName } = useContext(UserContext);

    return(
        <div>
            <h2>Bem vindo , {name}</h2>
            <button onClick={() => setName("toin")}>Change</button>
        </div>
    )
}