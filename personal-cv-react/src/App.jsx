import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList"; // Gi-import ang ContactList
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const education = [
    {
      year: "2028",
      program: "College",
      school: "USTP CDO Campus"
    },
    {
      year: "2024",
      program: "Senior High School",
      school: "ABCCA CDO Campus"
    },
    {
      year: "2022",
      program: "High School",
      school: "LNHS"
    },
    {
      year: "2018",
      program: "Elementary",
      school: "ECCS"
    }
  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
      {/* Gi-display ang ContactList sa ubos sa Contact component */}
      <ContactList />
    </div>
  );
}

export default App;