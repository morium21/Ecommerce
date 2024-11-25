import React from 'react'
import TopBar from './Components/Topbar'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

const RootLayOut = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Outlet/>
   
    </>
    
  );
};

export default RootLayOut;