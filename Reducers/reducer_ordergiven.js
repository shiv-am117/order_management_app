const orders = (state = [], action) => {
  switch (action.type) {
    case "new_order_given":
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          quantity: action.payload.quantity,
          date: action.payload.date
        }
      ];
  }
  return state;
};
export default orders;
