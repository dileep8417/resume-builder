import { categoriesReducer } from '../features/categories/categoriesSlice';
import { formReducer } from '../features/formData/formSlice';

const rootReducer  = {
    'categories': categoriesReducer,
    'formData': formReducer
};

export default rootReducer;