import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import Aboutus from './Components/Pages/Aboutus';
import Contact from './Components/Pages/Contact';
import Dashboard from './Components/Pages/Dashboard';



function App() {
  return (
   
      <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path="/" element ={<Home />}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path="/signup" element ={<Signup />}></Route>
         <Route path='/home' element={<Home/>}></Route>
         <Route path="/contact" element ={<Contact />}></Route>
         <Route path='/about' element={<Aboutus/>}></Route>
         <Route path='/Dashboard' element={<Dashboard/>}></Route>
     
         </Routes>
   </BrowserRouter>

      </div>
    
  );
}

export default App;