import "./Services.css";

export const Services = () => {
  return (
    <section id="services" className="services">
      <hr />
      <div className="services-container">
        <h2 className="services-title">What I Do</h2>
        <div className="service-container">
          <ul className="service-items">
            <li className="service-item">Celebrity makeup</li>
            <li className="service-item">Beauty makeup</li>
            <li className="service-item">Editorial makeup</li>
            <li className="service-item">Fashion shows</li>
            <li className="service-item">Bridal and other special events</li>
            <li className="service-item">Individual Makeup lessons</li>
          </ul>
          <img
            src="/images/services-image.jpeg"
            alt="me at work"
            className="services-photo"
          />
        </div>
      </div>
    </section>
  );
};
