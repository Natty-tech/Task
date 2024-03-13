import { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Personal from "./Pages/Personal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Personal" element={<Personal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
