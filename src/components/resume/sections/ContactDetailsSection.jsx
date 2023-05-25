import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const ContactDetailsSection = ({ styles }) => {
    const details = useSelector(state => state.formData.personalDetails[0]);
    const mobile = details.fields.mobile.trim();
    const address = details.fields.address.trim();
    const mail = details.fields.mail.trim();
    return (
        <div style={styles.section}>
            <div style={styles.heading}>Contact Info</div>
            {mobile !== '' && <div style={styles.contactItem}>{mobile}</div>}
            {mail !== '' && <div style={styles.contactItem}>{mail}</div>}
            {address !== '' && <div style={styles.contactItem}>{address}</div>}
        </div>
    );
}

export default withShowSelectedCategory(ContactDetailsSection, 'personalDetails');