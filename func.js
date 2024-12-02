let a;
  let date;
  let time;
  setInterval(()=>{
     a=new Date();
     date=a.toLocaleDateString();
     time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
     document.getElementById('time').innerHTML=time+" on "+ date
  },1000)

  //set timeout executes only once
  setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("demo").innerHTML = <b> "Happy Birthday!"</b>
}
console.log(hello);