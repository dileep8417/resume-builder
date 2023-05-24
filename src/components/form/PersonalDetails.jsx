import { personalDetailsFormTemplate } from "../../helpers/form/personalDetailsForm";
import Form from "../Form";

const PersonalDetails = () => {

    return (
        <div>
            <Form categoryType='personalDetails' formTemplate={personalDetailsFormTemplate} />
        </div>
    );
}

export default PersonalDetails;