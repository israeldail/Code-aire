import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Code Insomnia | Contact</title>
      </Head>
      <form>
        <section className='titlebox'>
          <h1 className='title'>Contact Us</h1>
        </section>
        <main className="contact-form">
          <input className="contact-input" type="text" placeholder="first name" />
          <input className="contact-input" type="text" placeholder="last name" />
          <input className="contact-input" type="text" placeholder="email" />
          <input className="contact-input" type="text" placeholder="phone number" />
        </main>
      </form>
    </>
  )
}

export default Contact;