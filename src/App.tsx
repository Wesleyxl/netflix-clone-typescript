import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { GlobalStyles } from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
