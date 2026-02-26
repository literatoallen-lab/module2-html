import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>

      {visible && (
        <section className="card">
          <h2>Skills</h2>

          <ul>
            <li>
              Web Development
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default Skills;