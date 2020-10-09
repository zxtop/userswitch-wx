Page({

  /**
   * 页面的初始数据
   */
  data: {
    no: null, // 运单号
    company: ['sf', 'sto', 'yt', 'yd', 'tt'], // 传递给快递查询接口的值
    com: ['顺丰', '申通', '圆通', '韵达', '天天'], // 用于显示在页面中的快递名称
    index: 0, // 用户选择的快递公司的数组索引
    expressInfo: null, // 查询到的物流信息
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