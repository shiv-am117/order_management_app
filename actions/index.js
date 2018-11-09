export const neworder = order => {
  console.log("index");
  return {
    type: "new_customer_order",
    payload: order
  };
};

export const order_given = order => {
  return {
    type: "new_order_given",
    payload: order
  };
};

export const del_order = id => {
  return {
    type: "delete order",
    payload: id
  };
};

export const del_cust_order = id => {
  return {
    type: "delete customer order",
    payload: id
  };
};
