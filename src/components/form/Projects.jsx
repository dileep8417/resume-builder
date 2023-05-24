import { projectsFormTemplate } from "../../helpers/form/projectsForm";
import Form from "../Form";

const Projects = () => {

    return (
        <div>
            <Form categoryType='projects' formTemplate={projectsFormTemplate} />
        </div>
    );
}

export default Projects;