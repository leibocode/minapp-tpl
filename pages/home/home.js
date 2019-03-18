
import HomeModel from '../../models/home.js'


const home = new HomeModel()
Page({
  data:{
    text:'test'
  },
  onLoad:function(){
    console.log('test')
  },
  _loadData:function(){
  }
})