import { categoriesReducer } from '../features/categories/categoriesSlice';
import { formReducer } from '../features/formData/formSlice';
import { pageReducer } from '../features/page/pageSlice';
import { resumeReducer } from '../features/resume/resumeSlice';

const rootReducer  = {
    'categories': categoriesReducer,
    'formData': formReducer,
    'page': pageReducer,
    'resume': resumeReducer
};

export default rootReducer;