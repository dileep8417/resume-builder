import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const EducationSection = ({ styles }) => {
    const education = useSelector(state => state.formData.education);
    return (
        <div style={{...styles.section}}>
            <div style={styles.heading}>Education</div>
            {education.map(course => {
                const degree = course.fields.degree.trim();
                const college = course.fields.college.trim();
                const location = course.fields.location.trim();
                const startDate = course.fields.startDate.trim();
                const endDate = course.fields.endDate.trim();
                const cgpa = course.fields.cgpa.trim();

                return (
                    <div key={course.id}>
                        {degree !== '' && (
                            <div style={styles.flexContainer}>
                                <div style={{...styles.subHeading, ...{marginBottom: '0'}}}>{degree}</div>
                                {startDate !== '' && (
                                    <div>{startDate} - {endDate !== '' ? endDate : 'Present'}</div>
                                )}
                            </div>
                        )}
                        <div style={styles.collegeInfo}>
                            {college !== '' && (
                                <div style={styles.collegeName}>
                                    {college}
                                    {location !== '' && <span style={styles.location}><span style={styles.locationSeparator}>|</span>{location}</span>}
                                </div>
                            )}
                        </div>
                        {cgpa !== '' && <div>CGPA: {cgpa}</div>}
                    </div>
                )
            })}
        </div>
    );
}

export default withShowSelectedCategory(EducationSection, 'education');
