import * as AT from 'actions/types'

export const fetchStatistics = () => ({
  type: AT.API_REQUEST,
  payload: {
    onSuccess: setStatistics,
    onError: setError
  },
  meta: {
    type: 'api',
    url: 'http://ofir.com/api/data'
  }
})

export const setStatistics = (data) => ({
  type: AT.SET_STATISTICS,
  data
})


export const setError = () => ({
  
})