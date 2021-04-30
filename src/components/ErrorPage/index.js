import React from 'react'
import Batman from '../../images/batman.png'; 

const ErrorPage = () => {

    const centerH2 = {
        textAlign: 'center', 
        marginTop: '50px'
    }
    const centerImg = {
        display: 'block', 
        margin: '40px'
    }
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2} >Oupps, cette page n'existe pas</h2>
                <img style={centerImg} src={Batman} alt="error_page" />
            </div>
        </div>
    )
}

export default ErrorPage;
