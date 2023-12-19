import { Models } from '@rematch/core'
import { authentication } from './service/auth.service'
import { example } from './service/example.service'

export interface RootModel extends Models<RootModel> {
	authentication: typeof authentication
	example: typeof example
}

export const models: RootModel = {
	authentication,
	example
}
