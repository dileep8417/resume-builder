import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const ProjectsSection = ({ styles }) => {

    return (
        <div style={styles.section}>
            <div style={styles.heading}>Recent Projects</div>
            <div style={styles.project}>
                <div style={styles.subHeading}>Test App</div>
                <div>ipsum dolor sit amet consectetur adipisicing elit. Rem unde id eligendi similique? Sequi provident, molestiae ipsam sunt recusandae ratione voluptatibus error at cupiditate doloribus porro sit fugiat exercitationem natus.</div>
            </div>
            <div style={styles.project}>
                <div style={styles.subHeading}>Test App</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde id eligendi similique? Sequi provident, molestiae ipsam sunt recusandae ratione voluptatibus error at cupiditate doloribus porro sit fugiat exercitationem natus.</div>
            </div>
        </div>
    );
}

export default withShowSelectedCategory(ProjectsSection, 'projects');
