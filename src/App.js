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
          <Route path='/' element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/single' element={<Single/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
