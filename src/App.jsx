import { useState } from "react";
import "./App.css";
import ColorBtn from "./components/ColorBtn";
import Author from "./components/author";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = ["red", "blue", "green", "purple", "orange", "yellow"];

  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: bgColor }}
      >
        <h1
          className="text-black font-semibold underline font-mono"
          style={{ fontSize: "2.2rem", padding: "2rem" }}
        >
          Choose a button to change the color
        </h1>

        <div>
          {colors.map((color) => (
            <ColorBtn key={color} color={color} onClick={setBgColor} />
          ))}
        </div>
        <Author/>
      </div>
    </>
  );
}

export default App;
