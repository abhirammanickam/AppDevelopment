import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route exact path='/' element={<Login/>}/>
           <Route path = '/register' element={<Register/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
