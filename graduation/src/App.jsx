import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import ProdDetails from './Components/Proddetails/prodDetails';
import { useState } from 'react';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
function App() {
  const [cart , setCart] = useState(0);
  const routes = createBrowserRouter([
    {path: '/' ,element :<Layout cart={cart} />,children :[
      {index : true ,element :<Home/>},
      { path: 'product/:id', element: <ProdDetails setCart={setCart} cart = {cart} /> },
      {path:'SignIn' , element:<SignIn />},
      {path:'SignUp' , element:<SignUp />},
      {path: '*' , element:<Notfound></Notfound>}
    ]}
  ])
  return (
    <>
    <RouterProvider router = {routes} />
    </>
  )
}

export default App

