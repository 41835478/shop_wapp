//var Zan = require('tab');

Page(Object.assign({}, {

  data: {
    motto: 'Hello World',
    userInfo: {},

    tab1: {
      list: [{
        id: 'all',
        title: '综合'
      },{
        id: 'nvzhuang',
        title: '女装'
      }, {
        id: 'jiajujiazhuang',
        title: '家居家装'
      }, {
        id: 'shumajiadian',
        title: '数码家电'
      }, {
        id: 'muying',
        title: '母婴'
      }, {
        id: 'shiping',
        title: '食品'
      }, {
        id: 'xiebaofushi',
        title: '鞋包配饰'
      }, {
        id: 'meizhuanggehu',
        title: '美妆个护'
      }, {
        id: 'nanzhuangneiyi',
        title: '男装内衣'
      }, {
        id: 'yundonghuwai',
        title: '运动户外'
      }],
      selectedId: 'all',
      scroll: true
    }
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '优惠券'
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
