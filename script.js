function ClockStart() {
    //assigning real time values to html element
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours>=12){
        hours=hours-12
    }
  
    let hrs = document.getElementById("hrs");
    hrs.innerText = hours;
    let mins = document.getElementById("mins");
    mins.innerText = minutes;
    let secs = document.getElementById("secs");
    secs.innerText = seconds;
}
   
  
  //so the clock will shows result after every 1 sec
  setInterval(() => {
    ClockStart();
  }, 1000);
  

  let date=new Date()
  let hours=date.getHours();
   //ampm part
   let ampm = document.getElementById("ampm");
   if (hours >= 12) {
     ampm.innerText = "PM";
   } else {
     ampm.innerText = "AM";
   };