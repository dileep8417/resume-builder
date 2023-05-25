import { Outlet } from "react-router-dom";
import CategoriesSideNav from "../components/CategoriesSideNav";
import styles from "../styles/pages/Details.module.css";
import Resume from "../components/resume/resume";

const Details = () => {
    return (
        <div className={styles.detailsPage}>
            <CategoriesSideNav />
            <div className={styles.content}>
                <div className={styles.formContent}>
                    <Outlet />
                </div>
                <div className={styles.resumeContainer}>
                    <Resume isPreviewMode={true} />
                </div>
            </div>
        </div>
    );
}

export default Details;