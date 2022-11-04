import Head from 'next/head'
import Aboutcards from '../component/aboutcards';

const About = () => {
  return (
    <>
    <Head>
      <title>Code Insomnia | About</title>
    </Head>
    <div>

      <section className='titlebox'>
        <h1 className='title'>About</h1>
      </section>

    </div>

    <div className='container'> 
    <div className='name-2'>
      <h2>Austan Augustin</h2>
      <p>CEO & Co-founder</p>
      <button className='button'>
        Contact 
      </button>
    </div>
    <div className='name-1'>
      <h2>Israel Dail</h2>
      <p>CFO & Co-founder</p>
      <button className='button'>
        Contact 
      </button>
    </div>
    </div>
    </>
  )
}

export default About;