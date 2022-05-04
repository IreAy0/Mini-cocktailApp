const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems?.length > 0 ? cartItems : [])
  );
  
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems?.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems?.reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems?.find((item) => item.idDrink === action.payload.idDrink)) {
        state.cartItems?.push({
          ...action.payload,
          quantity: 1
        });
      }
      return {
        ...state,
        item: action.payload,
        ...sumItems(state.cartItems),
        // cartItems: [...state.cartItems]
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        alert: true,
        item: action.payload,
        ...sumItems(
          state.cartItems?.filter((item) => item.idDrink !== action.payload.idDrink)
        ),
        cartItems: [
          ...state.cartItems?.filter((item) => item.idDrink !== action.payload.idDrink)
        ]
      };

    case "INCREASE":
      const value = state.cartItems?.findIndex((item) => item.idDrink === action.payload.idDrink)
      state.cartItems[value].quantity = state.cartItems[value].quantity + 1;
      return {
        ...state,
        alert: true,
        item: action.payload,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems]
      };

    case "DECREASE":
     
        state.cartItems[
          state.cartItems?.findIndex((item) => item.idDrink === action.payload.idDrink)
        ].quantity--;
  
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems]
      };
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([])
      };
  
   
    default:
      return state;
  }
};
