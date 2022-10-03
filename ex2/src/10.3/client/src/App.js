import './App.css';
import Mainpage from './_layer/layout.js'
//import Button from './Button/post.js';

import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Post from './pages/post';
import './pages/post.css';


function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Mainpage/>} />
        <Route path="/post" element={<Post />} />
       
    </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}
/*
  <BrowserRouter>
       <Routes>
      <Route path='/post' element={<Button/>}/>
      <Route index element={<Mainpage/>} />
      <Route path='/Home' element={<HomeButton/>}>
        
        </Route>
     </Routes>
      </BrowserRouter>
*/
export default App;
