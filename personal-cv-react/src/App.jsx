import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skillSet = ["HTML", "CSS", "JavaScript", "React"];

  const academicData = [
    { year: "2028", program: "College", school: "USTP CDO Campus" },
    { year: "2024", program: "Senior High School", school: "Asian Business Cabletow Cooperative Academy (ABCCA) CDO Campus" },
    { year: "2022", program: "High School", school: "Lapasan National High School (LNHS)" },
    { year: "2018", program: "Elementary", school: "East City Central School (ECCS)" }
  ];

  return (

    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {/* Gibalik ang original button text */}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills skills={skillSet} />
      <Education education={academicData} />
      <Contact />
      <ContactList />
    </div>
  );
}

export default App;