import { useSelector, useDispatch } from 'react-redux';
import { removeFrom, updateField } from '../features/formData/formSlice';
import { Link } from 'react-router-dom';
import routes from '../utils/routes';
import styles from '../styles/components/Form.module.css';
import WorkExperienceActions from './form/WorkExperienceActions';
import { BsFillTrash3Fill } from 'react-icons/bs';
import EducationActions from './form/EducationActions';
import ProjectsActions from './form/ProjectsActions';
import TechnicalSkillsActions from './form/TechnicalSkillsActions';
import { useEffect } from 'react';

const Form = ({ categoryType, formTemplate }) => {
    const formData = useSelector(state => state.formData[categoryType]);
    
    const nxtStepLink = getNxtStepLink();

    const dispatch = useDispatch();

    function fieldChangeHandler(e) {
        const data = {
            formId: e.target.form.id,
            category: categoryType,
            fieldName: e.target.name,
            value: e.target.value
        }
        dispatch(updateField(data));
    }

    function removeFormClickHandler(formId) {
        const data = {
            formId: formId,
            category: categoryType
        }
        dispatch(removeFrom(data))
    }

   useEffect(() => {
    localStorage.setItem(categoryType, JSON.stringify(formData));
   }, [formData]);

    function getNxtStepLink() {
        const selectedCategories = useSelector(state => state.categories.filter(category => category.isSelected));
        let nxtLink = '';
        let getLinkFromNxtCategory = false;
        selectedCategories.forEach(category => {
            if (getLinkFromNxtCategory) {
                nxtLink = routes[category.id];
                getLinkFromNxtCategory = false;
            }
            if (category.id === categoryType) {
                getLinkFromNxtCategory = true;
            }
        });
        return nxtLink;
    }

    return (
        <div className={styles.formContent}>
            <div className={styles.fomrHeader}>
                <div className={styles.formHeading}>{formTemplate.formHeading}</div>
            </div>

            <div className={styles.forms}>
                {formData.map(form => {
                    return (
                        <div className={styles.form} key={form.id}>
                            <form id={form.id}>
                                {Object.keys(form.fields).map(fieldName => {
                                    if (form.excludeFields && form.excludeFields.includes(fieldName)) {
                                        return;
                                    }
                                    const field = formTemplate.fields[fieldName];
                                    return (
                                        <div className={styles.formGroup} key={fieldName}>
                                            <label>{field.label}</label>
                                            {field.isTxtArea ? (<textarea name={fieldName} value={form.fields[fieldName]} placeholder={field.placeholder} onChange={fieldChangeHandler}></textarea>) : (<input type="text" value={form.fields[fieldName]} name={fieldName} autoComplete='off' placeholder={field.placeholder} onChange={fieldChangeHandler} />)}
                                        </div>
                                    )
                                })}
                            </form>
                            {form.canRemove && (<span className={styles.removeForm} onClick={() => removeFormClickHandler(form.id)}><BsFillTrash3Fill /></span>)}
                        </div>
                    );
                })}
            </div>

            {categoryType === 'workExperience' && <WorkExperienceActions styles={styles} />}
            {categoryType === 'education' && <EducationActions styles={styles} />}
            {categoryType === 'projects' && <ProjectsActions styles={styles} />}
            {categoryType === 'technicalSkills' && <TechnicalSkillsActions styles={styles} />}

            <div className={styles.btnContainer}>
                {nxtStepLink ? (
                    <Link to={nxtStepLink} className={`primary_btn ${styles.btn}`}>Next Step</Link>
                ) : (
                    <Link to={routes['preview']} className={`primary_btn ${styles.btn}`}>Preview details</Link>
                )}
            </div>
            
        </div>
    );
}

export default Form;