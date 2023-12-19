import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import persist from '@rematch/persist'
import storage from 'redux-persist/lib/storage'
import { models, RootModel } from './root.store'


export const store = init<RootModel>({
	models,
	plugins: [
		persist({
			key: 'template-react-typescript',
			storage,
			whitelist: ['authentication'],
		}),
	],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
