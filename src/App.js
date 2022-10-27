import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Category from './components/Category';
import Single from './components/Single';
import Notfound from './components/Notfound';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/react-api' element={<Home/>}/>
            <Route path='/react-api/:category' element={<Category/>}/>
            <Route path='/react-api/:category/:id' element={<Single/>}/>
            <Route path='*' element={<Notfound/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
