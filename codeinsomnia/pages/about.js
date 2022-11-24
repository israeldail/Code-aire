import Head from 'next/head'
import Popup from 'reactjs-popup';
import React from 'react';


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
        <p className='about-paragraph'>Code-aire is led by two motivated people who share a dream. A dream of prosperity, freedom, and creativity. <br/> 
        Our goal is to make web applications that can change the way people live on a daily basis and just make the world <br/>
        a friendlier feeling place in general. We plan on acheiving this by releasing our own original products, the websites and <br/>
        applications we make will be purely for the mutual satisfaction it will bring to both our team and <em>you</em> the general <br/>
        population, more importantly our society.
        <br/>
        <br/>
        <span className='company-founded'>Code-aire was founded in 2022, wait for big things ahead. </span>
         </p>
      </div>
    </>
  )
}

export default About;