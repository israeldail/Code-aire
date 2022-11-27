import Head from 'next/head'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className='Home-page'>



      <Head>
        <title>Code-aire | Homepage</title>
      </Head>
      <div>
        <section className='titlebox'>
          <h1 className='title'>Welcome to</h1>
          <h1 className='title'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Code-aire')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .start();
              }}
            /></h1>

        </section>


        <section className='home-info'>
          <ul>
            <li className='Home-title'>Who We Are:</li>
            <p>We are a Software Development Company that is based in Miami, we embarked on this journey to bring more creativity to the industry & capture  ideas by bring them to life.
              Our mission is to ignite a culture movement that drives & inpire people to be more creative by bring innovation that  will change the world.</p>
          </ul>
        </section>
      </div>

      <div className='button-main'>
        <section>
          <Link href="/portfolio"><button className='button'> Visit Portfolio Page</button></Link>
        </section>
      </div>
    </div>
  )
}
