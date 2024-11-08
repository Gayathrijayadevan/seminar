function Reducer(state, action) {
    if (!action || !action.type) {  //This line of code is an error check that ensures any action passed to the Reducer function is valid and has a type property
      throw new Error('Action is missing a type');
    }
  
    switch (action.type) {   //Based on action.type, the reducer updates the state.
      case "INCREMENT":
        return state + 1;
        
      case "DECREMENT":
        return state - 1;
        
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  export default Reducer