import { Text, View } from "@react-pdf/renderer";

const SoftSkillsSection = ({ styles, skills }) => {

    return (
        <View style={styles.section}>
            <Text style={styles.heading}>Soft Skills</Text>
            {skills !== '' && <Text>{skills}</Text>}
        </View>
    );
}

export default SoftSkillsSection;