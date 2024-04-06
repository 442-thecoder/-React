import React, { useRef } from 'react'
import { Mail } from 'lucide-react';

const Contact = () =>
{
    const usernameRef = useRef('')
    const emailRef = useRef('')
    const messageRef = useRef('')
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(usernameRef.current.value)
        console.log(emailRef.current.value)
        console.log(messageRef.current.value)
    }
	return (
		<div id='contact' className='container '>
            <h1 className=' text-center text-uppercase '>Contact me <strong>!</strong></h1>
			{/* <img id='contactimg' src="https://woorise.com/wp-content/uploads/2020/04/form-builder-app.png" alt="" /> */}
			<form
				action=''
				className='form' onSubmit={handleSubmit}>
				<div className="form-floating">
					<input
						type='text'
						className='form-control'
						placeholder='Enter your name'
						id='un'
						ref={usernameRef}
					/>
					<label
						htmlFor='un'
						className='form-label'>
						Enter your name
					</label>
				</div>
				<br />
				<div className=" form-floating">
					<input
						type='email'
						name=''
						id='em'
						ref={emailRef}
						className='form-control'
						placeholder='Enter email'
					/>
					<label
						htmlFor='em'
						className='form-label'>
						Enter email
					</label>
				</div>
				<br />
				<div className=" form-floating">
					<textarea
						name=''
						id='ta'
						cols='30'
						ref={messageRef}
						rows='10'
						className='form-control'
						placeholder='Enter the Message'></textarea>
					<label
						htmlFor='ta'
						className='form-label'>
						Enter Message
					</label>
				</div>

				<br />
				<button className='btn btn-primary align-middle'>submitt</button>
			</form>
		</div>
	)
}

export default Contact
