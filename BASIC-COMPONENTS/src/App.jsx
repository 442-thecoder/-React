import Allu from "./JSX FILES/Allu";
import Chiru from "./JSX FILES/Chiru";
import Pspk from "./JSX FILES/Pskpk";
import Rc from "./JSX FILES/Rc";
import { Component } from "react";
class App extends Component
{
  render ()
  {
    return (
			<div className='app'>
			<div id="header">
        	<header>
        <img id="logo" src="https://wallpapercave.com/wp/wp5063339.png" alt="" />
       <div/>
       <div id="head">
        <p id="tag">UNLIMITED TV SHOWS & MOVIES</p>
       <span>
        <input id="logodrop" type="button" value="JOIN NOW" />
          </span>
          <span>
        <input id="logobtn" type="button" value="SIGN IN" />
          </span>
       </div>
       </header>
       </div>
       <div>
       <br /><br /><br /><br/>
       <section id="only">
        <p id="only1"><span id="only">Only on Netflix</span><br /><br />Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you.</p>
        
       </section>
       </div>
        <Chiru/>
        <Pspk/>
        <Rc/>
        <Allu/>
       <footer>
      <div>
      <p id="foot"><b>There's even more to watch.</b><br /> <span id="foot1">Netflix has an extensive library of feature films, documentaries,  TV .</span><br /><span id="foot1">shows, anime, award-winning Netflix originals and more.  Watch as </span><br /><span id="foot1">much as you want, anytime you want</span></p>
      <input id="footbtn" type="text" value="JOIN NOW" />
      </div><br /><br />
      <div id="foot2">
        <p>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</p>
        <br /><br /><p>Questions? Contact us.</p>
      </div>
      <div id="contact">
        <ul>
          <li><a href="">FAQ</a></li>
          <li><a href="">Ways to Watch</a></li>
          <li><a href="">Cookie Preferences</a></li>
          <li><a href="">Speed Test</a></li>
        </ul>
        <ul>
          <li><a href="">Help Centre</a></li>
          <li><a href="">Investor Relations</a></li>
          <li><a href="">Corporate Information</a></li>
          <li><a href="">Legal Notices</a></li>
        </ul>
        <ul>
          <li><a href="">Account</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Only on Netflix</a></li>
        </ul>
        <ul>
        <li><a href="">Media Centre</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Contact Us</a></li>
        </ul>
        <div></div>
        <select name="" id="logobtn1">
          <option value="">
            English
          </option>
        </select>
      </div>
     </footer>
      </div>
    
		) 
  }
}
export default App