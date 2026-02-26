import profilePic from "../images/profile.jpg"; // adjust path relative to About.js

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>

      <img src={profilePic} alt="Profile photo" />

      <p>Simple student and focused on acads.</p>

      <p>
        Email:{" "}
        <a href="mailto:literato.allen@gmail.com">
          literato.allen@gmail.com
        </a>
        <br />
        GitHub:{" "}
        <a
          href="https://github.com/literatoallen-lab"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com
        </a>
      </p>
    </section>
  );
}

export default About;