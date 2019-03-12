import Http from '../utils/http'

export default class Test extends Http {
  constructor() {
    super();
  }
  getTestList(data, callback) {
    let params = {
      url: '',
      method: 'POST',
      success: () => {

      }
    }
    this.request(params)
  }
}