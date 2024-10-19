import { useState } from "react";

const Trafficlight = () => {
  const [color, setColor] = useState("red");

  const handleColor = (changedColor) => {
    setColor(changedColor);
  }

//   function handleRed() {
//     setColor("red");
//   }

//   function handleGreen() {
//     setColor("green");
//   }

//   function handleYellow() {
//     setColor("yellow");
//   }

  return (
    <div>
      <div
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: color,
          borderRadius: "100px",
        }}>{color}</div>

      {/* <button onClick={handleRed}>Red</button>
      <button onClick={handleGreen}>Green</button>
      <button onClick={handleYellow}>Yellow</button> */}
      <button onClick={() => handleColor('red')}>Red</button>
      <button onClick={() => handleColor('green')}>green</button>
      <button onClick={() => handleColor('yellow')}>yellow</button>
    </div>
  );
};

export default Trafficlight;
