import { createModel } from '@rematch/core'
import { RootModel } from '../root.store'
import { callPost } from '../../shared/axios.service'

const DEFAULT_STATE = {
	profile: [],
}

export const authentication = createModel<RootModel>()({
	state: DEFAULT_STATE,
	reducers: {
		SET_AUTH_STATE(state, payload) {
			return { ...state, profile: payload }
		},
	},
	effects: (dispatch) => ({
		async login(payload) {
			try {
				const response = await callPost('LOGIN URL', payload)
				const { access, refresh } = response
				dispatch.auth.SET_AUTH_STATE({
					accessToken: access,
					refreshToken: refresh,
					isAuthenticated: true
				})
			} catch (error) {
				console.log(error, '<--- error')
			}
		},
		async logout(payload) {
			try {
				const response = await callPost('LOGOUT URL')
				dispatch.auth.SET_AUTH_STATE([])
				window.location.href = '/login'
			} catch (error) {
				console.log(error, '<--- error')
			}
		}
	})
})
