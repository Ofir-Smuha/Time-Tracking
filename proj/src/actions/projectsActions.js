import {OPEN_EDIT_PROJECT, DELETE_PROJECT, CLOSE_EDIT_PROJECT, IS_LOADING, EDIT_PROJECT, ADD_PROJECT, FETCH_PROJECTS} from 'actions/types'

export const addProject = (project) => ({
  type: ADD_PROJECT,
  project
})

export const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  projectId
})

export const openEditProject = (project) => ({
  type: OPEN_EDIT_PROJECT,
  project
})

export const closeEditModal = () => ({
  type: CLOSE_EDIT_PROJECT
})

export const isLoading = () => ({
  type: IS_LOADING
})

export const editProject = (project) => ({
  type: EDIT_PROJECT,
  project
})

export const fetchProjects = () => ({
    type: FETCH_PROJECTS,
    meta: {
        type: 'api',
        url: 'http://ofir.com/api/projects'
    }
})

