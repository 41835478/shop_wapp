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
        id: 'nanzhuang',
        title: '男装'
      }, {
        id: 'neiyi',
        title: '内衣'
      }, {
        id: 'muying',
        title: '母婴'
      }, {
        id: 'baobao',
        title: '包包'
      }, {
        id: 'peishi',
        title: '配饰'
      }, {
        id: 'meizhuang',
        title: '美妆'
      }, {
        id: 'jujia',
        title: '居家'
      }, {
        id: 'xieping',
        title: '鞋品'
      }, {
        id: 'meishi',
        title: '美食'
      }, {
        id: 'wenti',
        title: '文体'
      }, {
        id: 'jiadian',
        title: '家电'
      }, {
        id: 'qita',
        title: '其它'
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
