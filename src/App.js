import logo from './logo.svg';
import './App.css';
import Home1 from './rirprojectcomponents/Home1';
import Order from './rirprojectcomponents/Order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './rirprojectcomponents/Header';

function App() {
  return (
    <div className="App">
      
       
       
      
       <BrowserRouter>
        <Header/>
       <Routes>
       <Route path="/" element={<Home1/>}/>
       <Route path="/order" element={<Order/>}/>
       </Routes>
       </BrowserRouter>
   
    </div>
  );
}

export default App;
