import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import LocationForm from './components/LocationForm';
import Home from './components/Home';
import LocationList from './components/LocationList';
import './App.css';

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
          <Route path='/locations' element={<LocationList />} />
          <Route path='/locations/create' element={<LocationForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
