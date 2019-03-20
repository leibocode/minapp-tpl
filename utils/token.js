import config from '../config.js'
import Http from './http.js'
class Token extends Http {
  constructor(){
      super()
  }
  fetchToken(){
      let data = wx.getStorageSync('token')
      if(!data){
          data = this.sign()
      }
      if(!this.isValidToken(data)){
          data = this.sign()
      }
      return data
  }
  /**
   * 验证token
   * @param {json} data token 
   * @param {string} name 
   */
  isValidToken(data,name){
      if(!data ||!data.token || !data.expires_in){
          return false
      }
      const expiresIn = data.expires_in
      const now = (new Date()).getTime()
      if(now<expiresIn){
          return true
      }else {
          return false
      }
  }
  /**
   * 获取token
   */
  sign(){
     let that = this
     wx.login({
         success:function(res){
             this.request({
                 
             }).then((data)=>{
                 console.log('token')
                 wx.setStorageSync('token',data)
                 return token
             })
         }
     })
  }
}
export default Token