const Services = () => {
  return (
    <div className="service-body">

      <section className='titlebox'>
        <h1 className='title'>Services</h1>
      </section>

      <section className="web-services">
        <h3>Web and Mobile Development</h3>
      </section>
      <section className="web-services-body">
        <ul>
          <li>React Native</li>
          <li>Python</li>
          <li>Next.JS</li>
          <li>ReactJS</li>
        </ul>
      </section>

      <section className="data-services">
        <h3>Data Analysis</h3>
      </section>
      <section className="data-services-body">
        <ul>
          <li>Python</li>
        </ul>
      </section>

      <section className="automation-services">
        <h3>Automation Services</h3>
      </section>
      <section className="automation-services-body">
        <ul>
          <li>Python</li>
        </ul>
      </section>

    </div>
  )
}

export default Services;