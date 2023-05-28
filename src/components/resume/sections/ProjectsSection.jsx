import { useSelector } from "react-redux";
import withShowSelectedCategory from "../../../hoc/withShowSelectedCategory";

const ProjectsSection = ({ styles }) => {
    const projects = useSelector(state => state.formData.projects);
    return (
        <div style={styles.section}>
            <div style={styles.heading}>Recent Projects</div>
            {projects.map(project => {
                const title = project.fields.projectName.trim();
                const description = project.fields.description.trim();
                const sourceCode = project.fields.sourceCode.trim();
                const demo = project.fields.demo.trim();

                return (
                    <div key={project.id} style={styles.project}>
                        <div style={styles.flexContainer}>
                            <div style={{...styles.subHeading, ...{marginBottom: '0'}}}>{title !== '' && title}</div>
                            <div style={styles.projectLinks}>
                                {sourceCode.length > 7 && <a style={styles.projectLink} target="_blank" rel="norefferer" href={sourceCode}>Source code</a>}
                                {demo.length > 7 && <a style={styles.projectLink} target="_blank" rel="norefferer" href={demo}>Demo</a>}
                            </div>
                        </div>
                        <div style={styles.projectDescription}>{description !== '' && description}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default withShowSelectedCategory(ProjectsSection, 'projects');
