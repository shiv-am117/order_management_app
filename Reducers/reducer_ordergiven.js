initialstate = {
  id: 0,
  items: []
};
const orders = (state = initialstate, action) => {
  switch (action.type) {
    case "new_order_given":
      return {
        ...state,
        items: [
          {
            id: state.id,
            name: action.payload.name,
            quantity: action.payload.quantity,
            date: action.payload.date
          },
          ...state.items
        ],
        id: state.id + 1
      };
    case "delete order":
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload)],
        id: state.id
      };
  }
  return state;
};
export default orders;
