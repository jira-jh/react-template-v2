import { Models } from '@rematch/core'
import { authentication } from './service/auth.service'
import { global } from './service/global.service'
export interface RootModel extends Models<RootModel> {
	authentication: typeof authentication
	global: typeof global
}

export const models: RootModel = {
	authentication,
	global
}
