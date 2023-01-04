import { useState } from 'react';
import FirebaseImage from '../../images/firebase.png';
import ReactImage from '../../images/react.png';

//npm install firebase
//npm install --save react-firebase-hooks

// Importando metodos necessários para o cadastro
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/firebaseConfig';

import './Register.css'

export default () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignUpUser(e) {
        alert("ok")
        e.preventDefault();
        createUserWithEmailAndPassword(email, senha);
    }

    if (error) {
        return (
            <div>
            <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.user.email}</p>
            </div>
        );
    }

    return(
        <div className="login">
            <header>
                <div>
                    <img src={FirebaseImage} alt="firebase" />
                    <h2>Authentication</h2>
                </div>
                
                <p>Por favor , digite suas informações para o cadastro.</p>
            </header>

            <main>
                <div className='form'>
                    <label htmlFor='email'>E-mail</label>
                    <input type="text" name="email" id="email" value={email} placeholder="somebody@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor='senha'>Senha</label>
                    <input type="password" name='senha' id="senha" value={senha} placeholder="************" onChange={(e) => setSenha(e.target.value)} />

                    <button onClick={handleSignUpUser} className="button" >Sign Up</button>
                </div>
            </main> 

            <footer>
                <p>Você já tem uma conta ? <a href="#">Acesse sua conta aqui</a></p>
            </footer>
        </div>
    )
}