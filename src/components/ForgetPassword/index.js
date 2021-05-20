import React, {useState, useContext} from 'react'; 
import {Link} from 'react-router-dom'; 
import {FirebaseContext} from '../Firebase'; 

const ForgetPassword = (props) => {

    const firebase = useContext(FirebaseContext); 
    
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null); 
    const [error, setError] = useState(null); 

    const handleSubmit = (e) => {
        e.preventDefault(); 

        firebase.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess('Consulter votre adresse email');
            setEmail(''); 
            setTimeout(() => {
                props.history.push('/login')
            }, 5000)
        })
        .catch((error) => {
            setError(error); 
            setEmail(''); 
        })
    }


    const disable = email === ""; 

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
            <div className="formBoxLeftForget">

            </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        
                        {
                            success && <span style={{
                                border: "1px solid green", 
                                background: "green", 
                                coor: "#ffffff"
                            }} >
                                {success}</span>
                        } 
                        {
                            error && <span>{error.message}</span>
                        }
                        <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="inputBox">
                                <input type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <button disabled={disable}>Confirm</button>
                        </form>

                        <div className="linkContainer">
                            <Link  className="simpleLink" to="/login">Inscrivez-vous ici</Link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ForgetPassword;
