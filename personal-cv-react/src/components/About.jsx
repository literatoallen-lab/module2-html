import profileImg from '../images/profile.jpg'; 

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p>
          Welcome! I work professionally and
        is passionate about arts and technologies.
      </p>
      {}
      <img src={profileImg} alt="Profile" />
    </section>
  );
}

export default About;