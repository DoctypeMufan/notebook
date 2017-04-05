/*
*url-parser
*处理客户端数据
*/
//request:query + body + method

module.exports = (ctx)=>{
         //原型链 readable stream eventEmitter
         let{method,url,context} = ctx.req
         let{reqCtx} = ctx

         method = method.toLowerCase()
         return Promise.resolve({
         	then:(resolve,reject)=>{

         	if(method == 'post'){
         	let data = ''
            //仓库==>拿出来==>end
            //于是仓库被清空(内存被释放)
            //paused==>flow
	        ctx.req.on('data',(chunk)=>{
	            data+=chunk
	        }).on('end',()=>{
                reqCtx.body=JSON.parse(data)
                //通知下一个流程
                resolve()
	        })         		
         }else{
         	resolve()
         }      	      		
       }	
    })	
}