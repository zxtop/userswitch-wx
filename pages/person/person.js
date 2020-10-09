Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    
  },
  info:function(){
    // 第一种方式：保留当前页面，单击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/detail/detail',
    });

    // 第二种方式：关闭当前页，左上角没有返回箭头，不能返回上一个页面
    // wx.redirectTo({
    //   url: '/pages/detail/detail',
    // });

  },
  order:function(){
    wx.redirectTo({
      url: '../order/order',
    })
  }

})