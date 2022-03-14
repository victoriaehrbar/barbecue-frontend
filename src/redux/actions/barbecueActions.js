
export const getBarbecues = () => {
    return (dispatch) => {
      fetch(`http://localhost:3001/barbecues`)
        .then((res) => res.json())
        .then((barbecues) =>
          dispatch({ type: "FETCH_BARBECUES_SUCCESS", payload: barbecues })
        );
    };
  };
  
  export const createBarbecue = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/barbecues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ barbecue: data }),
      })
        .then((res) => res.json())
        .then((barbecue) =>
          dispatch({ type: "CREATE_BARBECUE_SUCCESS", payload: barbecue })
        );
    };
  };