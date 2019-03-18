import Http from '../utils/http.js'

export default class HomeModel extends Http {
    constructor(){
        super()
    }
    getList(){
        return this.request({url:'/test'})  
    }
    create(data){
        return this.request({
            url:'/test',
            data:data,
            method:'POST'
        })
    }
}