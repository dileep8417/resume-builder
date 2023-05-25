import { achievementsFormTemplate } from "../../helpers/form/achievementsForm";
import Form from "../Form";

const Accomplishments = () => {

    return (
        <div>
            <Form categoryType='accomplishments' formTemplate={achievementsFormTemplate} />
        </div>
    );
}

export default Accomplishments;