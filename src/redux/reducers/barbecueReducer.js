function barbecueReducer(state = { all: [] }, action) {
    switch (action.type) {
      case "FETCH_BARBECUES_SUCCESS":
        return { ...state, all: action.payload };
  
      case "CREATE_BARBECUE_SUCCESS":
        return { ...state, all: [...state.all, action.payload] };
      default:
        return state;
    }
  }
  
  export default barbecueReducer;