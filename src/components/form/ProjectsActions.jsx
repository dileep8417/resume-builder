import withAddForm from "../../hoc/withAddForm";

const ProjectsActions = ({ styles, addFormClickHandler }) => {
    return (
        <div className={styles.actionContainer}>
            <button className="btnTerinary" onClick={addFormClickHandler}>Add Another Project</button>
        </div>
    );
}

export default withAddForm(ProjectsActions, 'projects');