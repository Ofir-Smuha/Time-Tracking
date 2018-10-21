import axios from 'axios'

const ApiMiddleware = ({dispatch}) => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    console.log('going to next')
    return next(action);
  }
  
  axios.get(action.meta.url)
    .then(({data}) => dispatch(action.payload.onSuccess(data)))
    .catch( err => console.log('error: ', err))
  if (action.meta.method === 'get') {}
  if (action.meta.method === 'post') {}
  if (action.meta.method === 'delete') {}
  if (action.meta.method === 'put') {}
}

export default ApiMiddleware