var localData = require('../../data/post-data.js')

Page({

  /**
   * 页面的初始数据
   */
  //小程序下脚本变量传递是直接传递数据绑定，不用doument赋值，
  //js脚本文件向wxml中为事件传递赋值
  data: {
   
     post_key:[ ]

  },
  process:function(){
      // var date="2018/4/17"
      // var date_ele = document.getElementById('id');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      post_key: localData.postList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
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