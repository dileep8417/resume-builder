import { categoriesReducer } from '../features/categories/categoriesSlice';
import { formReducer } from '../features/formData/formSlice';
import { pageReducer } from '../features/page/pageSlice';

const rootReducer  = {
    'categories': categoriesReducer,
    'formData': formReducer,
    'page': pageReducer
};

export default rootReducer;