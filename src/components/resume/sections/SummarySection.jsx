import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const SummarySection = ({ styles }) => {
    const summary = useSelector(state => state.formData.summary[0].fields.summary);
    return (
        <div style={styles.section}>
            <div style={styles.heading}>Summary</div>
            <div>
                {summary}
            </div>
        </div>
    );
}

export default withShowSelectedCategory(SummarySection, 'summary');
