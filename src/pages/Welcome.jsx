import { Link } from 'react-router-dom';
import styles from '../styles/pages/Welcome.module.css';
import { IntoPageHeading, IntroPageSubHeading, instructionSteps, welcomeMsg, instructionsMsg } from '../utils/constants';

const Welcome = () => {
    return (
        <div className={styles.welcome_page}>
            <div className={styles.header}>
                <div className={styles.page_heading}>
                    {IntoPageHeading}
                </div>
                <div className={styles.page_sub_heading}>
                    {IntroPageSubHeading}
                </div>
                <Link to='/categories'>
                    <button className="primary_btn">Build Now</button>
                </Link>
            </div>

            <div className={styles.bottom_section}>
                <div className={styles.welcome_txt}>
                    {welcomeMsg}
                </div>
                
                <div className={styles.instructions_msg}>
                    {instructionsMsg}
                </div>

                <div className={styles.instructions_container}>
                    {Object.keys(instructionSteps).map(key => {
                        return (
                            <div className={styles.step} key={key}>
                                <div className={styles.step_heading}>{key}</div>
                                <div className={styles.instruction} dangerouslySetInnerHTML={{__html: instructionSteps[key]}} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Welcome;