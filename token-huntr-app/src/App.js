import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Landing from './pages/LandingPage'
import Register from './pages/Register';
import Login from './pages/Login.js'
import Home from './components/Home'
import LocationList from './components/LocationList';
// import LocationForm from './components/LocationForm';
import './App.css';
import { CheckSession } from './services/Auth';
import { useState, useEffect } from 'react';

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

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
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='login' element={<Login
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated} />} />
          <Route path='/home' element={<Home />} />
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
