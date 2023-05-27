export function getCategoriesState() {
    return JSON.parse(localStorage.getItem('categories')) || [
        {
            id: 'personalDetails',
            name: 'Personal Details',
            isSelected: true,
            isMandatory: true,
            toShowInSelection: true,
        },
        {
            id: 'summary',
            name: 'Summary',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'workExperience',
            name: 'Work Experience',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'education',
            name: 'Education',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'projects',
            name: 'Projects',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'softSkills',
            name: 'Soft Skills',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'technicalSkills',
            name: 'Technical Skills',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'accomplishments',
            name: 'Accomplishments',
            isSelected: false,
            toShowInSelection: true
        },
        {
            id: 'workLinks',
            name: 'Work Links',
            isSelected: false,
            toShowInSelection: true
        },
    ];
}

export function isCategoriesSelected(categories) {
    return categories.some(category => category.isSelected && !category.isMandatory)
}

export function isCategorySelected(categoryName, categories) {
    return categories.some(category => category.id === categoryName && category.isSelected)
}

export function getCategoryRoute(categoryName) {
    return '/details/' + categoryName.toLowerCase().trim().replace(' ', '_');
}

export function getSelectedCategories() {
    const categories = getCategoriesState();
    const selectedCategories = [];
    categories.forEach(category => {
        if (!category.isSelected) {
            return;
        }
        selectedCategories[category.id] = category.isSelected;
    });

    return selectedCategories;
}