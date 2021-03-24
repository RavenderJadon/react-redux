import { useState } from "react";

const Header = () => {

  const [name,setName] = useState("anoop poonia");

  const nameChange = () => {
    setName("Ravender")
  }

  return(
    <div>
    <h1>hellp</h1>
    <h2>{name}</h2>
    <button onClick={nameChange}>nameChange</button>
    </div>
  )
};

export default Header;