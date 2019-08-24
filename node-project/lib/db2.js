const koaReq     = require('request')                       //node封装的请求中间件
// node封装的请求中间件http请求

module.exports = function () {
    return async function (ctx,next) {
        // node封装的请求中间件GET请求
        // await koaReq('http://api.douban.com/v2/movie/top250?start=25&count=2', function (error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         console.log(JSON.parse(body))
        //     }
        // })
        await koaReq({
            method: 'get',
            url: 'https://apis.map.qq.com/ws/location/v1/ip',
            qs: {
                key:'UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE'
                
            },
            json: true//设置返回的数据为json
        },function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        })

        await next()
    }
}