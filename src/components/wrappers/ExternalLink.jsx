import { Link } from "@react-pdf/renderer";

const ExternalLink = ({ href, children, styles }) => {
    function clickHandler(e) {
        e.preventDefault();
        window.open(href, '_blank');
    }

    return (
        <a target="_blank" rel="noopener noreferrer" href={href} onClick={clickHandler} style={styles}>{children}</a>
    )
}

export default ExternalLink;