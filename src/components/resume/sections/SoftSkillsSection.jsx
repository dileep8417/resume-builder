import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const SoftSkillsSection = ({ styles }) => {

    const skills = useSelector(state => state.formData.softSkills[0].fields.skills);

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Soft Skills</div>
            {skills !== '' && <div>{skills}</div>}
        </div>
    );
}

export default withShowSelectedCategory(SoftSkillsSection, 'softSkills');