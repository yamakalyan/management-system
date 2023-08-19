import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from "./componants/Navbar/Navbar"
import Home from './componants/Home/Home'
import Footer from './componants/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
