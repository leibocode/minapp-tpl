import Http from '../utils/http'

export default class HomeModel extends Http {
    getList(){
        return this.request({url:'/test'})  
    }
    create(id,comment){
        return this.request({
            url:'',
            method:'POST',
            data:{

            }
        })
    }
}