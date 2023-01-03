import ReactImage from '../../images/react.png'
import FirebaseImage from '../../images/firebase.png'
import './Footer-Style.css'

export default () => {
    return(
        <footer>
            <p>Created using 
                <img src={ReactImage} alt="react" />
                e
                <img src={FirebaseImage} alt="react" />
            </p>
        </footer>
    )
}