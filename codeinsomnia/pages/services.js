import Head from 'next/head'
import Image from 'next/image'

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
             />
             <Image
            src={'/java-script.png'}
            width={500}
            height={500}
             />
             <Image
            src={'/css-logo.png'}
            width={500}
            height={500}
             />
          </div>
        </section>

        <section className='languages-container'>
          <div className='html-stack'>
            <Image
            src={"/react-native-logo.png"}
            height={500}
            width={500}
            />

            <Image
            src={"/python-logo.png"}
            height={500}
            width={500}
            />

          </div>
        </section>
        
      </div>
    </>
  )
}

export default Services;