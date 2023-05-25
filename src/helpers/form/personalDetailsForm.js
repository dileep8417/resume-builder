export const personalDetailsFormTemplate = {
    formHeading: 'Personal Details',
    url: '/details/personal_details',
    fields: {
        name: {
            label: 'Professional name',
            placeholder: 'Ex: Dileep Atyam',
            isMandatory: true,
        },
        mobile: {
            label: 'Contact No.',
            placeholder: 'Ex: 9999999999',
            isMandatory: true,
        },
        mail: {
            label: 'Email ID',
            placeholder: 'Ex: example@gmail.com',
            isMandatory: true,
        },
        address: {
            label: 'City/State',
            placeholder: 'Eluru, Andhra Pradesh',
            isMandatory: true,
        },
    }
}