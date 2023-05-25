import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const WorkExperienceSection = ({ styles }) => {
    const workExperiences = useSelector(state => state.formData.workExperience);
    return (
        <div style={styles.section}>
            <div style={styles.heading}>Work Experience</div>

            {workExperiences.map(form => {
                const companyName = form.fields.companyName.trim();
                const location = form.fields.location.trim();
                const roleName = form.fields.roleName.trim();
                const startDate = form.fields.startDate.trim();
                const endDate = form.fields.endDate.trim();
                const workDone = form.fields.workDone.trim().split('**');

                return (
                    <div key={form.id} style={styles.company}>
                        {companyName !== '' && (
                            <div style={{...styles.companyName, ...styles.subHeading}}>
                                {companyName}
                                {location !== '' && (
                                    <span style={{...styles.location, ...styles.txtContent}}>
                                        <span style={styles.locationSeparator}>|</span>
                                        {location}
                                    </span>
                                )}
                            </div>
                        )}
                        <div style={styles.role}>
                            {roleName !== '' && (
                                <div style={{...styles.flexContainer, marginBottom: '6px'}}>
                                    <div style={{...styles.subHeading, ...styles.roleName,}}>
                                        {roleName}
                                    </div>
                                    {startDate !== '' && (
                                        <div style={styles.duration}>{startDate} - {endDate ? endDate : 'Present'}</div>
                                    )}
                                </div>
                            )}
                            {workDone.length > 0 && (
                                <div style={styles.workDone}>
                                    <ul>
                                        {workDone.map((work, index) => {
                                            return work !== '' ? <li key={index} style={{listStyleType: 'circle'}}>{work}</li> : ''
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
            

        </div>
    );
}

export default withShowSelectedCategory(WorkExperienceSection, 'workExperience');