/*api server*/


module.exports = (ctx)=>{
    let {url,method} = ctx.req
	  let {resCtx,reqCtx} = ctx;
    let {res} = ctx
    let apiMap = {
      	'/list.action':['张三','李四','王二麻子'],
      	'/user.action':['饥人谷','直播班','任务班']
      }
//过滤method
    method = method.toLowerCase()
    return Promise.resolve({
      then:(resolve,reject)=>{
        if(url.match('action')){
              if(method == 'get'){
                resCtx.body = JSON.stringify(apiMap[url])  
              }else{
                let {body}= reqCtx
                    //处理post B post ==socket== S
                resCtx.body = JSON.stringify(body)
            }
            resCtx.headers = Object.assign(resCtx.headers,{
              'Content-Type':'application/json'
            })      
        }
      resolve()     
  }
})
}