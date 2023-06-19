const baseUrl = 'https://192.168.50.112:8080';

module.exports = {
    /*
     * url:请求的接口地址
     * methodType:请求方式
     * data: 要传递的参数
    */
      request : function(url, methodType, data){
        let fullUrl = `${baseUrl}${url}`
        let token = wx.getStorageSync('token') ? wx.getStorageSync('token')  : ''
        wx.showLoading({ title: "加载中"  });
        return new Promise((resolve,reject)=>{
          wx.request({
            url: fullUrl,
            method:methodType,
            data,
            header: {
              'content-type': 'application/json', // 默认值
              'x-api-key': token,
            },
            success: (res) => {
              if (res.data.status == 200) {
                resolve(res.data)
              }else{
                wx.showToast({
                  title: res.data.msg,
                  icon:'none'
                })
                reject(res.data.message)
              }
            },
            fail: () => {
              wx.showToast({
                title: '接口请求错误',
                icon:'none'
              })
              reject('接口请求错误')
            },
            complete: () => {
              setTimeout(() => {
                wx.hideLoading()
              }, 100)
            }
          })
        })
      }
    }