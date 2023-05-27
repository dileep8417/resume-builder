const styles = {
    resume: {
        position: 'relative',
        width: '611px',
        minHeight: '842px',
        background: '#FFFFFF',
        margin: 'auto',
        padding: '24px',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '11px',
        lineHeight: 1.2727,
        color: '#000000',
    },
    
    heading: {
        fontWeight: '900',
        fontSize: '12px',
        lineHeight: 1,
        color: '#2E4064',
        margin: '0 0 10px',
    },
    
    subHeading: {
        fontWeight: '700',
        fontSize: '11px',
        lineHeight: 1.2727,
        margin: '0 0 6px',
    },

    txtContent: {
        fontWeight: '400',
        fontSize: '11px',
        lineHeight: 1.2727,
        color: '#000000',
    },
    
    personName: {
        fontWeight: '900',
        fontSize: '24px',
        lineHeight: 1.1,
        color: '#2E4064',
    },
    
    body: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        gap: '32px',
    },
    
    leftContainer: {
        flex: '1',
    },
    
    rightContainer: {
        width: '190px',
    },
    
    rightContainerPdf: {
        width: '168px',
    },

    section: {
        margin: '24px 0 0',
    },
    
    companies: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
    },
    
    companyName: {
        margin: '0 0 6px',
    },
    
    locationSeparator: {
        fontSize: '8px',
        margin: '0 4px 0',
        color: '#000000',
    },
    
    role: {
        padding: '0 0 0 4px'
    },

    roleName: {
        marginBottom: '0',
    },
    
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    
    workDone: {
        padding: '0 0 0 24px',
    },

    workDonePdf: {
        padding: '0 0 0 8px'
    },
    
    collegeInfo: {
        margin: '6px 0 0',
    },
    
    collegeName: {
        margin: '0 0 6px',
    },
    
    listItem: {
        margin: '0 0 0 24px',
        listStyleType: 'circle',
    },
    
    project: {
        margin: '0 0 14px',
    },

    projectDescription: {
        margin: '6px 0 0',
    },
    
    skillCategories: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
    },
    
    skillCategory: {
        display: 'flex',
        flexDirection: 'column',
    },

    link: {
        textDecoration: 'none',
        color: '#000000',
        wordBreak: 'break-all'
    },
    
    listItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
    },

    listWithIcon: {
        display: 'flex',
        flexDirection: 'row',
        gap: '6px',
        alignItems: 'center'
    },

    listIcon: {
        width: '11px',
        height: '11px',
        position: 'relative',
    },
}

export default styles;