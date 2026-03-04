import profileImg from '../images/profile.jpg'; 

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p>
        Study First.
      </p>
      {}
      <img src={profileImg} alt="Profile" />
    </section>
  );
}

export default About;