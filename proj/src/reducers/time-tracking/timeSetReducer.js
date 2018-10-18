import { UPDATE_OFFSET } from 'actions/types'

const setTime = (state, action) => {
  switch (action.type) {
    case UPDATE_OFFSET:
    if(action.offset === 7) {
      return state.offset + 7
    }
    return state.offset - 7
  }
}

export default setTime