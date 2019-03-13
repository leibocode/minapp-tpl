import HomeModel from '../../models/home.model'

const { regeneratorRuntime } = global 

const home = HomeModel()

Page({
    data:{
        list:[]
    },
    async onLoad:function(){
        const data = await home.getList()
        console.log(data)
        this.setData({
          list:data
        })
    }
})