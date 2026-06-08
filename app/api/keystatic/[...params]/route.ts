import { makeNextjsRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../keystatic.config'

export const { GET, POST } = makeNextjsRouteHandler(config)
