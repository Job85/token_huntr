import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toolbar, Box } from '@mui/material';
import Nav from './components/Nav';
import Error from './components/Error';
import Landing from './pages/LandingPage';
import Register from './components/Register';
import Login from './components/Login.js';
import Home from './components/Home';
import LocationList from './components/LocationList';
// import LocationForm from './components/LocationForm';
import './App.css';


const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <Toolbar />
      <Box className={loginBox}>
        <Switch>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' render={(routerProps) => <wrappedComponents.AuthenticatedLogout protected {...routerProps} />} />
          <Route element={Error} />
        </Switch>
      </Box>
      <h1>
        Token Huntr
      </h1>
      <div>
        <Routes>



          <Route path='/locations' element={<LocationList
            user={user}
            authenticated={authenticated} />} />
          {/* <Route path='/locations/create' element={<LocationForm />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;


// import { CheckSession } from './services/Auth';
// import { useState, useEffect } from 'react';
// const [authenticated, toggleAuthenticated] = useState(false)
// const [user, setUser] = useState(null)

// const checkToken = async () => {
//   const user = await CheckSession();
//   setUser(user);
//   toggleAuthenticated(true);
// }

// const handleLogOut = () => {
//   setUser(null)
//   toggleAuthenticated(false)
//   localStorage.clear()
// }

// useEffect(() => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     checkToken()
//   }
// }, [])
