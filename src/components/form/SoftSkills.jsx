import { softSkillsFormTemplate } from "../../helpers/form/softSkillsForm";
import Form from "../Form";

const SoftSkills = () => {

    return (
        <div>
            <Form categoryType='softSkills' formTemplate={softSkillsFormTemplate} />
        </div>
    );
}

export default SoftSkills;