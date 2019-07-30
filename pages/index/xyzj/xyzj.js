// pages/index/xyzj/xyzj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  open_details(){
    wx.showActionSheet({
      itemList: ['热门话题', '同肤质在聊', '我要发布','我的主页'],
      success(res) { 
        console.log(res.tapIndex);  
        if (res.tapIndex == 0){

        }
        if (res.tapIndex == 1){

        }
        if (res.tapIndex == 2){
          wx.navigateTo({
            url: './fabu/fabu',
          })
        }
        if (res.tapIndex == 3){
          wx.switchTab({
            url: '/pages/my/my',
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})