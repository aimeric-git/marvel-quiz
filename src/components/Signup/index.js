import React, {useState, useContext} from 'react'
import {FirebaseContext} from '../Firebase';
import {Link} from 'react-router-dom'; 

const Signup = (props) => {

    const firebase = useContext(FirebaseContext); 

    const data = {
        pseudo: '', email: '', password: '', confirmPassword: ''
    };
    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }
    const {pseudo, email, password, confirmPassword} = loginData;

    const displayBtn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? (<button disabled >Inscription</button>) : (<button >Inscription</button>);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const {email, password} = loginData;
        
        firebase.signupUser(email, password)
        .then(user => {
            //effacer les champs
            setLoginData({...data});
            
            //rediriger l utilisateur
            props.history.push("/welcome");
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }
    const errorMsg = error !== '' && <span>{error.message}</span>
    
    return (
        <div className="signUpLoginBox">    
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        
                        {errorMsg}

                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input type="text"
                                    id="pseudo"
                                    onChange={handleChange}
                                    value={pseudo} />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input type="email"
                                    id="email"
                                    onChange={handleChange}
                                    value={email} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input type="password"
                                    id="password"
                                    onChange={handleChange}
                                    value={password} />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input type="password"
                                    id="confirmPassword"
                                    onChange={handleChange}
                                    value={confirmPassword} />
                                <label htmlFor="confirmPassword">Confirm</label>
                            </div>
                            {displayBtn}
                        </form>

                        <div className="linkContainer">
                            <Link  className="simpleLink" to="/login">Déjà inscrit? Connectez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
