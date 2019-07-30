Page({
  data: {
    src: "",
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        const path = this.data.src
        wx.uploadFile({
          url: 'https://api.yimei.ai/v2/api/face/analysis/4096', //宜远智能肤质检测（脸型）
          filePath: path,
          name: 'image',
          method: "POST",
          header: {
            "Accept": "application/json",
            /**指定客户端能够接收的内容类型，内容类型中的先后次序表示客户端接收的先后次序**/
            "Content-Type": "multipart/form-data",
            "Authorization": 'Basic YTVlOGE4YWIyN2EyNTRhZTo4NTQwNTc5NWQ2ZGIyOGNlNmNhYjk2Mzc3ODNmYzIwOA=='
          },
          success(res) {
            const data = res.data
            console.log(data)
            console.log(res.statusCode)
          }
        })
        console.log(this.data.src)
      }
    })
    // const test = this.data.src
    wx.setStorage({
      key: "fuzhi",
      data: "this.data.src"
    })
  },
  choosePhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://api.yimei.ai/v2/api/face/analysis/4096', //宜远智能肤质检测（脸型）
          filePath: tempFilePaths[0],
          name: 'image',
          method: "POST",
          header: {
            "Accept": "application/json",
            /**指定客户端能够接收的内容类型，内容类型中的先后次序表示客户端接收的先后次序**/
            "Content-Type": "multipart/form-data",
            "Authorization": 'Basic YTVlOGE4YWIyN2EyNTRhZTo4NTQwNTc5NWQ2ZGIyOGNlNmNhYjk2Mzc3ODNmYzIwOA=='
          },
          success(res) {
            const data = res.data
            console.log(data)
            console.log(res.statusCode)
          }
        })
        console.log(tempFilePaths)
        // const test = tempFilePaths[0]
        wx.setStorage({
          key: "fuzhi",
          data: "tempFilePaths[0]"
        })
      }
    })
  },
  getReport() {
      wx.getStorage({
        key: 'fuzhi',
        success: function(res) {
          console.log(res.data)
        },
      })
  }
})