const initialState = {
  text:"",
  username:'ravenderJadon',
}

const counterMultiply = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case "COUNTER_MULTIPLY":
      
      return {...state, text: payload.text};
    
      case "CHANGE_USERNAME":
        return {...state, username:payload.username}
    default:
      return state;
  }
}

export default counterMultiply ; 