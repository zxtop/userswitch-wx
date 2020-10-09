Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    gender: '男'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options,"=======");
    this.setData({
       // 收到数据后使用decodeURIComponent()解码
       username:decodeURIComponent(options.username),
       gender:decodeURIComponent(options.gender)
    })
  },
  formSubmit:function(e){
    // console.log(e)
    var formData = e.detail.value  //获取表单数据
    var pages = getCurrentPages(); //获取当前页面jian
    var prevPage = pages[pages.length -2];//获取上一个页面对象
    // 调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      username:formData.username,
      gender:formData.gender
    })
    //返回上一个页面
    wx.navigateBack();
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