import { isCategorySelected } from '../helpers/categoriesHelper';
import { useSelector } from 'react-redux';

const withShowSelectedCategory = (Component, categoryName) => {
    
    return (props) => {
        const categories = useSelector(state => state.categories);
        const showCategory = isCategorySelected(categoryName, categories);

        return showCategory && <Component {...props} />
    }
}

export default withShowSelectedCategory;