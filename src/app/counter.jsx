import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(1);

    function handleAdd () {
       setNum(num + 1);
    };

    const handleMinus = () => {
        setNum(num - 1);
    };

    return (
    <div>
        <button onClick={handleAdd}>Plus</button>
        <h1>{num}</h1>
        <button onClick={handleMinus}>Minus</button>
    </div>  
    );
}
 
export default Counter;