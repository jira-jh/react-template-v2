import { createModel } from '@rematch/core'
import { RootModel } from '../root.store'
import { callPost } from '../../services/axios.service'
import { Response } from '../../utils/ResponseModule'

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
			const funcName = 'login'
			try {
				const response = await callPost('LOGIN URL', payload)
				const { access, refresh } = response
				const data = {
					accessToken: access,
					refreshToken: refresh,
					isAuthenticated: true
				}
				dispatch.auth.SET_AUTH_STATE(data)
				return Response(data, false, funcName, 'Login Success')
			} catch (error: any) {
				console.log(error, '<--- error')
				return Response(error.data, true, funcName, 'Login Error')
			}
		},
		async logout(payload) {
			const funcName = 'logout'
			try {
				dispatch.auth.SET_AUTH_STATE([])
				window.location.href = '/login'
				return Response([], false, funcName, 'Logout Success')
			} catch (error: any) {
				console.log(error, '<--- error')
				return Response(error.data, true, funcName, 'Logout Error')
			}
		}
	})
})
