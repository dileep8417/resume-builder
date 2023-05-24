import { useSelector } from "react-redux";

const ResumeHeader = ({ styles }) => {

    const name = useSelector(state => state.formData.personalDetails[0].fields.name);
    
    return (
        <div style={styles.header}>
            <div style={styles.personName}>{name || 'Your Name'}</div>
        </div>
    );
}

export default ResumeHeader;