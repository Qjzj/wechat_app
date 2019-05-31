Component({
  data: {
    selectedIndex: 0,
    list:[{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/assets/icon/home.png",
        "selectedIconPath": "/assets/icon/home-select.png"
      },
      {
        "pagePath": "/pages/logs/logs",
        "text": "乘车",
        "iconPath": "/assets/icon/code.png",
        "selectedIconPath": "/assets/icon/code.png"
      },
      {
        "pagePath": "/pages/mine/mine",
        "text": "我的",
        "iconPath": "/assets/icon/mine.png",
        "selectedIconPath": "/assets/icon/mine-select.png"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data['path'];
      const index = data['index']
      this.setData({
        selectedIndex: index
      })
      wx.switchTab({
        url
      });


    }
  }
})