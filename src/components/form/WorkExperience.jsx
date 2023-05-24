import { workExperienceFormTemplate } from "../../helpers/form/workExperienceForm";
import Form from "../Form";

const WorkExperience = () => {

    return (
        <div>
            <Form categoryType='workExperience' formTemplate={workExperienceFormTemplate} />
        </div>
    );
}

export default WorkExperience;