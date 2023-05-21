import { Outlet } from "react-router-dom";
import CategoriesSideNav from "../components/CategoriesSideNav";
import styles from "../styles/pages/Details.module.css";

const Details = () => {
    return (
        <div className={styles.detailsPage}>
            <CategoriesSideNav />
            <div className={styles.content}>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Details;