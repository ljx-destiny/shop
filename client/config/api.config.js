const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://lijiaxin.itnote.cn/api/' : 'api/'
}