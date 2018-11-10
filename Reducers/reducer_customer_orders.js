initialstate = {
  id: 0,
  items: []
};
const orders = (state = initialstate, action) => {
  switch (action.type) {
    case "new_customer_order":
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
            outdate: action.payload.outdate,
            given: false,
            made: false
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
    case "updategiven":
      const index = action.id;
      console.log(index);
      return {
        ...state,
        items: state.items.map((item, i) =>
          i === action.id ? { ...item, given: !given } : item
        )
      };

    case "updatemade":
      return {
        ...state,
        items: state.items.map((item, i) =>
          i === action.id ? { ...item, made: !made } : item
        )
      };
  }
  return state;
};
export default orders;
