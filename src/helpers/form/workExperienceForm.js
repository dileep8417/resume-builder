export const workExperienceFormTemplate = {
    formHeading: 'Work Experience',
    url: '/details/work_experience',
    fields: {
        companyName: {
            label: 'Company Name',
            placeholder: 'EX: Microsoft',
        },
        roleName: {
            label: 'Role Name',
            placeholder: 'EX: Software Developer'
        },
        startDate: {
            label: 'Start Date',
            placeholder: 'EX: Role started date',
        },
        endDate: {
            label: 'End Date',
            placeholder: 'EX: Role end date',
        },
        location: {
            label: 'Work Location',
            placeholder: 'Ex: Gurgaon, Haryana',
        },
        workDone: {
            label: 'Work done (Use ** for bullet points)',
            placeholder: 'EX: Software Developer',
            isTxtArea: true
        }
    }
}