import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const TechnicalSkillsSection = ({ styles }) => {
    const technicalSkills = useSelector(state => state.formData.technicalSkills);
    return (
        <div style={{...styles.section, ...styles.technicalSkills}}>
            <div style={styles.heading}>Technical Skills</div>
            <div style={styles.skillCategories}>
                {technicalSkills.map(skillCategory => {
                    const categoryName = skillCategory.fields.categoryName.trim();
                    const skills = skillCategory.fields.skills.trim().split(',');

                    return (
                        <div key={skillCategory.id} style={styles.skillCategory}>
                            {categoryName !== '' && <div style={styles.subHeading}>{categoryName}:</div>}
                            <div style={styles.skillsContainer}>
                                {skills.map((skill, index) => {
                                    return (
                                        <div style={styles.skill} key={index}>
                                            <div>{'\u2022'} {skill.trim()}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default withShowSelectedCategory(TechnicalSkillsSection, 'technicalSkills');
