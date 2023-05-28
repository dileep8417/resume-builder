import { useLocation, Link } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css';
import { isCategoriesSelected } from '../helpers/categoriesHelper';
import { useSelector } from 'react-redux';
import routes from '../utils/routes';

const Navbar = () => {
    const path = useLocation().pathname;
    if (path.includes('/preview')) {
        return;
    }
    const showDetailsLink = isCategoriesSelected(useSelector(state => state.categories));
    const isDetailsPage = path.includes('/details');
    const isCategoriesPage = path.includes('/categories');

    return (
        <nav className={styles.navbar}>
            <Link to={routes.home} className={styles.logo}>Resume Builder</Link>
            <div className="nav_menu">
                {showDetailsLink && (
                    <div>
                        <Link to={routes.personalDetails} className={`${styles.navItem} ${isDetailsPage ? styles.active : ''}`}>My Details</Link>
                        <Link to={routes.categories} className={`${styles.navItem} ${isCategoriesPage ? styles.active : ''}`}>Edit Categories</Link>
                    </div>
                )}
                {!showDetailsLink && path === '/' && <Link to={routes.categories} className="primary_btn">Build Now</Link>}
            </div>
        </nav>
    );
}

export default Navbar;