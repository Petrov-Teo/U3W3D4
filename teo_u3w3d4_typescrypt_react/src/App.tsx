import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavbarT from "./componets/NavbarT"
import Home from "./componets/Home"

function App() {


  return (
    <>
      <BrowserRouter>
      <NavbarT/>
      <Routes>
        <Route  path="/" element={<Home  />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
