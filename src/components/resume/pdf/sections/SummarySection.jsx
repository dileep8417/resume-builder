import { Text, View } from "@react-pdf/renderer";

const SummarySection = ({ styles, summary }) => {
    return (
        <View style={styles.section}>
            <View>
                <Text style={styles.heading}>Summary</Text>
            </View>
            <Text>
                {summary}
            </Text>
        </View>
    );
}

export default SummarySection;
