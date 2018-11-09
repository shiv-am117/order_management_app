initialstate = {
  id: 0,
  items: []
};
const orders = (state = initialstate, action) => {
  switch (action.type) {
    case "new_customer_order":
      console.log(state.id);
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.id,
            name: action.payload.name,
            number: action.payload.number,
            order: action.payload.order,
            money: action.payload.money,
            indate: action.payload.indate,
            outdate: action.payload.outdate
          }
        ],
        id: state.id + 1
      };
    case "delete customer order":
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload)],
        id: state.id
      };
  }
  return state;
};
export default orders;
