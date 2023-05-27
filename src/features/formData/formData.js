import { getUID } from "../../utils/utils";

export const loadFormData = (categoryName) => {
    return JSON.parse(localStorage.getItem(categoryName)) || [defaultFormData[categoryName]];
}

export const resetForm = (categoryName) => {
    localStorage.removeItem(categoryName);
    return [defaultFormData[categoryName]];
}

export const defaultFormData = {
    personalDetails: {
        id: getUID(),
        fields: {
            name: '',
            mobile: '',
            mail: '',
            address: '',
        }
    },
    summary: {
        id: getUID(),
        fields: {
            summary: ''
        }
    },
    education: {
        id: getUID(),
        fields: {
            degree: '',
            college: '',
            startDate: '',
            endDate: '',
            location: '',
            cgpa: '',
        }
    },
    technicalSkills: {
        id: getUID(),
        fields: {
            categoryName: '',
            skills: ''
        }
    },
    workExperience: {
        id: getUID(),
        fields: {
            companyName: '',
            roleName: '',
            startDate: '',
            endDate: '',
            location: '',
            workDone: ''
        }
    },
    projects: {
        id: getUID(),
        fields: {
            projectName: '',
            description: '',
            sourceCode: '',
            demo: '',
        }
    },
    softSkills: {
        id: getUID(),
        fields: {
            skills: ''
        }
    },
    workLinks: {
        id: getUID(),
        fields: {
            portfolio: '',
            github: '',
            linkedin: '',
            other: ''
        }
    },
    accomplishments: {
        id: getUID(),
        fields: {
            accomplishment: '',
        }
    },
}