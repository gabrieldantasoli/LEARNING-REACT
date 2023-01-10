

export default (props) => {
    props.setName("Gabriel ta mudado")
    return(
        <div>
            <h2>Bem vindo , {props.name}</h2>
            
        </div>
    )
}