import { useState, useEffect } from "react";
import { db } from "./firebase"; // Ensure the correct path
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; // Import Firestore functions

export default function EventApp() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", description: "", date: "" });

  // Fetch Events from Firebase Firestore
  useEffect(() => {
    const fetchEvents = async () => {
      const eventCollection = collection(db, "events"); // Corrected
      const eventSnapshot = await getDocs(eventCollection);
      setEvents(eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  // Add Event to Firestore
  const addEvent = async () => {
    if (!newEvent.name || !newEvent.date) return;
    const eventCollection = collection(db, "events");
    const docRef = await addDoc(eventCollection, newEvent);
    setEvents([...events, { ...newEvent, id: docRef.id }]);
    setNewEvent({ name: "", description: "", date: "" });
  };

  // Delete Event from Firestore
  const deleteEvent = async (id) => {
    await deleteDoc(doc(db, "events", id));
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "5px" }}>Evend</h1>
      <h4 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>The Event App for Colleges</h4>
      <div>
        {events.map(ev => (
          <div key={ev.id} style={{ padding: "12px", marginBottom: "10px", backgroundColor: "#fff", borderRadius: "6px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "16px", margin: "0", color: "#007bff" }}>{ev.name}</h2>
              <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>{ev.description}</p>
              <p style={{ fontSize: "12px", color: "#888" }}>📅 {ev.date}</p>
            </div>
            <button onClick={() => deleteEvent(ev.id)} style={{ backgroundColor: "#ff4d4d", color: "white", padding: "6px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>✖</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#fff", borderRadius: "6px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#28a745" }}>Add Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
          style={{ width: "100%", padding: "8px", marginBottom: "8px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <textarea
          placeholder="Event Description"
          value={newEvent.description}
          onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
          style={{ width: "100%", padding: "8px", marginBottom: "8px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
          style={{ width: "100%", padding: "8px", marginBottom: "8px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <button onClick={addEvent} style={{ width: "100%", backgroundColor: "#28a745", color: "white", padding: "8px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          ➕ Add Event
        </button>
      </div>
    </div>
  );
}