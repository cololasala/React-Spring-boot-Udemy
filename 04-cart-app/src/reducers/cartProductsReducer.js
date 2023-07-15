export const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case "UPDATE_QUANTITY":
      return [
        ...state.map((c) => {
          if (c.product.id === action.payload) {
            c.quantity += 1;
          }
          return c;
        }),
      ];
    case "REMOVE_PRODUCT":
      return state.filter((c) => c.product.id !== action.payload);
    default:
      return state;
  }
};
