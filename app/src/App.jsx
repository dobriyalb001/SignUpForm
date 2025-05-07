import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {

  
  
  const routes = (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    

    <Route path='/about' element={<ProtectedRoutes><About/></ProtectedRoutes>}> </Route>
      
     
    
    </Routes>
  )

  return (
    <>
     <NavigationBar/>
     {routes}
    
     
    </>
  )
}

export default App
