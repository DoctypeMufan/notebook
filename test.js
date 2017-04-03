//学习Promise
//typeof Promise ==> 'function'
//prototype ==> then/catch
//静态方法 ==> all/race/resolve/reject
//第一步 new Promise

let p = new Promise((resolve,reject)=>{
	setTimeout(resolve,1000,'hello world')
})
console.log(p)


//then可接受两个参数，第一个参数处理resolve的结果
//then可接受两个参数，第二个参数处理reject的结果

//1.将这些回调函数存入处理队列,queue
//2.如果Promise已经是fulfilled或者reject的状态了，autoRun
//从数据结构角度看 ==>链表
var another = p.then(val=>
	//处理resolve的结果
	console.log(`resolve val is ${val}`),
val =>
//处理reject的结果
console.log(`reject val is ${val}`)
)
console.log(another instanceof Promise)
//处理reject层面
setTimeout(()=>{
	console.log(p)
	p.catch(val=>console.log(`catch val is ${val}`))
	}
	,2000) 
