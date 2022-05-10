import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import './App.css';
import LocationForm from './components/LocationForm';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <h1>
        Token Huntr
      </h1>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations' element={<LocationForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
