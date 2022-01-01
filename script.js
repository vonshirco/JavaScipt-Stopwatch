//Initializing the variables

var timer = 0; //timer is set to zero by default
var timerInterval;
//getElementById method is used to access the three spans we created using their respective ids
var ms = document.getElementById('milliseconds');
var second = document.getElementById('mainsecond');
var minute = document.getElementById('mainminute');

function start(){
  stop();
  /*timerInterval = setInterval(); the setInterval method timerInterval calls an anonymous function every
  millisecond this makes the timer variable initially set at 0 add a millisecod each time*/
  timerInterval = setInterval(
    function(){
      timer += 1/60;
      /*For the getting the milliseconds, seconds, and minutes value the Math.Floor function is heavily used,
      this function returns the highest integer less than or equal to the given number. eg 5.95 it returns 5*/
      msVal = Math.floor((timer - Math.floor(timer)) * 100); //Gives the milliseconds value
      secondVal = Math.floor(timer) - Math.floor(timer/60) * 60; //Gives the second values
      minuteVal = Math.floor(timer/60); //Gives the minute value
      /*For three below lines, the values of the respective spans are changed with the .textContent method
      using a ternary operator to add an extra '0' to values less than 10*/
      ms.textContent = msVal < 10 ? "0" + msVal.toString() : msVal;
      second.textContent = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
      minute.textContent = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    }, 1000/60);

}


function stop(){
  clearInterval(timerInterval); //Stops the setInterval function
}


function reset(){
  stop();
  timer = 0;
  //Setting the values of all values are set to their default state
  ms.textContent = "00";
  second.textContent = "00";
  minute.textContent = "00";
}



//For buttons: every button calls a similarly named function based on the onclick event attribute
