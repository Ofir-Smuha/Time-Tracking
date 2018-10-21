import * as AT from 'actions/types'

export const addProject = (project) => ({
  type: AT.ADD_PROJECT,
  project
})

export const deleteProject = (projectId) => ({
  type: AT.DELETE_PROJECT,
  projectId
})

export const openEditProject = (project) => ({
  type: AT.OPEN_EDIT_PROJECT,
  project
})

export const closeEditModal = () => ({
  type: AT.CLOSE_EDIT_PROJECT
})

export const isLoading = () => ({
  type: AT.IS_LOADING
})

export const editProject = (project) => ({
  type: AT.EDIT_PROJECT,
  project
})

export const fetchProjects = () => ({
  type: AT.API_REQUEST,
  payload: {
    onSuccess: setProjects,
    onError: setError
  },
  meta: {
      type: 'api',
      url: 'http://ofir.com/api/projects',
  }
})

export const setProjects = (projects) => ({
  type: AT.SET_PROJECTS,
  projects
})

export const setError = () => ({

})