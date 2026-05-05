import { useEffect, useState } from "react";

function ContactList() {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const loadEntries = () => {
    
    fetch("http://localhost/cv-api/getContacts.php")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const deleteEntry = (id) => {
    if (window.confirm("Do you want to delete this?")) {
      
      fetch("http://localhost/cv-api/deleteContact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      }).then(() => loadEntries());
    }
  };

  const saveUpdate = (id) => {
   
    fetch("http://localhost/cv-api/updateContact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, message: newText }),
    }).then(() => {
      setEditingId(null);
      loadEntries();
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Message Records</h2>
      {entries.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
          <p><strong>{item.name}</strong> ({item.email})</p>
          {editingId === item.id ? (
            <div>
              <textarea value={newText} onChange={(e) => setNewText(e.target.value)} /> <br/>
              <button onClick={() => saveUpdate(item.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <p>{item.message}</p>
          )}
          <button onClick={() => { setEditingId(item.id); setNewText(item.message); }}>Edit</button>
          <button onClick={() => deleteEntry(item.id)} style={{ color: "red" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;