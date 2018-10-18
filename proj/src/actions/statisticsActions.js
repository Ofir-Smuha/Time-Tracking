import { FETCH_DATA } from 'actions/types'

export const fetchData = () => ({
  type: FETCH_DATA,
  meta: {
    type: 'api',
    url: 'http://ofir.com/api/data'
  }
})