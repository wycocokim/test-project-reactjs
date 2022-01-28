import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Brands from "./components/Brands";
import PaymentPage from "./components/pages/PaymentPage";

function App() {
  return (
    <div className="App">
      {/* <Button cname="btn" onClick={openModal}>
        im a modal
      </Button>
      <Modal showModal={showModal} setShowModal={setShowModal} /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
