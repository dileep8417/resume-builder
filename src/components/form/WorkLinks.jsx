import { workLinksFormTemplate } from "../../helpers/form/workLinksForm";
import Form from "../Form";

const WorkLinks = () => {

    return (
        <div>
            <Form categoryType='workLinks' formTemplate={workLinksFormTemplate} />
        </div>
    );
}

export default WorkLinks;