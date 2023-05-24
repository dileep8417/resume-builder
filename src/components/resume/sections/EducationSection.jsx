import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const EducationSection = ({ styles }) => {

    return (
        <div style={{...styles.section}}>
            <div style={styles.heading}>Education</div>
            <div style={styles.subHeading}>B.Tech</div>
            <div style={styles.collegeInfo}>
                <div style={styles.collegeName}>
                    Vel Tech University
                    <span style={styles.location}><span style={styles.locationSeparator}>|</span>Chennai, Tamil nadu</span>
                </div>
            </div>
            <div>CGPA: 8.5</div>
        </div>
    );
}

export default withShowSelectedCategory(EducationSection, 'education');
