const { reject } = require("async");

async function check () {
    let delhiWeather= new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve("27 Deg")
        },1000)
    })

    let noidaWeather= new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve("21 Deg")
        },7000)
    })


//     delhiWeather.then(alert);
//     noidaWeather.then(alert)
console.log("fetching delhi weather...")
  let dw=await delhiWeather
  console.log(" delhi weather=",dw);
  console.log("fetching noida weather...")
  let nw=await noidaWeather
  console.log("noida weathr=",nw);

  return [dw,nw]
 }
 let a=check();
 a.then((value)=>{
    console.log(value);
 })