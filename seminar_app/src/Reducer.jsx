function Reducer(state, action) {
    if (!action || !action.type) {
      throw new Error('Action is missing a type');
    }
  
    switch (action.type) { 
      case "INCREMENT":
        return state + 1;
        
      case "DECREMENT":
        return state - 1;
        
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  export default Reducer