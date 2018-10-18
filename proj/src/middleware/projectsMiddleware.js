import axios from 'axios'

import { SET_PROJECTS } from 'actions/types'

const projectsMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  
  if (action.type === 'FETCH_PROJECTS') {
    axios.get(action.meta.url)
      .then(({data}) => store.dispatch({
        type: SET_PROJECTS,
        projects: data
      }))
      .catch( err => console.log('error: ', err))
  }
}

export default projectsMiddleware