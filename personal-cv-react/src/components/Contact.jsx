function Contact() {
  return (
    <section className="card"> 
      <h2>Contact Me</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}
export default Contact;