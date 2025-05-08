import { createSlice,current } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newitem = action.payload;
    
      if (!newitem?.product.id || typeof newitem.count !== 'number') {
        console.log('erorr', newitem);
        return;
      }
    
      const existingItem = state.items.find(item => item.product.id === newitem.product.id);
    
      if (existingItem) {
        existingItem.count += newitem.count;
      } else {
        state.items.push(newitem);
      }
    }
    ,
    removeItem: (state, action) => {
      console.log(action.payload,'rem1');
      state.items = state.items.filter(item => item.product.id != action.payload);
      console.log(state.items.map(e => current(e).product.id),'rem2');
      

    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;