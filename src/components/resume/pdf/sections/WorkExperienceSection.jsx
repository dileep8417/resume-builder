import { Text, View } from "@react-pdf/renderer";
import BulletPoint from "../../../wrappers/BulletPoint";

const WorkExperienceSection = ({ styles, workExperiences }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.heading}>Work Experience</Text>

            <View style={styles.companies}>
                {workExperiences.map(form => {
                    const companyName = form.fields.companyName.trim();
                    const location = form.fields.location.trim();
                    const roleName = form.fields.roleName.trim();
                    const startDate = form.fields.startDate.trim();
                    const endDate = form.fields.endDate.trim();
                    const workDone = form.fields.workDone.trim().split('**');

                    return (
                        <View key={form.id} style={styles.company}>
                            {companyName !== '' && (
                                <Text style={{...styles.companyName, ...styles.subHeading}}>
                                    {companyName}
                                    {location !== '' && (
                                        <View style={styles.txtContent}>
                                            <Text style={{...styles.locationSeparator}}> | </Text>
                                            <Text>{location}</Text>
                                        </View>
                                    )}
                                </Text>
                            )}

                            <View style={styles.role}>
                                {roleName !== '' && (
                                    <View style={{...styles.flexContainer, marginBottom: '6px'}}>
                                        <Text style={{...styles.subHeading, ...styles.roleName,}}>
                                            {roleName}
                                        </Text>
                                        {startDate !== '' && (
                                            <Text style={styles.duration}>{startDate} - {endDate ? endDate : 'Present'}</Text>
                                        )}
                                    </View>
                                )}
                                {workDone.length > 0 && (
                                    <View style={styles.workDonePdf}>
                                        {workDone.map((work, index) => {
                                            return work !== ''&& <BulletPoint key={index}>{work.trim()}</BulletPoint>
                                        })}
                                    </View>
                                )}
                            </View>
                        </View>
                    );
                })}
            </View>
            
        </View>
    );
}

export default WorkExperienceSection;