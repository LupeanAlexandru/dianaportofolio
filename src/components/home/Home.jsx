import './Home.css';

export const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Diana Tin</h1>
        <h2 className="hero-description">Makeup artist</h2>
        <img
          src="/images/messika5410.jpg"
          alt="home-image"
          className="homepage-image"
        />
      </div>
      <a href="#portofolio" className="hero-button">
        View Portfolio
      </a>
      <hr />
    </section>
  );
};