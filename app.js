//app.js
// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               // 可以将 res 发送给后台解码出 unionId
//               this.globalData.userInfo = res.userInfo

//               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//               // 所以此处加入 callback 以防止这种情况
//               if (this.userInfoReadyCallback) {
//                 this.userInfoReadyCallback(res)
//               }
//             }
//           })
//         }
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// })
//app.js
App({
  globalData: {
    //跳转的真实路径
    realUrl: null,
    //跳转的参数
    realUrlParam: null,
    //跳转到视频发布者的id
    publisherId: null,
  },
  //可能不在同一个网段 
  //https://www.lotcloudy.com/scetc-show-videos-mini-api-0.0.1-SNAPSHOT
  // https://www.lotcloudy.com/scetc-show-videos-mini-api-0.0.1-SNAPSHOT
  //http://localhost:8080/scetc-show-videos-mini-api/
  serverUrl: "https://www.lotcloudy.com/scetc-show-videos-mini-api-0.0.1-SNAPSHOT/",
  userInfo: null,
  //switchTab 不能携带参数，只好将参数作为全局变量来进行保存
  //内网ip的方式访问
  setGlobalUserInfo: function(user) {
    wx.setStorageSync("userInfo", user);
  },
  getGlobalUserInfo: function() {
    return wx.getStorageSync("userInfo");
  },
  saveUserInfo: function(saveUser) {
    wx.setStorageSync("saveUser", saveUser);
  },
  getSaveUserInfo: function() {
    return wx.getStorageSync("saveUser");
  }
}, )