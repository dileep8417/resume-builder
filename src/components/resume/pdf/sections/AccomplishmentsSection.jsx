import { Text, View } from "@react-pdf/renderer";
import BulletPoint from "../../../wrappers/BulletPoint";

const AccomplishmentsSection = ({ styles, accomplishments }) => {
    accomplishments = accomplishments.trim().split('**');
    return (
        <View style={{...styles.section, ...styles.accomplishments}}>
            <Text style={styles.heading}>Accomplishments</Text>
            {accomplishments.length > 0 && (
                <View>
                    {accomplishments.map((accomplishment, index) => {
                        return (
                            <View key={index}>
                                {accomplishment !== '' && (
                                    <Text style={styles.workDonePdf}>
                                        {accomplishments.length === 1 ? accomplishment : (
                                            <BulletPoint key={index}>{accomplishment.trim()}</BulletPoint>
                                        )}
                                    </Text> 
                                )}
                            </View>
                        )
                    })}
                </View>
            )}
        </View>
    );
}

export default AccomplishmentsSection;
