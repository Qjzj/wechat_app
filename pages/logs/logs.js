//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

  },
  onLoad: function () {

  },
  onShow: function() {
    if(typeof this.getTabBar == 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selectedIndex: 1
      })
    }
  }
})