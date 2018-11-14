class RestUtil {
  
  static proccessResponse(response, body, callback, errCallback){
    if(response.statusCode !== 200){
      if(errCallback){
        errCallback(err);
      }
      return;
    }
    callback(body);
  }
	
  static get(msg, url, callback, errCallback){
  var proccessResponse = this.proccessResponse;
    msg.http(url)
    .headers({'Content-Type': 'application/json'})['get']('')
    (function(err, response, body){
      RestUtil.proccessResponse(response, body, callback, errCallback);
    });
  }
	
  static post(msg, url, requestBody, callback, errCallback){
    msg.http(url)
    .headers({'Content-Type': 'application/json'})['post'](requestBody)
    (function(err, response, body){
      RestUtil.proccessResponse(response, body, callback, errCallback);
    });
  }

}

module.exports = RestUtil;
