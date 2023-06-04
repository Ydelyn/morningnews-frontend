import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addHiddenArticle: (state, action) => {
			state.value.push(action.payload);
		},
		removeAllHiddenArticles: (state) => {
			state.value = [];
		},
	},
});

export const { addHiddenArticle, removeAllHiddenArticles } = hiddenSlice.actions;
export default hiddenSlice.reducer;
