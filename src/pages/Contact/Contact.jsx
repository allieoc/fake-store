import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className="contact-page">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <textarea rows="4" cols="40" placeholder="Write your message here" />
                <button>Submit</button>
            </form>
        </div>
     </div>
  )
}

export default Contact