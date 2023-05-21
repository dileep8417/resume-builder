export function getCategoriesState() {
    return JSON.parse(localStorage.getItem('categories')) || [
        {
            name: 'Personal Details',
            isSelected: true,
            isMandatory: true,
            toShowInSelection: true,
        },
        {
            name: 'Summary',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Work Experience',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Education',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Projects',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Soft Skills',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Technical Skills',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Achievements',
            isSelected: false,
            toShowInSelection: true
        },
        {
            name: 'Work Links',
            isSelected: false,
            toShowInSelection: true
        },
    ];
}

export function isCategoriesSelected(categories) {
    return categories.some(category => category.isSelected)
}

export function getCategoryRoute(categoryName) {
    return '/details/' + categoryName.toLowerCase().trim().replace(' ', '_');
}