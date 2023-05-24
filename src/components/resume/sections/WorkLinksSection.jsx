import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const WorkLinksSection = ({ styles }) => {

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Work Links</div>
            <a style={styles.link} href="">github.com/dileep8417</a>
            <a style={styles.link} href="">github.com/dileep8417</a>
            <a style={styles.link} href="">github.com/dileep8417</a>
        </div>
    );
}

export default withShowSelectedCategory(WorkLinksSection, 'workLinks');