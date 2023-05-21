import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesState } from '../../helpers/categoriesHelper';

const categories = getCategoriesState();

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categories,
    reducers: {
        toggleCategorySelection: (categories, action) => {
            const categoryName = action.payload;
            categories.forEach(category => {
                if (category.name === categoryName && !category.isMandatory) {
                    category.isSelected = !category.isSelected;
                }
            });
        }
    }
});

export const categoriesReducer = categoriesSlice.reducer;

export const { toggleCategorySelection } = categoriesSlice.actions;