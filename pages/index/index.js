Page({
  onPullDownRefresh() {
    wx.stopPullDownRefresh()},
  /**
   * 页面的初始数据
   */
  data: {
    city:"深圳",
    length:5,
    weather:"28-34℃",
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    index:0,
    focus:false,
    news:"小因头条：宝妈护肤秘籍大派送",
    imgUrls: ["https://gdp.alicdn.com/imgextra/i3/1664976033/O1CN01DoqlQ41uR9xc9xZya_!!1664976033.jpg",
    "https://gdp.alicdn.com/imgextra/i4/1664976033/O1CN01aTYvXW1uR9xdOeimk_!!1664976033.jpg",
    "https://gdp.alicdn.com/imgextra/i3/1664976033/O1CN01nv3u0Q1uR9xcnfL5Y_!!1664976033.jpg",
    "https://gdp.alicdn.com/imgextra/i3/1664976033/O1CN01iUIMEW1uR9xVJt6fw_!!1664976033.jpg"]
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