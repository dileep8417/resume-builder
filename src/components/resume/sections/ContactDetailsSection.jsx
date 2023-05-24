import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const ContactDetailsSection = ({ styles }) => {

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Contact Info</div>
            <div style={styles.contactItem}>7013104703</div>
            <div style={styles.contactItem}>dileep8417@gmail.com</div>
        </div>
    );
}

export default withShowSelectedCategory(ContactDetailsSection, 'personalDetails');