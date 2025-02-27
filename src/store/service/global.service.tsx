import { createModel } from '@rematch/core'
import { RootModel } from '../root.store'

const DEFAULT_STATE = {
  CurrentRoute: null,
  toothSize: []
}

export const global = createModel<RootModel>()({
  state: DEFAULT_STATE,
  reducers: {
    SET_NAVIGATE(state, payload) {
      return { ...state, CurrentRoute: payload }
    },
    SET_TOOTH_SIZE(state, payload) {
      return { ...state, toothSize: payload }
    }
  },
  effects: (_dispatch) => ({
    // Function Here
  })
})