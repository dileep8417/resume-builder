import styles from '../../styles/components/resume.style';
import AchievementsSection from './sections/AchievementsSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeHeader from './sections/ResumeHeader';
import TechnicalSkillsSection from './sections/TechnicalSkillsSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import WorkLinksSection from './sections/WorkLinksSection';
import ContactDetailsSection from './sections/ContactDetailsSection';

const Resume = () => {

    return (
        <div style={{...styles.content, ...styles.txtContent}}>
            <div style={styles.resume}>

                <ResumeHeader styles={styles} />
                
                <div style={styles.body}>
                    <div style={styles.leftContainer}>
                        <WorkExperienceSection styles={styles} />
                        <EducationSection styles={styles} />
                        <AchievementsSection styles={styles} />
                        <ProjectsSection styles={styles} />
                    </div>

                    <div style={styles.rightContainer}>
                        <TechnicalSkillsSection styles={styles} />
                        <WorkLinksSection styles={styles} />
                        <ContactDetailsSection styles={styles} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;