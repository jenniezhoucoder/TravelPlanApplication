import {useState} from 'react';
import './App.css';
import Login from './loginPage/Login.jsx';
import Logout from './loginPage/Logout.jsx';
import Home from './homePage/Home.jsx';

import {
  fetchLogin,
  fetchLogout,
} from './services';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  return (

    <div className="app">

      {isLogin &&  <div className='home_page'>
        <p className='welcome'>Welcome, {username}</p>
          <div className='logout'>
            <Logout
             changeStatus = {status => {
              setIsLogin(status);
              fetchLogout()
              .then(console.log("user logout"))
              .catch(err => {
                console.log(err);
              })
            }}
            />
        </div>

      <Home/>
    </div>
    }
    
    {!isLogin && <div className='login_page'>
          <Login
            updateInput = {username => {
              setUsername(username);
              fetchLogin(username)
              .then(console.log('username', username))
              .catch(err => {
                console.log(err);
              })
            }}

            changeStatus = {isLogin => setIsLogin(isLogin)}
            />          
            </div>}
    </div>
  );
}

export default App;