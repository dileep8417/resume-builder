import AccomplishmentsSection from './sections/AccomplishmentsSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeHeader from './sections/ResumeHeader';
import TechnicalSkillsSection from './sections/TechnicalSkillsSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import WorkLinksSection from './sections/WorkLinksSection';
import ContactDetailsSection from './sections/ContactDetailsSection';
import SummarySection from './sections/SummarySection';
import styles from '../../styles/components/resume.style';
import SoftSkillsSection from './sections/SoftSkillsSection';

const ResumeTemplate = () => {
    return (
        <div style={styles.resume}>
            <ResumeHeader styles={styles} />
            <div style={styles.body}>
                <div style={styles.leftContainer}>
                    <SummarySection styles={styles} />
                    <WorkExperienceSection styles={styles} />
                    <EducationSection styles={styles} />
                    <ProjectsSection styles={styles} />
                    <AccomplishmentsSection styles={styles} />
                </div>

                <div style={styles.rightContainer}>
                    <TechnicalSkillsSection styles={styles} />
                    <SoftSkillsSection styles={styles} />
                    <WorkLinksSection styles={styles} />
                    <ContactDetailsSection styles={styles} />
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplate;