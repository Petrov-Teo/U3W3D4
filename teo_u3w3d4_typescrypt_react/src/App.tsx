import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarT from "./componets/NavbarT";

import HomeDef from "./componets/HomeDef";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarT />
        <Routes>
          <Route path="/" element={<HomeDef />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
