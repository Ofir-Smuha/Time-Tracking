import { handleActions, combineActions } from 'redux-actions';
import { set, unset, flow } from 'lodash/fp'

import { ADD_PROJECT, EDIT_PROJECT } from 'actions/types'

const initialState = {
    isLoading: false,
    displayEditModal: false,
    displayMode: 'list',
    currProject: null,
    items: {}
};


export default handleActions({
    [combineActions(
        ADD_PROJECT,
        EDIT_PROJECT
        )]: (state, payload) =>
        flow([
            set('displayEditModal', false),
            set('isLoading', false)
        ])(state)
    ,
    ADD_PROJECT: (state, {project}) => 
        set(['items', project.id], project, state)
    ,
    DELETE_PROJECT: (state, {projectId}) => 
        unset(['items', projectId], state)
    ,
    OPEN_EDIT_PROJECT: (state, {project}) => 
        flow([
            set('currProject', project),
            set('displayEditModal', true)
        ])(state)
    ,
    CLOSE_EDIT_PROJECT: (state, action) => 
        set('displayEditModal', false, state)
    ,
    IS_LOADING: (state, action) => 
        set('isLoading', true, state)
    ,
    EDIT_PROJECT: (state, {project}) => 
        flow([
            set(['items', project.id], project),
            set('currProject', null),
        ])(state)
    ,
    SET_PROJECTS: (state, {projects}) =>  {
        return set('items', projects, state)
    }
}, initialState);