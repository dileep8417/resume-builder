import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const AccomplishmentsSection = ({ styles }) => {
    const accomplishments = useSelector(state => state.formData.accomplishments[0].fields.accomplishment.trim().split('**'));
    return (
        <div style={{...styles.section, ...styles.accomplishments}}>
            <div style={styles.heading}>Accomplishments</div>
            {accomplishments.length > 0 && (
                <ul>
                    {accomplishments.map((accomplishment, index) => {
                        return (
                            <div key={index}>
                                {accomplishments.length === 1 ? accomplishment : <li style={styles.listItem}>{accomplishment}</li>} 
                            </div>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}

export default withShowSelectedCategory(AccomplishmentsSection, 'accomplishments');