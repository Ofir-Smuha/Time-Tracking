import axios from 'axios'

const projectsMiddleware = ({dispatch}) => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    console.log('going to next')
    return next(action);
  }
  
  axios.get(action.meta.url)
    .then(({data}) => dispatch(action.payload.onSuccess(data)))
    .catch( err => console.log('error: ', err))
}

export default projectsMiddleware