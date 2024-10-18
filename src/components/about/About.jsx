import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="card">
        <img
          src="/images/about-photo.jpeg"
          alt="photo of me"
          className="personal-photo"
        />
        <div className="text-container">
          <p>
            As a sought-after professional makeup artist, I bring wealth of
            experience and a refined touch to eveery project, whether it&apos;s
            working with hig-profile celebrities or on prestigious fashion and
            advertising campaigns. My artistry has graced the faces of renowned
            personalities such as Carla Bruni, Vaani Kapoor, Robin Schultz,
            Winona Oak, Amina Khalil, and Kylian Mbappé, elevating their
            presence across various platforms.
          </p>
          <p>
            I have been privileged to collaborate with top-tier publications
            including VOGUE, Harper&apos;s Bazaar, Marie Claire, Jamalouki, GQ,
            Haya, Mojeh, and L&apos;Officiel, contributing to editorial shoots
            that resonate with elegance and creativity. My work extends to
            iconic brands such as Chanel, Maybelline New York, Benefit,
            Mercedes, Meras, Amazon, Ounass, Falcons, BLSSD, Tiffany & Co.,
            Gucci, and Dior, where my talent has played a key role in crafting
            honorable campaigns.
          </p>
          <p>
            From fashion editorials and runway shows to TV commercials and music
            videos, I have developed a keen eye for detail, an ability to adapt
            to various styles, and a passion for enchancing natural beauty. My
            dedication to the craft and versatile approach en sure that every
            project is executed to perfection, leaving a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};
