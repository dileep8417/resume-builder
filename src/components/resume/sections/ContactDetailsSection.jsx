import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";
import contact from '../../../assets/icons/contact.svg';
import homeIcon from '../../../assets/icons/home.svg';

const ContactDetailsSection = ({ styles }) => {
    const details = useSelector(state => state.formData.personalDetails[0]);
    const mobile = details.fields.mobile.trim();
    const address = details.fields.address.trim();
    const mail = details.fields.mail.trim();
    return (
        <div style={styles.section}>
            <div style={styles.heading}>Contact Info</div>

            <div style={styles.listItems}>
                {mobile !== '' && (
                    <div style={styles.listWithIcon}>
                        <img style={styles.listIcon} src={contact} alt="" />
                        {mobile}
                    </div>
                )}
                {mail !== '' && (
                    <div style={styles.listWithIcon}>
                        <span>@</span>
                        {mail}
                    </div>
                )}
                {address !== '' && (
                    <div style={styles.listWithIcon}>
                        <img style={styles.listIcon} src={homeIcon} />
                        {address}
                    </div>
                )}
            </div>
        </div>
    );
}

export default withShowSelectedCategory(ContactDetailsSection, 'personalDetails');