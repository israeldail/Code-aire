import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Insomnia | Homepage</title>
      </Head>
      <div>
        <section className='titlebox'>
          <h1 className='title'>Code Insomnia</h1>
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


      <div>
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
        <li className='Home-title'>Who We Are:</li>
        <p>We are a Software Development Company that is based in Miami, we embarked on this journey to bring more creativity to the industry & capture  ideas by bring them to life. 
Our mission is to ignite a culture movement that drives & inpire people to be more creative by bring innovation that  will change the world.</p>
</ul>
        </section>
      </div>
    </>
  )
}
