import { useDispatch } from "react-redux";
import { addForm } from "../features/formData/formSlice";

const withAddForm = (FormActionComponent, formType) => {
    
    const EnhancedComponent = (props) => {
        const dispatch = useDispatch();
    
        function addFormClickHandler() {
            dispatch(addForm(formType));
        }

        return <FormActionComponent {...props} addFormClickHandler={addFormClickHandler} />;
    }

    return EnhancedComponent;
}

export default withAddForm;