import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Category from './components/Category';
import Single from './components/Single';
import Notfound from './components/Notfound';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      <Category/>
      <Single/>
      <Notfound/>
    </>
  );
}

export default App;
