import React from "react";
import { Routes, Route } from "react-router-dom";
// swich 대신 Routes 임포트
import Cat from "./Cat";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* switch 대신 routes */}
        <Route path="/" element={<Home />}></Route>
        {/* component 대신 element */}
        <Route path="/cat/:name" element={<Cat />}></Route>
        {/* :name 으로 파라미터 이름지정 */}
      </Routes>
    </div>
  );
}

export default App;
