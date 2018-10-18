import axios from 'axios'
import { SET_DATA } from 'actions/types'

const statisticsMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  if (action.type === 'FETCH_DATA') {
    axios.get(action.meta.url)
      .then(({data}) => store.dispatch({
        type: SET_DATA,
        data
      }))
      .catch( err => console.log('error: ', err))
  }
}

export default statisticsMiddleware