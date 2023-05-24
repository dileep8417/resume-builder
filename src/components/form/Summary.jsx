import { summaryFormTemplate } from "../../helpers/form/SummaryForm";
import Form from "../Form";

const Summary = () => {

    return (
        <div>
            <Form categoryType='summary' formTemplate={summaryFormTemplate} />
        </div>
    );
}

export default Summary;