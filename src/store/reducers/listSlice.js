import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addItem: (state) => {
      const newItem = {
        id: Date.now(),
        color: getRandomColor(),
      };
      state.unshift(newItem);
    },
    removeItem: (state) => {
      state.pop();
    },
  },
});

const getRandomColor = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;