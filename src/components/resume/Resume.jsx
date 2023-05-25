import styles from '../../styles/components/resume.style';
import AccomplishmentsSection from './sections/AccomplishmentsSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeHeader from './sections/ResumeHeader';
import TechnicalSkillsSection from './sections/TechnicalSkillsSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import WorkLinksSection from './sections/WorkLinksSection';
import ContactDetailsSection from './sections/ContactDetailsSection';
import SummarySection from './sections/SummarySection';
import { MdZoomOutMap } from 'react-icons/md';
import { AiOutlineDownload } from  'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Resume = ({ isPreviewMode }) => {
    
    const navigate = useNavigate();

    return (
        <div style={{...styles.content, ...styles.txtContent}}>
            <div style={styles.expandIcon}>
                <AiOutlineDownload style={{margin: '0 24px 0'}}/>
                {isPreviewMode && <MdZoomOutMap onClick={() => navigate('/preview')} />}
            </div>
            <div style={styles.resume}>

                <ResumeHeader styles={styles} />
                
                <div style={styles.body}>
                    <div style={styles.leftContainer}>
                        <SummarySection styles={styles} />
                        <WorkExperienceSection styles={styles} />
                        <EducationSection styles={styles} />
                        <AccomplishmentsSection styles={styles} />
                        <ProjectsSection styles={styles} />
                    </div>

                    <div style={styles.rightContainer}>
                        <TechnicalSkillsSection styles={styles} />
                        <ContactDetailsSection styles={styles} />
                        <WorkLinksSection styles={styles} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;