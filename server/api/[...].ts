
/**
 * @description Catch-all routes are helpful for fallback route handling. For example, creating a file named ~/server/api/foo/[...].ts will register a catch-all route for all requests that do not match any route handler, such as /api/foo/bar/baz.
 */

export default defineEventHandler(() => `Default api handler`)
