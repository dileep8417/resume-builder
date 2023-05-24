import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const TechnicalSkillsSection = ({ styles }) => {

    return (
        <div style={{...styles.section, ...styles.technicalSkills}}>
            <div style={styles.heading}>Technical Skills</div>
            <div style={styles.skillCategory}>
                <div style={styles.subHeading}>Languages:</div>
                <div style={styles.skills}>PHP, HTML, JS, CSS</div>
            </div>
            <div style={styles.skillCategory}>
                <div style={styles.subHeading}>Databases:</div>
                <div style={styles.skills}>MySQL, HTML, JS, CSS</div>
            </div>
            <div style={styles.skillCategory}>
                <div style={styles.subHeading}>Tols:</div>
                <div style={styles.skills}>PHP, HTML, JS, CSS</div>
            </div>
        </div>
    );
}

export default withShowSelectedCategory(TechnicalSkillsSection, 'technicalSkills');