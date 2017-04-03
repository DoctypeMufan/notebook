/*api server*/


module.exports = (request)=>{
	  let {url,method,context} = request;
      let apiMap = {
      	'/list.action':['张三','李四','王二麻子'],
      	'/user.action':['饥人谷','直播班','任务班']
      }
//过滤method
    method = method.toLowerCase()
    if(method == 'get'){
		return Promise.resolve(apiMap[url])    	
	}else{
		let {body}= context
        //处理post B post ==socket== S
        return Promise.resolve(body)
	}

}