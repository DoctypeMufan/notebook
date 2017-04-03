/*
*url-parser
*处理客户端数据
*/
//request:query + body + method

module.exports = (request)=>{
         //原型链 readable stream eventEmitter
         let{method,url,context} = request       
         method = method.toLowerCase()
         return Promise.resolve({
         	then:(resolve,reject)=>{
         	context.method = method
         	//todo
         	context.query = {}
         	if(method == 'post'){
         	let data = ''
            //仓库==>拿出来==>end
            //于是仓库被清空(内存被释放)
            //paused==>flow
	        request.on('data',(chunk)=>{
	            data+=chunk
	        }).on('end',()=>{
                context.body=JSON.parse(data)
                //通知下一个流程
                resolve()
	        })         		
         }else{
         	resolve()
         }      	      		
       }	
    })	
}