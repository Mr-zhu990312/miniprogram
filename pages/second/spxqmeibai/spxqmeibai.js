// page/component/details/details.js
Page({
  data: {
    goods: {
      id: 1,
      image: 'https://img.alicdn.com/imgextra/i1/917264765/TB27M8if63z9KJjy0FmXXXiwXXa_!!917264765.jpg',
      title: '神仙水SK-II',
      price: 1080,
      stock: '库存量：8336',
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