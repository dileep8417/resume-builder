import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const AchievementsSection = ({ styles }) => {

    return (
        <div style={{...styles.section, ...styles.accomplishments}}>
            <div style={styles.heading}>Accomplishments</div>
            <ul>
                <li style={styles.listItem}>ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate esse maiores aspernatur placeat quia sequi quos? Nisi placeat excepturi.</li>
                <li style={styles.listItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cupiditate esse maiores aspernatur placeat quia sequi quos? Nisi placeat excepturi.</li>
            </ul>
        </div>
    );
}

export default withShowSelectedCategory(AchievementsSection, 'achievements');