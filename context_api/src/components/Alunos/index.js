import Aluno from "../Aluno"

export default (props) => {
    return(
        <div>
            <h2>Alunos</h2>
            <Aluno name={props.name} setName={props.setName}/>
        </div>
    )
}