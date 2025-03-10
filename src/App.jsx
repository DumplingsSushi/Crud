import React from "react";
import Box from "./Component/Box";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Add from "./Component/Add";
import Update from "./Component/Update"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Box/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/Update/:id" element={<Update/>}></Route>
          {/* <Route path="/update" element={<Update/>}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}