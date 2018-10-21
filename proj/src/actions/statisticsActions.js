import * as AT from 'actions/types'

export const fetchData = () => ({
  type: AT.API_REQUEST,
  payload: {
    onSuccess: setData,
    onError: setError
  },
  meta: {
    type: 'api',
    url: 'http://ofir.com/api/data'
  }
})

export const setData = (data) => ({
  type: AT.SET_DATA,
  data
})


export const setError = () => ({
  
})