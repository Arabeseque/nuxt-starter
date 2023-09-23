// Middleware handlers should not return anything (nor close or respond to the request) and only inspect or extend the request context or throw an error.
// 中间件处理程序不应返回任何内容（也不应关闭或响应请求），而应仅检查或扩展请求上下文或引发错误。
export default defineEventHandler((event) => {
    console.log('New request: ' + getRequestURL(event))
})
