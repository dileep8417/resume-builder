import { educationFormTemplate } from "../../helpers/form/educationForm";
import Form from "../Form";

const Education = () => {

    return (
        <div>
            <Form categoryType='education' formTemplate={educationFormTemplate} />
        </div>
    );
}

export default Education;