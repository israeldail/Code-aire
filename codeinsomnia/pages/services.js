import Head from 'next/head'

const Services = () => {
  return (
    <>
      <Head>
        <title>Code Insomnia | Services</title>
      </Head>
      <div className="service-body">

        <section className='titlebox'>
          <h1 className='title'>Services</h1>
        </section>

        <section className="web-services">
          <h3>Web and Mobile Development</h3>
        </section>
        <div className='table-div'>
          <section className="web-services-body">
            <ul>
              <li className='service-list'>React Native</li>
              <p className='service-paragraph'>We made a few projects using React Native such as Fiver Star Dating App </p>
              <li className='service-list'>Python</li>
              <p className='service-paragraph'>We made a few projects using React Native such as Fiver Star Dating App </p>
              <li className='service-list'>Next.JS</li>
              <p className='service-paragraph'>We made a few projects using React Native such as Fiver Star Dating App </p>
              <li className='service-list'>ReactJS</li>
              <p className='service-paragraph'>We made a few projects using React Native such as Fiver Star Dating App </p>
            </ul>
          </section>
          <section className='web-services-body1'>

          </section>
        </div>


        <section className="data-services">
          <h3>Data Analysis</h3>
        </section>

        <div className='table-div'>
          <section className="data-services-body">
            <ul>
              <li className='service-list'>Python</li>
            </ul>
          </section>

          <section className='data-services-body1'>

          </section>
        </div>

        <section className="automation-services">
          <h3>Automation Services</h3>
        </section>

        <div className='table-div'>
          <section className="automation-services-body">
            <ul>
              <li className='service-list'>Python</li>
            </ul>
          </section>

          <section className='automation-services-body1'>

          </section>
        </div>

        <section className="qanda-services">
          <h3>Quality Assurance</h3>
        </section>

        <div className='table-div'>
          <section className="qanda-services-body">
            <ul>
              <li className='service-list'>Python</li>
            </ul>
          </section>

          <section className='qanda-services-body1'>

          </section>
        </div>

      </div>
    </>
  )
}

export default Services;