import { createSlice } from '@reduxjs/toolkit';
import { defaultFormData, loadFormData } from './formData';
import { getUID } from '../../utils/utils';

const initialState = {
    personalDetails: loadFormData('personalDetails'),
    summary: loadFormData('summary'),
    education: loadFormData('education'),
    technicalSkills: loadFormData('technicalSkills'),
    workExperience: loadFormData('workExperience'),
    projects: loadFormData('projects'),
    softSkills: loadFormData('softSkills'),
    workLinks: loadFormData('workLinks'),
    accomplishments: loadFormData('accomplishments'),
};

const formSlice = createSlice({
    name: 'form',
    initialState: initialState,
    reducers: {
        updateField: (state, action) => {
            const data = action.payload;
            state[data.category].some(form => {
                if (form.id === data.formId) {
                    form.fields[data.fieldName] = data.value;
                    return true;
                }
            })
        },
        removeFrom: (state, action) => {
            const formId = action.payload.formId;
            state[action.payload.category] = state[action.payload.category].filter(form => form.id !== formId);
        },
        addForm: (state, action) => {
            const category = action.payload;
            state[category].push({...defaultFormData[category], ...{id: getUID(), canRemove: true}});
        },
        addRole: (state) => {
            state.workExperience.push({...defaultFormData['workExperience'], ...{id: getUID(), excludeFields: ['companyName', 'location'], canRemove: true}});
        },
    }
});

export const formReducer = formSlice.reducer;

export const {updateField, removeFrom, addForm, addRole} = formSlice.actions;