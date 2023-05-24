import { useLocation } from 'react-router-dom';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
    const showFooter = !useLocation().pathname.includes('/preview');

    return (
        <div>
            {showFooter && (<footer className={styles.footer}>&copy; 2023 Dileep Atyam</footer>)}
        </div>
    );
}

export default Footer;