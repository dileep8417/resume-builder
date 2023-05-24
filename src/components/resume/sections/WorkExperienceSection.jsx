import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const WorkExperienceSection = ({ styles }) => {

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Work Experience</div>
            
            <div>
                <div style={styles.company}>
                    <div style={{...styles.companyName, ...styles.subHeading}}>
                        Internshala
                        <span style={{...styles.location, ...styles.txtContent}}><span style={styles.locationSeparator}>|</span>Gurgaon, Haryana</span>
                    </div>
                    <div style={styles.role}>
                        <div style={{...styles.flexContainer, marginBottom: '6px'}}>
                            <div style={{...styles.subHeading, ...styles.roleName,}}>
                                Software Developer
                            </div>
                            <div style={styles.duration}>Jan 2021 - Present</div>
                        </div>
                        <div style={styles.workDone}>
                            <ul>
                                <li style={{listStyleType: 'circle'}}>Lorem ipsum dol dipisicing elit. Et dolorem expedita ducimus incidunt. Pariatur repudiandae necessitatibus quae vitae ab quibusdam deserunt doloremque vel</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={styles.company}>
                    <div style={styles.role}>
                        <div style={{...styles.flexContainer, marginBottom: '6px'}}>
                            <div style={{...styles.subHeading, ...styles.roleName,}}>
                                Software Developer
                            </div>
                            <div style={styles.duration}>Jan 2021 - Present</div>
                        </div>
                        <div style={styles.workDone}>
                            <ul>
                                <li style={{listStyleType: 'circle'}}>Lorem ipsum dol dipisicing elit. Et dolorem expedita ducimus incidunt. Pariatur repudiandae necessitatibus quae vitae ab quibusdam deserunt doloremque vel</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    );
}

export default withShowSelectedCategory(WorkExperienceSection, 'workExperience');