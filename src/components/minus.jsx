const Minus = (props) =>{
  console.log("props",props)

  const {buttonCount,setButtonCount} = props;

  const minusClick = () => {
    setButtonCount(buttonCount-1)
  } ;

  

  return(
    <>
    <button onClick={minusClick}>minus</button><br/>
    </>
  )
} 
export default Minus;