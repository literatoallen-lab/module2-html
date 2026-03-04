import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
return (
<>
<div className={darkMode ? "dark-mode" : ""}>
  <button onClick={() => setDarkMode(!darkMode)}>
   {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

<Header />
<About />
<Skills />
<Education />
<Contact />
</div>

</>

);
}
export default App;