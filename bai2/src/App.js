
import React, { useState } from "react";
import "./App.css";
import ColorBox from "./ColorBox";

function App() {
 
  const [mau, setMau] = useState("white");

  const thayDoiMau = (mauMoi) => {
    setMau(mauMoi);
  };

  return (
    <div className="App">
    
      <div className="nut">
        <button onClick={() => thayDoiMau("red")}>Đỏ</button>
        <button onClick={() => thayDoiMau("green")}>Xanh</button>
        <button onClick={() => thayDoiMau("yellow")}>Vàng</button>
      </div>
      
      {}
      <ColorBox mau={mau} />
    </div>
  );
}

export default App;
