//var Zan = require('tab');

Page(Object.assign({}, {

  data: {
    motto: 'Hello World',
    userInfo: {},

    tab1: {
      list: [{
        id: 'all',
        title: '聚划算'
      },{
        id: 'nvzhuang',
        title: '淘抢购'
      }, {
        id: 'nanzhuang',
        title: '9.9元包邮'
      }, {
        id: 'neiyi',
        title: '29.9元'
      }, {
        id: 'muying',
        title: '进口商品'
      }, {
        id: 'baobao',
        title: '品牌商品'
      }, {
        id: 'peishi',
        title: '24小时畅销'
      }, {
        id: 'meizhuang',
        title: '视频商品'
      }],
      selectedId: 'all',
      scroll: true
    }
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '热销'
    })
  },
  handleZanTabChange(e) {
    var dataset = e.currentTarget.dataset;
    var componentId = dataset.componentId;
    var selectedId = dataset.itemId;
    // var data = { componentId, selectedId };

    // var componentId = e.componentId;
    // var selectedId = e.selectedId;
    console.log(selectedId);
    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  },


}));
