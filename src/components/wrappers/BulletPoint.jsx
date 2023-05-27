import { Text, View } from "@react-pdf/renderer";

const BulletPoint = ({ children }) => {

    const styles = {
        bulletPoint: {
            flexDirection: 'row',
            marginBottom: 5,
            maxWidth: '300px'
        },
        bullet: {
            marginRight: 5,
            height: '100%'
        },
        bulletText: {
            flexDirection: 'column',
        },
    }
    return (
        <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.bulletText}>{children}</Text>
        </View>
    );
}

export default BulletPoint;