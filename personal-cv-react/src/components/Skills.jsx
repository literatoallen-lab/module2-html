import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card">
      <h2>Skills</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Skills
      </button>
      {visible && (
        <ul>
          <li>Sketch</li>
          <li>Graphic Designer</li>
          <li>Python</li>
          <li>Web Development
            <ul>
              <li>Frontend (HTML, CSS, JavaScript)</li>
              <li>Backend</li>
            </ul>
          </li>
        </ul>
      )}
    </section>
  );
}
export default Skills;