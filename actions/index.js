let custid = 0;
let ordgivid = 0;
export const neworder = order => {
  return {
    type: "new_customer_order",
    payload: order,
    id: custid++
  };
};

export const order_given = order => {
  return {
    type: "new_order_given",
    payload: order,
    id: ordgivid++
  };
};
