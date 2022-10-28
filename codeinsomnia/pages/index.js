import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import styles from '../styles/Home.module.css'
import Public from '../public/3.jpg'

export default function Home() {
  return (
    <div className='Home-page'>
    
     
   
      <Head>
        <title>Coding Insomnia | Homepage</title>
      </Head>
      <div>
        <section className='titlebox'>
          <h1 className='title'>Code Insomnia</h1>
        </section>
   
     
        <section className='home-info'>
          <ul>
            <li className='Home-title'>Who We Are:</li>
            <p>We are a Software Development Company that is based in Miami, we embarked on this journey to bring more creativity to the industry & capture  ideas by bring them to life.
              Our mission is to ignite a culture movement that drives & inpire people to be more creative by bring innovation that  will change the world.</p>
          </ul>
        </section>
      </div>


      <div>
        <section className='home-info'>
          <ul>
            <li className='Home-title'>Who We Serve:</li>
            <p>We are a Software Development Company that is based in Miami, we embarked on this journey to bring more creativity to the industry & capture  ideas by bring them to life.
              Our mission is to ignite a culture movement that drives & inpire people to be more creative by bring innovation that  will change the world.
             </p>
          </ul>
        </section>

      </div>
      <div className='button-main'>
                <section>
                  <button className='button'> Start Here</button>
                </section>
              </div> 

      <div>
        <section className='home-info'>
          <ul>
            <li className='Home-title'>Who We Are:</li>
            <p>We are a Software Development Company that is based in Miami, we embarked on this journey to bring more creativity to the industry & capture  ideas by bring them to life.
              Our mission is to ignite a culture movement that drives & inpire people to be more creative by bring innovation that  will change the world.</p>
          </ul>
        </section>
      </div>
    </div>
  )
}
