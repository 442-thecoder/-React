import React,{useRef} from 'react'
import './Login.css'

const Uncontrolled = () => {
    
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form input values using refs
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Here you can perform actions like submitting the form data to a server
    console.log({ username, email, password });

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <input
          type="text"
          required
          ref={usernameRef}
          placeholder='Please Enter your name..'
          id='na'
        /><br /><br />
       <input
          type="email"
          required
          ref={emailRef}
          placeholder='Please Enter a Valid Email..'
          id='em'
        /><br /><br />
      <input
          type="password"
          required
          ref={passwordRef}
          placeholder='Please Enter password..'
          id='pwd'
        /><br /><br />
         <button id='submit' type="submit">Sign in</button>
      </form>
  );
}

export default Uncontrolled
