import { Fragment } from "react";
import { isValidURL, showURLLink } from "../../utils/utils";

const WorkLink = ({ link, styles, icon }) => {

    return (
        <Fragment>
            {isValidURL(link) && (
                <div style={styles.listWithIcon}>
                    <img style={styles.listIcon} src={icon} alt="" />
                    <a href={link} target="_blank" rel="norefferrer" style={styles.link}>{showURLLink(link)}</a>
                </div>
            )}
        </Fragment>
    );
}

export default WorkLink;