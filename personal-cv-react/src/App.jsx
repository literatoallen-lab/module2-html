import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './index.css'; 

function App() {
 
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <div className={darkMode ? "dark-mode" : ""}>
      
    
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <main className="container">
      
        <Header />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Allen Literato. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; // 