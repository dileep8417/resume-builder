import { NavLink } from 'react-router-dom';
import styles from '../styles/components/CategoriesSideNav.module.css';
import { getCategoryRoute } from '../helpers/categoriesHelper';
import { useSelector } from 'react-redux';

const CategoriesSideNav = () => {
    const categories = useSelector(state => state.categories);
    return (
        <div className={styles.sideNav}>
            <div className={styles.heading}>
                Selected Categories
            </div>
            
            <div className={styles.categoriesContainer}>
                {categories.map(category => {
                    return category.isSelected && (
                        <NavLink key={category.name} to={getCategoryRoute(category.name)} className={({ isActive }) => isActive ? styles.selected : styles.category}>
                            {category.name}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default CategoriesSideNav;