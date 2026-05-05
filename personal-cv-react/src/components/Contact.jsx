import { useState } from "react";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [emailAddr, setEmailAddr] = useState("");
  const [userMsg, setUserMsg] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        name: fullName, 
        email: emailAddr, 
        message: userMsg 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Alert: " + data.message);
        setFullName(""); setEmailAddr(""); setUserMsg("");
        window.location.reload(); 
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <section className="contact-box">
      <h2>Send a Message</h2>
      <form onSubmit={handleFormSubmission}>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <input type="email" placeholder="Email Address" value={emailAddr} onChange={(e) => setEmailAddr(e.target.value)} required />
        <textarea placeholder="Write your message here..." value={userMsg} onChange={(e) => setUserMsg(e.target.value)} required></textarea>
        <button type="submit">Send Feedback</button>
      </form>
    </section>
  );
}

export default Contact;