export const request = (params) => {
    return new Promise((resolve,reject) => {
        uni.request({
			//当时测试用的内网ip
            url: 'http://200.200.200.21:18089' + params.url,
            data: params.data,
            method: params.method,
            success: (result) => {
                resolve(result)
            },
            fail: (response) => {
                reject(response)
            }
        })
    })
}