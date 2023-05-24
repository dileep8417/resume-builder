import withAddForm from "../../hoc/withAddForm";

const EducationActions = ({ styles, addFormClickHandler }) => {
    return (
        <div className={styles.actionContainer}>
            <button className="btnTerinary" onClick={addFormClickHandler}>Add Another Course</button>
        </div>
    );
}

export default withAddForm(EducationActions, 'education');