import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[formDetails,setFormdetails]=useState(
    {
    username:"",
    useremail:"",
    userpassword:""

    })
    const [error, setError] = useState('');
  
  const change = (e) =>
  {
    const {name,value} = e.target;
    setFormdetails({...formDetails,[name]:value})

  }
  const handleSubmit = (e) =>
  {
       e.preventDefault();
       if (formDetails.userpassword.length >8  ) {
        setError('Password must be at least 8 characters long.');
        return; // Prevent form submission
      }
       console.log(formDetails)
       setFormdetails({
        username:"",
        useremail:"",
        userpassword:""
       })
       setError('');
  }
  
  return (
             
        <form onSubmit={handleSubmit}> 
      <h1>Registration Form</h1>
      <input  
      type="text" 
      required 
      name="username" 
      value={formDetails.username} 
      onChange={change} 
      placeholder='Please Enter your name..'  
      id="na" /><br /><br />

      <input 
      type="email" 
      required 
      name="useremail" 
      value={formDetails.useremail} 
      onChange={change} 
      placeholder='Please Enter a Valid Email..'  
      id="em" /><br /><br />

      <input 
      type="password" 
      required 
      name="userpassword" 
      value={formDetails.userpassword} 
      onChange={change} 
      placeholder='Please Enter password..'
      id="pwd" /><br /><br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button id='submit'>Sign up</button>
    </form>
  
  
    
  )
  
}

export default App
