import { achievementsFormTemplate } from "../../helpers/form/achievementsForm";
import Form from "../Form";

const Achievements = () => {

    return (
        <div>
            <Form categoryType='achievements' formTemplate={achievementsFormTemplate} />
        </div>
    );
}

export default Achievements;