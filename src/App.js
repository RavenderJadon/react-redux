import './App.css';
import Header from "./components/header";
import Button from "./components/button";
import ArryaData from "./components/arrayData";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, looginChange, counterMulitply, changeUsername } from "./actions/index";
 
function App() {
  const [state,setState] = useState("");
  const [username, setUsername] = useState('');

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const { text: redText, username: reduxUsername } = useSelector(state => state.counterMultiply);
  const dispatch = useDispatch();
  const [arry,setArr] = useState(["ravender","anoop","amit","rishabh","jsdgfjghfds"])

  return (
    
    <div className="App">


      <Header />
      <Button />
      <br/>
      <hr/>
        <ArryaData arry={arry} />      





































    <div className="Appo">
    <h1>React redux</h1>
      <h2>counter = {counter}</h2>
      <button onClick={( )=> dispatch(increment()) }>+add</button>
      <button onClick={( )=> dispatch(decrement()) } >-sub</button>
      <button onClick={( )=> dispatch(looginChange()) } >change</button>
      {isLogged ? <h3>isLogged is true</h3> : ""}
      <input
       type="text"
       onChange={e=>{setState(e.target.value)}}
       value={state}
       />
      <p>{state}</p>
      <button onClick={( )=> dispatch(counterMulitply(state)) } >Update Text State...</button>
      <p>{redText}</p>

      <input
      type="text"
      onChange={e=>{setUsername(e.target.value)}}
      value={username}
      />
     <button onClick={( )=> dispatch(changeUsername(username)) } >Update username State...</button>
     <p>{reduxUsername}</p>
    </div>
      
    </div>
  );
}

export default App;
