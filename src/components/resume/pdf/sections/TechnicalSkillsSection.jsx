import { Text, View } from "@react-pdf/renderer";

const TechnicalSkillsSection = ({ styles, technicalSkills }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.heading}>Technical Skills</Text>
            <View style={styles.skillCategories}>
                {technicalSkills.map(skillCategory => {
                    const categoryName = skillCategory.fields.categoryName.trim();
                    const skills = skillCategory.fields.skills.trim();

                    return (
                        <View key={skillCategory.id} style={styles.skillCategory}>
                            {categoryName !== '' && <Text style={styles.subHeading}>{categoryName}:</Text>}
                            {skills !== '' && <Text breakWords={false} style={styles.skills}>{skills}</Text>}
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

export default TechnicalSkillsSection;