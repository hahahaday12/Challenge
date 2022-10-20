import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
//import LoinButton from './1Page/loginButton/index.js';
import TwoPage from './2Page';
import Onepage from './1Page';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Onepage/>} />
      <Route path="/twopage" element={<TwoPage/>} />
   

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
