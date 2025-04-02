import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AdminDashboard.css';
import CreateNotice from './CreateNotice';
import UpdateEvent from './UpdateEvent';
import UpdateNotice from './UpdateNotice';
import CreateEvent from './CreateEvent';
import DeleteEvent from './DeleteEvent';
import DeleteNotice from './DeleteNotice';


const AdminDashboard = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchNotices();
    fetchEvents();
}, []);

const fetchNotices = async () => {
  try {
      const response = await axios.get("http://localhost:5000/api/notices");
      setNotices(response.data);
  } catch (error) {
      console.error("Error fetching notices:", error);
  }
};

const fetchEvents = async () => {
  try {
      const response = await axios.get("http://localhost:5000/api/events");
      setEvents(response.data);
  } catch (error) {
      console.error("Error fetching events:", error);
  }
};

const handleNoticeAdded = (newNotice) => {
  setNotices([...notices, newNotice]);
};

const handleEventAdded = (newEvent) => {
  setEvents([...events, newEvent]);
};

const handleNoticeUpdated = (updatedNotice) => {
  setNotices(notices.map((n) => (n.id === updatedNotice.id ? updatedNotice : n)));
  setSelectedNotice(null);
};

const handleEventUpdated = (updatedEvent) => {
  setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
  setSelectedEvent(null);
};

const handleNoticeDeleted = (noticeId) => {
  setNotices(notices.filter((n) => n.id !== noticeId));
};

const handleEventDeleted = (eventId) => {
  setEvents(events.filter((e) => e.id !== eventId));
};

  const logOut = async () => {
    await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
    navigate('/login');
  };

  return (
    <div>
        <h1>Admin Dashboard</h1>
        <button onClick={logOut}>Log Out</button>
        {/* Notices Section */}
        <h2>Manage Notices</h2>
        <CreateNotice onNoticeAdded={handleNoticeAdded} />
        {notices.map((notice) => (
            <div key={notice.id} className="notice-item">
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>
                <button onClick={() => setSelectedNotice(notice)}>Edit</button>
                <DeleteNotice noticeId={notice.id} onNoticeDeleted={handleNoticeDeleted} />
            </div>
        ))}
        {selectedNotice && (
            <UpdateNotice noticeId={selectedNotice.id} onNoticeUpdated={handleNoticeUpdated} />
        )}

        {/* Events Section */}
        <h2>Manage Events</h2>
        <CreateEvent onEventAdded={handleEventAdded} />
        {events.map((event) => (
            <div key={event.id} className="event-item">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{event.place} - {event.date} at {event.time}</p>
                <button onClick={() => setSelectedEvent(event)}>Edit</button>
                <DeleteEvent eventId={event.id} onEventDeleted={handleEventDeleted} />
            </div>
        ))}
        {selectedEvent && (
            <UpdateEvent eventId={selectedEvent.id} onEventUpdated={handleEventUpdated} />
        )}
    </div>
);
};

export default AdminDashboard;