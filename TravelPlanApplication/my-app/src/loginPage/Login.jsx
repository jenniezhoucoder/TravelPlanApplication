import './Login.css';
import React from 'react';
import { useState, useEffect } from 'react';

function loadings(){
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve('setLoading'),1000);
      
    });
      return promise;
  }

function Login(value) {

    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        setIsLoading(true);
        loadings()
        .then( res => {
            console.log(res);
        })
        .finally( () => {
          setIsLoading(false);
    }); },
      [setIsLoading]
    );

    const [inputValue, setInputValue] = useState("");

    return (

     <div className='loading'>    
        <h1 className='login_heading'>JUNNI NOTION</h1>
        <img className='login_image' src='/image/loginimage.jpg' alt=''/>
        {
            isLoading && <div className='loading'>Loading...</div>
        }
        {!isLoading && <div>
            <div className='user_name'>
                <span>Username: </span>
                <input value = {inputValue} onInput={(err) => setInputValue(err.target.value)}/>
            </div>
            <div className='user_email'>
                <span>E-mail: </span>
                <input/>
            </div>
            <button className='login_button'
                onClick={ ()=> {
                value.changeStatus(true);
                value.updateInput(inputValue);
                setInputValue("");
                }}>Login</button>
            </div>
        }
    </div>
    )
}

export default Login;