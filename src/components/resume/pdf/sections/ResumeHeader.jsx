import { Text, View } from "@react-pdf/renderer";

const ResumeHeader = ({ styles, name }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.personName}>{name || 'Your Name'}</Text>
        </View>
    );
}

export default ResumeHeader;