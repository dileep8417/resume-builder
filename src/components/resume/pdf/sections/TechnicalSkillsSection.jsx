import { Text, View } from "@react-pdf/renderer";
import BulletPoint from "../../../wrappers/BulletPoint";

const TechnicalSkillsSection = ({ styles, technicalSkills }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.heading}>Technical Skills</Text>
            <View style={styles.skillCategories}>
                {technicalSkills.map(skillCategory => {
                    const categoryName = skillCategory.fields.categoryName.trim();
                    const skills = skillCategory.fields.skills.trim().split(',');

                    return (
                        <View key={skillCategory.id} style={styles.skillCategory}>
                            {categoryName !== '' && <Text style={styles.subHeading}>{categoryName}:</Text>}
                            <View style={styles.skillsContainer}>
                                {skills.map((skill, index) => {
                                    return (
                                        <View key={index} style={styles.skill}>
                                            <BulletPoint>{skill.trim()}</BulletPoint>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

export default TechnicalSkillsSection;
