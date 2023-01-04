import { useState } from 'react';
import FirebaseImage from '../../images/firebase.png';
import ReactImage from '../../images/react.png';

import { Link } from 'react-router-dom';

import './Login.css'

// Biblioteca com o firebase hooks auth: https://github.com/csfrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045/auth

// Importando metodos necessários para o login
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';

export default () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email,senha);
    }

    function handleSignOut(e) {
        alert("saindo")
        e.preventDefault();
        signOut(auth);
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
            <button onClick={handleSignOut}>Out</button>
        );
      }

    return(
        <div className="login">
            <header>
                <div>
                    <img src={FirebaseImage} alt="firebase" />
                    <h2>Authentication</h2>
                </div>
                
                <p>Por favor , digite suas informações de login.</p>
            </header>

            <main>
                <div className='form'>
                    <label htmlFor='email'>E-mail</label>
                    <input type="text" name="email" id="email" value={email} placeholder="somebody@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor='senha'>Senha</label>
                    <input type="password" name='senha' id="senha" value={senha} placeholder="************" onChange={(e) => setSenha(e.target.value)} />

                    <a href='#'>Esqueceu sua senha ?</a>

                    <button className="button" onClick={handleSignIn}>Entrar</button>
                </div>
            </main> 

            <footer>
                <p>Você não tem uma conta ? <Link to="/register">Crie uma conta</Link></p>
            </footer>
        </div>
    )
}