const basePath = import.meta.env.BASE_URL || '/';

const routes = {
    home: basePath,
    categories: basePath + 'categories',
    preview: basePath + 'preview',
    resume: basePath + 'resume',
    personalDetails: basePath + 'details/personal_details',
    summary: basePath + 'details/summary',
    education: basePath + 'details/education',
    technicalSkills: basePath + 'details/technical_skills',
    workExperience: basePath + 'details/work_experience',
    projects: basePath + 'details/projects',
    softSkills: basePath + 'details/soft_skills',
    workLinks: basePath + 'details/work_links',
    accomplishments: basePath + 'details/accomplishments'
}

export default routes;