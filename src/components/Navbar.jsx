import { useLocation, Link } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css';
import { isCategoriesSelected } from '../helpers/categoriesHelper';
import { useSelector } from 'react-redux';

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
            <a href='/' className={styles.logo}>Resume Builder</a>
            <div className="nav_menu">
                {showDetailsLink && (
                    <div>
                        <Link to='/details/personal_details' className={`${styles.navItem} ${isDetailsPage ? styles.active : ''}`}>My Details</Link>
                        <Link to='/categories' className={`${styles.navItem} ${isCategoriesPage ? styles.active : ''}`}>Edit Categories</Link>
                    </div>
                )}
                {!showDetailsLink && path === '/' && <Link to='/categories' className="primary_btn">Build Now</Link>}
            </div>
        </nav>
    );
}

export default Navbar;