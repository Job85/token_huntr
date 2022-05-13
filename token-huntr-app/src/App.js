// import React from 'react';
import React, { useEffect, useState } from 'react';
import { CheckSession } from './services/AuthServices';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Landing from './pages/LandingPage'
import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home'
import LocationList from './components/LocationList';
import LocationForm from './components/LocationForm';
import axios from 'axios';
import './App.css';


const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)

  // sets user state for authorized routes
  const [user, setUser] = useState(null)

  // sets userId state to create/update/delete locations
  const [userId, setId] = useState(null)

  console.log(process.env.NODE_ENV, 'Node Environment')

  const checkToken = async () => {
    const user = await CheckSession();
    console.log('hey', user)
    setUser(user);
    toggleAuthenticated(true);
    console.log(toggleAuthenticated)
  }

  const getUserId = async () => {
    const id = await axios.get()
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // console.log(token)
    if (token) {
      checkToken()
    }
    // console.log(user)
  }, [])

  // useEffect(() => {
  //   let id = await getId()
  //   console.log(id)
  //   setId(id.data)
  // })
  return (
    <div className="App">
      <header className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <h1>
        Token Huntr
      </h1>
      <div>
        {/* <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/locations' element={<LocationList />} />
          <Route path='/locations/create/:userId' element={<LocationForm />} />
        </Routes> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login
            // setId={userId}
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/locations' element={<LocationList
            user={user}
            authenticated={authenticated}
          />} />
          <Route path='/locations/create/:user_id' element={<LocationForm
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;