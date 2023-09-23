/**
 * For example, you can define a custom handler utility that wraps the original handler and performs additional operations before returning the final response.
 * 例如，您可以定义一个自定义处理程序实用程序，该实用程序包装原始处理程序并在返回最终响应之前执行其他操作。
 */

import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D>(
    handler: EventHandler<T, D>
): EventHandler<T, D> =>
    defineEventHandler<T>(async event => {
        try {
            // do something before the route handler
            const response = await handler(event)
            // do something after the route handler
            return { response }
        } catch (err) {
            // Error handling
            return { err }
        }
    })
