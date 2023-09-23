/**
 * Nuxt will automatically read any files in the ~/server/plugins directory and register them as Nitro plugins. This allows extending Nitro's runtime behavior and hooking into lifecycle events.
 * Nuxt会自动读取 ~/server/plugins 目录中的任何文件并将它们注册为Nitro插件。这允许扩展 Nitro 的运行时行为并挂钩生命周期事件。
 */

export default defineNitroPlugin((nitroApp) => {
    console.log('Nitro plugin', nitroApp)
})
