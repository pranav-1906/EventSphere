import { useState, useEffect } from "react";
import { db } from "./firebase"; // Ensure correct path
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import "./EventApp.css";

export default function EventApp() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", description: "", date: "" });

  // Fetch Events from Firebase Firestore
  useEffect(() => {
    const fetchEvents = async () => {
      const eventCollection = collection(db, "events");
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
    <div className="container">
      <div className="header">
        <h1 className="title">EventSphere🎉</h1>
        <h4 className="subtitle">The Ultimate Event App for Colleges</h4>
      </div>

      <div className="event-list">
        {events.map(ev => (
          <div key={ev.id} className="event-card">
            <div className="event-info">
              <h2 className="event-name">{ev.name}</h2>
              <p className="event-description">{ev.description}</p>
              <p className="event-date">📅 {ev.date}</p>
            </div>
            <button className="delete-btn" onClick={() => deleteEvent(ev.id)}>✖</button>
          </div>
        ))}
      </div>

      <div className="add-event">
        <h2 className="form-title">Add a New Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
          className="input-field"
        />
        <textarea
          placeholder="Event Description"
          value={newEvent.description}
          onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
          className="input-field"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
          className="input-field"
        />
        <button onClick={addEvent} className="add-btn">➕ Add Event</button>
      </div>
    </div>
  );
}