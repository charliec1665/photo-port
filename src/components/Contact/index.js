import React, { useState } from 'react'


function ContactForm() {
    // Hook to manage form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync state of the component with user input
    function handleChange(e) {
        // using setFormState function to update formState value for the name property
        // we use the spread operator to retain the other key-value pairs in this object, 
            // otherwise the formState object would be overwritten to only contain the name: value key pair
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    // handle submission of form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    // JSX
    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onChange={handleChange} />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;