import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'


function ContactForm() {
    // Hook to manage error message
    const [errorMessage, setErrorMessage] = useState('');

    // Hook to manage form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync state of the component with user input
    function handleChange(e) {
        // data validation
        // if the <input> is email then validate the value
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
                // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
        } else {
            // if the <input> values of message or name are blank, an error message is assigned
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // using setFormState function to update formState value for the name property
        // we use the spread operator to retain the other key-value pairs in this object, 
            // otherwise the formState object would be overwritten to only contain the name: value key pair
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // handle submission of form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    // JSX
    return (
        <section>
            <h1 data-testid='h1tag'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {/* if errorMessage print errorMessage text to alert user */}
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' data-testid='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;