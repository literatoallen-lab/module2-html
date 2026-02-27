import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main>
        <div className="container">
          <About />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>

      <footer>
        <p>© 2026 Allen Literato. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;