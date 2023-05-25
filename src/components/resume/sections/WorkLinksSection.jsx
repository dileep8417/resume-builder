import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";
import { isValidURL, showURLLink } from "../../../utils/utils";

const WorkLinksSection = ({ styles }) => {

    const details = useSelector(state => state.formData.workLinks[0]);
    const portfolio = details.fields.portfolio.trim();
    const github = details.fields.github.trim();
    const linkedin = details.fields.linkedin.trim();
    const other = details.fields.other.trim();

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Work Links</div>
            {isValidURL(portfolio) && <a href={portfolio} target="_blank" rel="norefferrer" style={styles.link}>{showURLLink(portfolio)}</a>}
            {isValidURL(linkedin) && <a href={linkedin} target="_blank" rel="norefferrer" style={styles.link}>{showURLLink(linkedin)}</a>}
            {isValidURL(github) && <a href={github} target="_blank" rel="norefferrer" style={styles.link}>{showURLLink(github)}</a>}
            {isValidURL(other) && <a href={other} target="_blank" rel="norefferrer" style={styles.link}>{showURLLink(other)}</a>}
        </div>
    );
}

export default withShowSelectedCategory(WorkLinksSection, 'workLinks');