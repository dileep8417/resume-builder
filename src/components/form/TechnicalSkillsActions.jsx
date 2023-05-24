import withAddForm from "../../hoc/withAddForm";

const TechnicalSkillsActions = ({ styles, addFormClickHandler }) => {
    return (
        <div className={styles.actionContainer}>
            <button className="btnTerinary" onClick={addFormClickHandler}>Add Another Category</button>
        </div>
    );
}

export default withAddForm(TechnicalSkillsActions, 'technicalSkills');