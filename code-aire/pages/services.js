import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <>
      <Head>
        <title>Code-aire | Services</title>
      </Head>
      <div className="service-body">

        <section className='titlebox'>
          <h3 className='title'>Technologies of proficiency</h3>
        </section>

        <section>
          <div className='html-stack'>
            <Image
              src={'/html.png'}
              width={500}
              height={500}
              alt="html"
            />
            <Image
              src={'/java-script.png'}
              width={500}
              height={500}
              alt="javascript"
            />
            <Image
              src={'/css-logo.png'}
              width={500}
              height={500}
              alt="css"
            />
          </div>
        </section>

        <section className='languages-container'>
          <div className='html-stack'>
            <Image
              src={"/react-native-logo.png"}
              height={500}
              width={500}
              alt="react"
            />

            <Image
              src={"/python-logo.png"}
              height={500}
              width={500}
              alt="python"
            />

          </div>
        </section>

        <hr style={{ width: "95%" }} />

        <section className='fade-in-text'>
          <h1 className='title'>Full Stack Development</h1>
          <p className='paragraph-services'>Here at Code-aire we specialize in full stack development. We have growing experience with making websites and mobile apps <br />
            on front-end and back-end. Our passion and willigness to learn does not end there however, We have taken the initiative to <br />
            take on Python projects such as data analysis and automation. Our hard work is only matched by our passion that we bring to the table. <br />
            We will be showcasing all of our projects both client requested and our very own Code-aire projects in our portfolio section. <br />
            If you have not seen our portfolio page we highly encourage you to take a look <Link href="/portfolio"><a style={{ color: "blue" }}>here</a></Link> </p>
        </section>

        <hr style={{ width: "95%" }} />

        <section className='fade-in-text'>
          <h1 className='title'>Do you have an idea?</h1>
          <p className='paragraph-services'>Code-aire will make them a reality for you, motivation and passion aside we are also about attitude.<br />
            We don't think in terms of <em>If's</em> or <em>But</em>, instead we say <strong>can</strong> and <strong>will</strong>. We don't believe in <br />
            doubting ourselves, therefore neither should our clients. If you have any projects or ideas you would like to bring our attention for an estimate please fill out our <br />
            contact form <Link href="/contact"><a style={{ color: "blue" }}>here</a></Link>.
          </p>
        </section>

      </div>
    </>
  )
}

export default Services;