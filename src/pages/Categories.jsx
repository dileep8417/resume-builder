import { useSelector, useDispatch } from 'react-redux';
import { toggleCategorySelection } from '../features/categories/categoriesSlice';
import styles from '../styles/pages/Categories.module.css';
import { categoriesPageHeading } from '../utils/constants';
import { isCategoriesSelected } from '../helpers/categoriesHelper';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    function categoryClickHandler(categoryName) {
        dispatch(toggleCategorySelection(categoryName));
    }

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

    return (
        <div className={styles.categoreisPage}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    {categoriesPageHeading}
                </div>
                
                <div className={styles.categoriesContainer}>
                    {categories.map(category => {
                        return category.toShowInSelection && (
                            <div key={category.name} className={styles.category + ' ' + (category.isSelected ? styles.selected : '')} onClick={() => categoryClickHandler(category.name)}>
                                {category.name}
                            </div>
                        );
                    })}
                </div>

                {isCategoriesSelected(categories) ? <Link to='/details/personal_details'><button className={`primary_btn ${styles.nextStepBtn}`}>Next Step</button></Link> : '' }
            </div>
        </div>
    );
}

export default Categories;