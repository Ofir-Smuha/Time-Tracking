import { SET_DATES, UPDATE_OFFSET, CHANGE_TIME } from 'actions/types'

export const setDates = (dates) => ({
  type: SET_DATES,
  dates
})

export const updateOffset = (offset) => ({
  type: UPDATE_OFFSET,
  offset
})

export const changeTime = (hoursValue, id) => ({
  type: CHANGE_TIME,
  hoursValue,
  id
})
