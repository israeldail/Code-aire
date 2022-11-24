import Head from 'next/head'
import Popup from 'reactjs-popup';



const About = () => {
  return (
    <>
      <Head>
        <title>Code-aire | About</title>
      </Head>
      <div>

        <section className='titlebox'>
          <h1 className='title'>The Founders</h1>
        </section>

      </div>

      <div className='container'>
        <div className='name-2'>
          <h2>Austan Augustin</h2>
          <p>CEO & Founder</p>
          <p>An ambitious mind coupled with a charismatic personality</p>
          <Popup trigger={<button className='button'>Contact</button>} position="bottom">
            <div className='contact-popup'>
              email: austan.augustin1@gmail.com
            </div>
          </Popup>
        </div>
        <div className='name-1'>
          <h2>Israel Dail</h2>
          <p>CTO & Founder</p>
          <p>Analytical-minded with a hint of motivated curiosity</p>
          <Popup trigger={<button className='button'>Contact</button>} position="bottom">
            <div className='contact-popup'>
              email: israeldail2@gmail.com 
            </div>
          </Popup>
        </div>
      </div>
      <p className='about-paragraph'>Code-aire is led by two motivated people who share a dream. A dream of prosperity, freedom, and creativity.  </p>
    </>
  )
}

export default About;