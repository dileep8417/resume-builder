import { useDispatch } from "react-redux";
import { addForm, addRole } from "../../features/formData/formSlice";

const WorkExperienceActions = ({ styles }) => {
    const dispatch = useDispatch();

    function addRoleClickHandler() {
        dispatch(addRole());
    }

    function addCompanyClickHandler() {
        dispatch(addForm('workExperience'));
    }

    return (
        <div className={styles.actionContainer}>
            <button className="btnTerinary" onClick={addRoleClickHandler}>Add Another Role</button>
            <button className="btnTerinary" onClick={addCompanyClickHandler}>Add Company</button>
        </div>
    );
}

export default WorkExperienceActions;