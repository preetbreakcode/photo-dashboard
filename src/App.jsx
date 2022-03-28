import React, { useState } from 'react';
import LoginPage from './containers/LoginPage'
import UserPortal from './containers/UserPortal'


const App = () => {

  const [auth, setAuth] = useState({ loggedIn: false })


  const logOut = () => {
    localStorage.clear();
    setAuth({ loggedIn: false });
  }

  if (auth.loggedIn === true) {
    return (<UserPortal logOut={logOut} />)
  }
  else return (
    <LoginPage setAuth={setAuth} />
  )


}




export default App;
