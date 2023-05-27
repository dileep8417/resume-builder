import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";
import WorkLink from "../../wrappers/WorkLink";
import globeIcon from '../../../assets/icons/globe.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';
import linkIcon from '../../../assets/icons/link.svg';

const WorkLinksSection = ({ styles }) => {

    const details = useSelector(state => state.formData.workLinks[0]);
    const portfolio = details.fields.portfolio.trim();
    const github = details.fields.github.trim();
    const linkedin = details.fields.linkedin.trim();
    const other = details.fields.other.trim();

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Work Links</div>
            <div style={styles.listItems}>
                <WorkLink link={portfolio} styles={styles} icon={globeIcon} />
                <WorkLink link={github} styles={styles} icon={githubIcon} />
                <WorkLink link={linkedin} styles={styles} icon={linkedinIcon} />
                <WorkLink link={other} styles={styles} icon={linkIcon} />
            </div>
        </div>
    );
}

export default withShowSelectedCategory(WorkLinksSection, 'workLinks');