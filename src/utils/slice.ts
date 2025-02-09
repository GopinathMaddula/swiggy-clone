import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a single cart item
interface CartItem {
  // Example properties (adjust these as needed)
  id: number;
  name: string;
  price: number;
}

// Define the state for the cart slice
interface CartState {
  items: CartItem[];
}

// Initialize the state
const initialState: CartState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      // Correctly push the new item into the items array
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
