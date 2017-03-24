//主要核心逻辑入口

const fs = require('fs')
const path = require('path')
const staticServer = require('./staic-server')
class App{
	  constructor(){

	  }
	  initServer(){
        //初始化的工作
	  	return (request,response)=>{
            let {url} = request;//==>解构赋值
            //每个请求逻辑,根据url进行代码分发
           //  if(url == '/css/index.css'){
           //      fs.readFile('./public/css/index.css','utf-8',(error,data)=>{
           //           response.end(data)                
           //      })
           // };
             
           //   if(url == '/js/index.js'){
           //      fs.readFile('./public/js/index.js','utf-8',(error,data)=>{
           //           response.end(data)                
           //      })
           // };

           //   if(url == '/') {      
           //  	fs.readFile('./public/index.html','utf-8',(error,data)=>{
	  		      //    response.end(data)
           //      })
           // };  
        //express框架 app.use(static('public'))绝对路径
        let body = staticServer(url)
        response.end(body)




        }
    }
} 
module.exports = App