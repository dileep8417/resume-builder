import { Link, Text, View } from "@react-pdf/renderer";

const ProjectsSection = ({ styles, projects }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.heading}>Recent Projects</Text>
            
            {projects.map(project => {
                const title = project.fields.projectName.trim();
                const description = project.fields.description.trim();
                const sourceCode = project.fields.sourceCode.trim();
                const demo = project.fields.demo.trim();

                return (
                    <View key={project.id} style={styles.project}>
                        <View style={styles.flexContainer}>
                            <Text style={{...styles.subHeading, ...{marginBottom: '0'}}}>{title !== '' && title}</Text>
                            <View>
                                {sourceCode.length > 7 && <Link style={{margin: '0 12px 0 0', textDecoration: 'none'}} target="_blank" src={sourceCode}>Source code</Link>}
                                {demo.length > 7 && <Link style={{textDecoration: 'none'}} target="_blank" src={demo}>Demo</Link>}
                            </View>
                        </View>
                        <Text style={styles.projectDescription}>{description !== '' && description}</Text>
                    </View>
                )
            })}

        </View>
    );
}

export default ProjectsSection;
