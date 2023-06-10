let obj = {personName:"XXX" , personAge:20} //key name: value

console.log(obj.personName,obj.personAge) //printing object elements
console.log(obj)      //printing single object

 let arr = []
arr.push({personName:"XXX" , personAge:20})
arr.push({personName:"YYY" , personAge:30})
arr.push({personName:"PPP" , personAge:10})

console.log(arr)  // printing whole array
arr.forEach( (b)=>{console.log( "name:",b.personName, "age:",b.personAge)})  //printing properly
totalage=0
arr.forEach( (b)=>{ totalage=totalage+b.personAge})
console.log("total age:",totalage)  


