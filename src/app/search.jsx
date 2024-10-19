import { useState } from "react";

const Search = () => {

    const[text, setText] = useState("");
    const handleTextChange = (event) => {
        console.log(event);
        setText(event.target.value);
    };

    return ( 
    <div>
        <h1>{text}</h1>
        <input type="text" value={text} onChange={handleTextChange}/>
    </div>

);
}
 
export default Search;