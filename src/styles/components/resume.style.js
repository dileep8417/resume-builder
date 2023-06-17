export function getResumeStyles(options) {
    const fontSize = parseInt(options.fontSize);
    const isPreview = options.isPreview;

    return {
        resume: {
            position: 'relative',
            width: '8.27in',
            minHeight: '11.69in',
            background: '#FFFFFF',
            margin: 'auto',
            padding: '24px',
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: fontSize + 'pt',
            lineHeight: 1.2727,
            color: '#000000',
            scale: isPreview ? '0.75' : '1',
            left: isPreview ? '-72px' : '0',
            top: isPreview ? '-102px' : '0',
        },
        
        heading: {
            fontWeight: '900',
            fontSize: fontSize + 'pt',
            lineHeight: 1,
            color: '#2E4064',
            margin: '0 0 10px',
        },
        
        subHeading: {
            fontWeight: '700',
            fontSize: fontSize + 'pt',
            lineHeight: 1.2727,
            margin: '0 0 6px',
        },
    
        txtContent: {
            fontWeight: '400',
            fontSize: fontSize + 'pt',
            lineHeight: 1.2727,
            color: '#000000',
        },
        
        personName: {
            fontWeight: '900',
            fontSize: '21pt',
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
            width: '165pt',
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
    
        projectLinks: {
            display: 'flex',
            flexDirection: 'row',
            gap: '24px'
        },
    
        projectLink: {
            textDecoration: 'none',
            color: '#008BDC',
    
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
            width: fontSize + 'pt',
            height: fontSize + 'pt',
            position: 'relative',
        },
    }
}