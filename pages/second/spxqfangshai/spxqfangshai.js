// page/component/details/details.js
Page({
  data: {
    goods: {
      id: 1,
      image: 'https://img.alicdn.com/imgextra/i1/2200633491827/O1CN012p90eN1PMo91vONr0_!!2200633491827-0-scmitem6000.jpg',
      title: 'ISDIN防水防晒',
      price: 158,
      stock: '库存量：19536',
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },
  subtraction() {
    let num = this.data.num;
    if (num == 1) {
      wx.showToast({ title: '不能再少了', icon: 'none' })
    }
    else {
      num--;
    }
    this.setData({
      num: num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }

})