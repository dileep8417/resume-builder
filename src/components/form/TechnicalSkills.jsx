import { technicalSkillsFormTemplate } from "../../helpers/form/technicalSkillsForm";
import Form from "../Form";

const TechnicalSkills = () => {

    return (
        <div>
            <Form categoryType='technicalSkills' formTemplate={technicalSkillsFormTemplate} />
        </div>
    );
}

export default TechnicalSkills;