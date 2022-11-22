import Head from 'next/head'
import Aboutcards from '../component/aboutcards';

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
          <button className='button'>
            Contact
          </button>
        </div>
        <div className='name-1'>
          <h2>Israel Dail</h2>
          <p>CTO & Founder</p>
          <p>Analytical-minded with a hint of motivated curiosity</p>
          <button className='button'>
            Contact
          </button>
        </div>
      </div>
    </>
  )
}

export default About;