import { useState } from 'react'
import './App.css'

function App() {
 
  
  function startTimer() 
  {
    var countdown = 30; // 60 seconds = 1 minute
    var timerDisplay = document.getElementById('timer');
  
    var countdownInterval = setInterval(function() 
    {
      countdown--;
      
      if (countdown >= 0) 
      {
        var minutes = Math.floor(countdown / 60);
        var seconds = countdown % 60;
  
        // Display the timer on the screen
        timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      } 
      else 
      {
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
        timerDisplay.textContent = "Time's up!";
        alert("your 30 sec time's up")
      }
    }, 1000); // Update the countdown every second
  }
  function startTimers() 
  {
    var countdown = 60; // 60 seconds = 1 minute
    var timerDisplay = document.getElementById('timers');
  
    var countdownInterval = setInterval(function() 
    {
      countdown--;
      if (countdown >= 0) {
        var minutes = Math.floor(countdown / 60);
        var seconds = countdown % 60;
  
        // Display the timer on the screen
        timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      } 
      else 
      {
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
        timerDisplay.textContent = "Time's up!";
        alert("your 1 min time's up")
      }
    }, 1000); // Update the countdown every second
  }
  function startTimerss() 
  {
    var countdown = 120; // 60 seconds = 1 minute
    var timerDisplay = document.getElementById('timerss');
  
    var countdownInterval = setInterval(function() {
      countdown--;
      if (countdown >= 0) 
      {
        var minutes = Math.floor(countdown / 60);
        var seconds = countdown % 60;
  
        // Display the timer on the screen
        timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      } 
      else 
      {
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
        timerDisplay.textContent = "Time's up!";
        alert("your 2 min time's up")
      }
    }, 1000); // Update the countdown every second
  }
  function opencount()
  {
    document.getElementById('countdown').style.display="block"
    document.getElementById('counter').style.display="none"
    document.getElementById('tom').style.display="none"
    document.getElementById('wish').style.display="none"

  }function opencounter()
  {
    document.getElementById('counter2').style.display="block"
    document.getElementById('counter').style.display="none"
    document.getElementById('tom').style.display="none"
    document.getElementById('wish').style.display="none"
   

  }

  const[c,setcount]=useState(0)
  function add()
  {
     if(c>1)
     {
         alert('i love u')
     }
     else
     {
       setcount(c+1)
       console.log(c)
       if(c%2==0)
       {
           document.getElementById('text').textContent="odd"
           
       }
       else
       {
           document.getElementById('text').textContent="even"
       }
     }
   
  } 
  function sub()
  {
     if(c<-1)
     {
         alert('i hate u')
     }
     else
     {
       setcount(c-1)
       console.log(c)    
       if(c%2==0)
       {
           document.getElementById('text').textContent="odd"
           
       }
       else
       {
           document.getElementById('text').textContent="even"
       }

     }
   
  } 
  function reset()
  {
     setcount(0)
     document.getElementById('text').textContent=""
  }
  function close()
  {
    document.getElementById('countdown').style.display="none"
    document.getElementById('counter').style.display="none"
    document.getElementById('tom').style.display="block"
    document.getElementById('wish').style.display="block"
    document.getElementById('counter2').style.display="none"
    document.getElementById('counter').style.display.grid="block"
  }
  function close1()
  {
    document.getElementById('countdown').style.display="none"
    document.getElementById('counter').style.display="block"
    document.getElementById('counter').style.display.grid="block"
    document.getElementById('tom').style.display="block"
    document.getElementById('wish').style.display="block"
    document.getElementById('counter2').style.display="none"

  }



  return (
    <>
    <h1 id='wish'>HELLO ALL WELCOME BACK <strong>!</strong></h1>
     <div id='counter2'>
     <button onClick={close1}>go back</button>
     <div>
     <p id="text"></p>
     </div>
    <div id="count">
     <p id="countc">COUNT:{c}</p>
     <div id="counter1">
     <button onClick={(add)}>❤️</button>
     <button onClick={(sub)}>💔</button>
     <button onClick={(reset)}>🔁</button>
     </div>
    </div>
    </div>
    
    <div id='counter'>
     <img id='tom' src="https://i.pinimg.com/564x/58/6d/52/586d527b9ff811a27850784072459829.jpg" alt="" />
      <span id='ask'><p>what do you want <strong>?</strong></p>
      <button onClick={opencounter}>counter</button>&nbsp;
      <button onClick={opencount}>countdown</button></span>
    </div>
   <div id='countdown'>
   <button onClick={close1}>go back</button>
   
  <div>
  <button onClick={startTimer}>30 seconds Countdown</button>&nbsp;
   <button onClick={startTimers}>1 minute Countdown</button>&nbsp;
   <button onClick={startTimerss}>2 minute Countdown</button>
  </div>
   <div id='time'>
   <div id="timer"></div>
   <div id="timers"></div>
   <div id="timerss"></div>
   </div>
   </div>

    </>
  )
}

export default App
// ${days}d ${hours}h