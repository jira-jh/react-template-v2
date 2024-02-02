import { createModel } from '@rematch/core'
import { RootModel } from '../root.store'
import { callGet } from '../../shared/axios.service'
import { environment } from '../../enviroments/environment'

const { API_HOSTNAME } = environment

const DEFAULT_STATE = {
	jsonPayload: []
}

export const example = createModel<RootModel>()({
	state: DEFAULT_STATE,
	reducers: {
		SET_EXAMPLE_PAYLOAD(state, payload) {
			return { ...state, jsonPayload: payload }
		},
	},
	effects: (dispatch) => ({
		async getJsonPayload(payload) {
			try {
				const response = await callGet(`${API_HOSTNAME}/todos/`)
				dispatch.example.SET_EXAMPLE_PAYLOAD(response)
			} catch (error) {
				console.log(error, '<--- error')
			}
		},
	})
})
