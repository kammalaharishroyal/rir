import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HomeBody from './components/HomeBody';
import HomeHeaderLayout from './components/HomeHeaderLayout';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Register from './components/Register';
import Contact from './components/Contact';
import Login from './components/Login';
function App() {
  const route=createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<HomeHeaderLayout/>}>
      <Route index element={<HomeBody/>}/>
      <Route path='orders' element={<Orders/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='contact' element={<Contact/>}/>




    </Route>


  ))
  return (
    <RouterProvider router={route}/>
    
  );
}

export default App;
