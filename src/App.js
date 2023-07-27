import './App.css';
import Containt from './components/Layout/Containt';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Connect from './pages/Connect';
import Errorpage from './pages/Errorpage';

function App() {
  return (
    <div >
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/contact' element={<Connect/>} />
          <Route path='/*' element={<Errorpage/>} />
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
