import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'




Route

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
      
    </>
  )
}

export default App
