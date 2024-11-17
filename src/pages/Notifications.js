import React, { useState } from 'react';
import './Notifications.css'; // Optional custom styles

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new team invitation!', read: false },
    { id: 2, message: 'Event registration confirmed.', read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <ul className="notifications-list">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={notif.read ? 'read' : 'unread'}
            onClick={() => markAsRead(notif.id)}
          >
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
