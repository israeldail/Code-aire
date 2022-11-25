import Head from "next/head";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = {name:"", user_email:"", phone_number:"", msg:""}

const initState = {values: initValues}

const Contact = () => {
  const [state, setState] = useState(initState)

  const {values, isLoading} = state
  
  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values)
  }


  return (
    <>
      <Head>
        <title>Code-aire | Contact</title>
      </Head>
      <form>
        
        <section className='titlebox'>
          <h1 className='title'>Contact Us</h1>
        </section>
        <div className="contact-page">
        <main className="contact-form">
          <input className="contact-input" type="text" placeholder="name" name="name" value={values.name} onChange={handleChange} required />
          <input className="contact-input" type="text" placeholder="email" name="user_email" value={values.user_email} onChange={handleChange} required />
          <input className="contact-input" type="text" placeholder="phone number" name="phone_number" value={values.phone_number} onChange={handleChange
          } required />
          <textarea className="textarea" type="text" placeholder="type message here" name="msg" value={values.msg} onChange={handleChange} required />

          <button 
          type="submit" 
          className="button" 
          onClick={onSubmit}
          >
            Send Email</button>
        </main>
        </div>
      </form>
    </>
  )
}

export default Contact;