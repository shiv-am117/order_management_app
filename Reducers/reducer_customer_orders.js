const orders = (state = [], action) => {
  switch (action.type) {
    case "new_customer_order":
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          number: action.payload.number,
          order: action.payload.order,
          money: action.payload.money,
          indate: action.payload.indate,
          outdate: action.payload.outdate
        }
      ];
  }
  return state;
};
export default orders;
