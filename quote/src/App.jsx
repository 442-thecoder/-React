import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[quote,setquote]=useState("")
  const[author,setauthor]=useState("")
  const[values,setValues]=useState([])
  const[value,setValue]=useState("")
  const [btnClick,setbtnClick]=useState(0)
  useEffect(() =>
  {
    
    axios.get('https://api.quotable.io/random')
    .then((data) =>
    {
        setauthor(data.data.author)
        setquote(data.data.content)

    })
  },[btnClick+1])
  const add = () => {
    const newQuote = {
      quote: quote,
      author: author
    };
    setValues([...values, newQuote]);
    setValue("");
  };
  
  const remove = (index) => {
    alert('This quote will be deleted')
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };
  function modal()
  {
    document.getElementById('modal').style.display="none" 
    document.getElementById('panda').style.display="none"
    document.getElementById('panda1').style.display="block"
    document.getElementById('p1').style.display="block"
       setTimeout(() => {
        document.getElementById('body').style.display="block" 
        document.getElementById('panda1').style.display="none"
        document.getElementById('p1').style.display="none"
       }, 5000);
  }

  return (
    <div>
    <div id='body'>
    <blockquote id='quote'>{quote}</blockquote>
    <cite id='auth'>~{author}</cite><br /><br />
    <button id='btn' onClick={()=>setbtnClick(btnClick+1)}>new quote</button>&nbsp;
    <button id='btn' onClick={add}>save</button>
    <h2>Saved Quotes:</h2>
      <ul>
        {values.map((savedQuote, index) => (
          <li key={index}>
            <blockquote>{savedQuote.quote}</blockquote>
            <cite>~{savedQuote.author}</cite>&nbsp;&nbsp;
            <button id='remove' onClick={() => remove(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg></button>
          </li>
        ))}
      </ul>
    </div>
    <img id='panda1' src="https://366e203a.rocketcdn.me/wp-content/uploads/2021/08/Daffy-Duck.jpg" alt="" />
    <p id='p1'>HLO MY FRND IS TIRED I WILL TAKE CARE OF YOU<strong>"your quote on the way"</strong> </p>
    <p id='p2'> your quote on the way </p>
    <img id='panda' src="https://t4.ftcdn.net/jpg/06/62/28/67/360_F_662286736_sSTitccmeigYbKgCqDJ21tabAuMMizoB.jpg" alt="" /><br />
    <button id='modal' onClick={modal}>Wake Up I Want a Quote</button>
    </div>
  )
}

export default App
