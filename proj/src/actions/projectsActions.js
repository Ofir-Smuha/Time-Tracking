import * as AT from 'actions/types'

export const fetchProjects = () => ({
  payload: {
    onSuccess: setProjects,
    onError: setError
  },
  meta: {
      type: 'firebase',
      databaseURL: 'projects',
      method: 'get'
  }
})

export const setProjects = ({projects}) => ({
  type: AT.SET_PROJECTS,
  projects
})

export const setAddedProject = (item) => ({
  payload: {
    onSuccess: addProject,
    onError: setError,
    item
  },
  meta: {
      type: 'firebase',
      databaseURL: 'projects',
      method: 'post'
  }
})

export const addProject = (project) => ({
  type: AT.ADD_PROJECT,
  project
})

export const setDeletedProject = (projectId) => ({
  payload: {
    onSuccess: deleteProject,
    onError: setError,
    itemId: projectId
  },
  meta: {
      type: 'firebase',
      databaseURL: 'projects',
      method: 'delete'
  }
})

export const deleteProject = (projectId) => ({
  type: AT.DELETE_PROJECT,
  projectId
})

export const setEditedProject = (project) => ({
  payload: {
    onSuccess: editProject,
    onError: setError,
    item: project
  },
  meta: {
      type: 'firebase',
      databaseURL: 'projects',
      method: 'put'
  }
})

export const editProject = (project) => ({
  type: AT.EDIT_PROJECT,
  project
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

// Generic set error
export const setError = () => ({

})
