import { MdZoomOutMap } from 'react-icons/md';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowsMinimize } from 'react-icons/tb';
import { AiOutlineClear } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/Resume.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFormData } from '../../features/formData/formSlice';
import routes from '../../utils/routes';
import { updateFontSize } from '../../features/resume/resumeSlice';

const ResumeOptionsHeader = ({ isPreviewMode }) => {
    const navigate = useNavigate();

    const selectedFont = useSelector(state => state.resume.fontSize);
    const dispatch = useDispatch();

    function resetResumeHandler() {
        dispatch(resetFormData());
    }

    function fontChangeHandler(e) {
        dispatch(updateFontSize(e.target.value));
    }

    useEffect(() => {
        localStorage.setItem('fontSize', selectedFont);
    }, [selectedFont]);

    const fontSizes = [10, 11, 12];

    return (
        <div className={styles.optionsContainer}>
            <select onChange={fontChangeHandler} value={selectedFont}>
                {fontSizes.map(size => {
                    return <option key={size} value={size}>{size}</option>
                })}
            </select>
            <abbr title="Generate PDF">
                <BsFileEarmarkPdf className={styles.icon} onClick={() => navigate(routes.resume)} />
            </abbr>
            <abbr title="Reset Resume Data">
                <AiOutlineClear className={styles.icon} onClick={resetResumeHandler} />
            </abbr>
            {isPreviewMode && (
            <abbr title="Maximize">
                <MdZoomOutMap className={styles.icon} onClick={() => navigate(routes.preview)}/>
            </abbr>
            )}
            {!isPreviewMode && (
            <abbr title="Minimize">
                <TbArrowsMinimize className={styles.icon} onClick={() => navigate(-1)}/>
            </abbr>
            )}
      </div>
    );
}

export default ResumeOptionsHeader;