import { MdZoomOutMap } from 'react-icons/md';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowsMinimize } from 'react-icons/tb';
import { AiOutlineClear } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/Resume.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFormData } from '../../features/formData/formSlice';
import routes from '../../utils/routes';

const ResumeOptionsHeader = ({ isPreviewMode }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    function resetResumeHandler() {
        dispatch(resetFormData());
    }

    return (
        <div className={styles.optionsContainer}>
            
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