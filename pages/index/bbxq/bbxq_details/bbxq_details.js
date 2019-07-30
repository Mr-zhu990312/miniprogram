Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 0,
    focus: false,
    factory:{
      name:"广东奇化化工交易中心股份有限公司",
      ID:"440600000032152",
      type:"其他股份有限公司(非上市)",
      leader_person:"王志刚"
    },
    src:"/images/zhuangtai.png",
  },
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
  goStock:function(){
    wx.navigateTo({
      url:"./xq/xq",
      success:function(){},
      fail:function(){},
      complete:function(){}
    })
  },
  // factory(){
  //   wx.request({
  //     url: 'http://app1.sfda.gov.cn/datasearchcnda/face3/base.jsp?tableId=93&tableName=TABLE93&title=%BB%AF%D7%B1%C6%B7%C9%FA%B2%FA%D0%ED%BF%C9%BB%F1%D6%A4%C6%F3%D2%B5&bcId=124053671285715992005675373538',
  //     data:{},
  //     header:{
  //       "content-type":"application/json"
  //     },
  //     success(res){
  //       console.log(res.data)
  //     }
  //   })
  // },
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