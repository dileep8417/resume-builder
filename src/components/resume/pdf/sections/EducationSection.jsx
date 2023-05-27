import { Text, View } from "@react-pdf/renderer";

const EducationSection = ({ styles, education }) => {
    return (
        <View style={{...styles.section}}>
            <Text style={styles.heading}>Education</Text>
            {education.map(course => {
                const degree = course.fields.degree.trim();
                const college = course.fields.college.trim();
                const location = course.fields.location.trim();
                const startDate = course.fields.startDate.trim();
                const endDate = course.fields.endDate.trim();
                const cgpa = course.fields.cgpa.trim();

                return (
                    <View key={course.id}>
                        {degree !== '' && (
                            <View style={styles.flexContainer}>
                                <Text style={{...styles.subHeading, ...{marginBottom: '0'}}}>{degree}</Text>
                                {startDate !== '' && (
                                    <Text>{startDate} - {endDate !== '' ? endDate : 'Present'}</Text>
                                )}
                            </View>
                        )}
                        <View style={styles.collegeInfo}>
                            {college !== '' && (
                                <Text style={styles.collegeName}>
                                    {college}
                                    {location !== '' && <Text style={styles.location}><Text style={styles.locationSeparator}> | </Text>{location}</Text>}
                                </Text>
                            )}
                        </View>
                        {cgpa !== '' && <Text>CGPA: {cgpa}</Text>}
                    </View>
                )
            })}
        </View>
    );
}

export default EducationSection;
