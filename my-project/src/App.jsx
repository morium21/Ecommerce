import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from'./pages/Home'
import Shop from'./pages/Shop'
import React from 'react';

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut />}>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Route>
  ));

  function App() {
    return <RouterProvider router={router} />;
}

export default App;
