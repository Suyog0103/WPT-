let p = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("the asynchronous operation complete") //2
        resolve("Success")
    },6000)
})

console.log("the promise ",p)   //1
p.then((res)=>{console.log(res,"Hurray!")}) //3
