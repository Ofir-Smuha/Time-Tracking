import * as AT from 'actions/types'

export const setDates = (dates) => ({
  type: AT.SET_DATES,
  dates
})

export const updateOffset = (offset) => ({
  type: AT.UPDATE_OFFSET,
  offset
})

export const changeTime = (hoursValue, id) => ({
  type: AT.CHANGE_TIME,
  hoursValue,
  id
})
