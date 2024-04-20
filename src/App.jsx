import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'






Route

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<AboutUs/>} ></Route>
      </Routes>
      
    </>
  )
}

export default App
