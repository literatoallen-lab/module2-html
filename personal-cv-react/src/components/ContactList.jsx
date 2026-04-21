import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div style={{ marginTop: "20px", padding: "10px", borderTop: "1px solid #ccc" }}>
      <h2>Saved Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;