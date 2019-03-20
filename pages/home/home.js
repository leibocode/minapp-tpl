import regeneratorRuntime from '../../utils/runtime.js'
import HomeModel from '../../models/home.js'

const { $Toast } = require('../../dist/base/index')

const home = new HomeModel()
Page({
  data:{
    text:'test',
    users:[],
  },
  onLoad:function(){
    console.log('test')
    this._loadData()

  },
  async _loadData(){
    let data = await home.getList()
    this.setData({
      users:data
    })
  }
})