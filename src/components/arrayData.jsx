const ArryaData = (props) => {
  const { arry } = props;
  console.log("arry",arry)
  
  return(
    <div>
      {arry.map((name)=>{
        return(
          <p>{name}</p>
        )
      })}
    </div>
  )
};

export default ArryaData;