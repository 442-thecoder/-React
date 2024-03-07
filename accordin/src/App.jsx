import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App() {
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  return (
    <div>
        <button className='accordin'>sec1</button>
    <div className='panel'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, iure quam beatae eum maiores veniam cupiditate eligendi. Nam soluta minus, consectetur assumenda inventore necessitatibus aperiam facere! Ratione nisi aliquid animi.</p>
    </div>
    <button className='accordin'>sec2</button>
    <div className='panel'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, iure quam beatae eum maiores veniam cupiditate eligendi. Nam soluta minus, consectetur assumenda inventore necessitatibus aperiam facere! Ratione nisi aliquid animi.</p>
  </div>
  <button className='accordin'>sec3</button>
  <div className='panel'>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, iure quam beatae eum maiores veniam cupiditate eligendi. Nam soluta minus, consectetur assumenda inventore necessitatibus aperiam facere! Ratione nisi aliquid animi.</p>
</div>
</div>
  )
}

export default App

