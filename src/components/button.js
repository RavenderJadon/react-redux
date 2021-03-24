import { useState } from "react";
import Minus from "./minus";

const Button = () => {

  const [buttonCount,setButtonCount] = useState();

  const btnClick = () => {
    
    setButtonCount(buttonCount+1)
  }

  return(
    <>
    <h1>{buttonCount}</h1>
    <button onClick={btnClick}>add</button>
    <Minus  buttonCount={buttonCount} setButtonCount={setButtonCount} />
    </>
  )
};

export default Button;