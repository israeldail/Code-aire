import Head from "next/head";

const Contact = () => {
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
          <input className="contact-input" type="text" placeholder="first name" required />
          <input className="contact-input" type="text" placeholder="last name" required />
          <input className="contact-input" type="text" placeholder="email" required />
          <input className="contact-input" type="text" placeholder="phone number" required />
          <textarea className="textarea" type="text" placeholder="type message here" required />

          <button type="submit" className="button">Send Email</button>
        </main>
        </div>
      </form>
    </>
  )
}

export default Contact;