import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const TechnicalSkillsSection = ({ styles }) => {
    const technicalSkills = useSelector(state => state.formData.technicalSkills);
    return (
        <div style={{...styles.section, ...styles.technicalSkills}}>
            <div style={styles.heading}>Technical Skills</div>
            {technicalSkills.map(skillCategory => {
                const categoryName = skillCategory.fields.categoryName.trim();
                const skills = skillCategory.fields.skills.trim();

                return (
                    <div key={skillCategory.id} style={styles.skillCategory}>
                        {categoryName !== '' && <div style={styles.subHeading}>{categoryName}:</div>}
                        {skills !== '' && <div style={styles.skills}>{skills}</div>}
                    </div>
                )
            })}
        </div>
    );
}

export default withShowSelectedCategory(TechnicalSkillsSection, 'technicalSkills');