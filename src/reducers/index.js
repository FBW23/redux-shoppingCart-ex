const initialState = {
  products: [
    { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
  ],
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADD_PRODUCT') {
    //decrement the inventory of that product
    let addedItem;
    const newProducts = state.products.map((el) => {
      if (el.id === action.payload) {
        el.inventory--;
        addedItem = el;
      }
      return el;
    });

    let { id, title, price } = addedItem;
    let existedItem = state.cart.find((el) => el.id === action.payload);

    //if it exists in the cart already then increment it and return the new cart
    if (existedItem) {
      const newCart = state.cart.map((el) => {
        if (el.id === action.payload) {
          el.quantity++;
        }
        return el;
      });

      return Object.assign({}, state, {
        products: newProducts,
        cart: newCart,
      });
    }

    // if it doesnt exist in the cart, then just add it
    return Object.assign({}, state, {
      products: newProducts,
      cart: [...state.cart, { id, title, price, quantity: 1 }],
    });
  }

  return state;
};

export default cartReducer;
