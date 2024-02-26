import React from "react";
import { useState } from "react";

const Contact = () => {
  
  const [contact, setContact] = useState({
    username:"",
    email:"",
    message:""
  })

  const handleInput = (e)=>{
    let name = e.target.name ;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]:value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sent successfully");
  };



  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-headibg"></h1>
      </div>

      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img
            src="/public/images/support.png"
            alt="we are always ready to help"
          />
        </div>

        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                required
                value={contact.username}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                value={contact.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                required
                value={contact.message}
                onChange={handleInput}
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
