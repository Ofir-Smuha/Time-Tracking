import * as AT from 'actions/types'

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

// export const fetchProjects = () => ({
//   payload: {
//     onSuccess: setProjects,
//     onError: setError
//   },
//   meta: {
//       type: 'api',
//       url: 'http://ofir.com/api/projects',
//   }
// })

// export const setProjects = (data) => ({
//   type: AT.SET_PROJECTS,
//   projects : data.projects
// })

// export const setError = () => ({

// })

// Firebase 
export const fetchProjects = () => ({
  payload: {
    onSuccess: setProjects,
    onError: setError
  },
  meta: {
      type: 'database',
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
      type: 'database',
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
      type: 'database',
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
      type: 'database',
      databaseURL: 'projects',
      method: 'put'
  }
})

export const editProject = (project) => ({
  type: AT.EDIT_PROJECT,
  project
})

// Generic set error
export const setError = () => ({

})
