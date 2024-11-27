import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";
import OrderPage from "./pages/order.jsx";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>     
  )
}
export default App;