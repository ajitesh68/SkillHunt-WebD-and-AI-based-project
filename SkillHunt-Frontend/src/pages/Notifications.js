import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Registration: Finibus Bonorum et Malorum', type: 'Joined New User', message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', user: 'Allen Deu', read: false, timestamp: '24 Nov 2018 at 9:30 AM' },
    { id: 2, title: 'Darren Smith sent new message', type: 'Message', message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', user: 'Darren', read: false, timestamp: '24 Nov 2018 at 9:30 AM' },
    { id: 3, title: 'Arin Ganshiram Commented on post', type: 'Comment', message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', user: 'Arin Ganshiram', read: false, timestamp: '24 Nov 2018 at 9:30 AM' },
    { id: 4, title: 'Jullet Den Connect Allen Depk', type: 'Connect', message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', user: 'Jullet Den', read: false, timestamp: '24 Nov 2018 at 9:30 AM' },
    { id: 5, title: 'David sent a message', type: 'Message', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', user: 'David', read: false, timestamp: '25 Nov 2018 at 1:00 PM' },
    { id: 6, title: 'New Post Published by Alice', type: 'Post', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', user: 'Alice', read: false, timestamp: '25 Nov 2018 at 2:15 PM' },
    { id: 7, title: 'Sarah liked your post', type: 'Like', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', user: 'Sarah', read: false, timestamp: '25 Nov 2018 at 3:45 PM' },
    { id: 8, title: 'Event Reminder: Hackathon 2024', type: 'Event', message: 'Don\'t forget the hackathon event tomorrow!', user: 'Hackathon Team', read: false, timestamp: '25 Nov 2018 at 4:00 PM' },
  ]);

  const [activeNotification, setActiveNotification] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const handleNotificationClick = (notif) => {
    markAsRead(notif.id);
    setActiveNotification(notif);
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div style={styles.notificationsContainer}>
      <h1 style={styles.title}>Notifications</h1>
      <ul style={styles.notificationsList}>
        {notifications.map((notif) => (
          <li
            key={notif.id}
            style={notif.read ? styles.read : styles.unread}
            onClick={() => handleNotificationClick(notif)}
          >
            <strong>{notif.title}</strong> - {notif.type} <br />
            <span style={styles.timestamp}>{notif.timestamp}</span>
          </li>
        ))}
      </ul>

      {isPopupOpen && activeNotification && (
        <div style={styles.popupBackground}>
          <div style={styles.popup}>
            <button onClick={closePopup} style={styles.closeButton}>X</button>
            <h2>{activeNotification.title}</h2>
            <p><strong>Type:</strong> {activeNotification.type}</p>
            <p><strong>Message:</strong> {activeNotification.message}</p>
            <p><strong>From:</strong> {activeNotification.user}</p>
            <p><strong>Time:</strong> {activeNotification.timestamp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  notificationsContainer: {
    padding: '30px',
    backgroundColor: '#001f3d', // Navy Blue Background
    borderRadius: '10px',
    minHeight: '100vh',
    color: '#ffffff',
  },
  title: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#ff0000', // Red color for title
  },
  notificationsList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  notificationsListItem: {
    padding: '20px',
    marginBottom: '15px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '18px',
  },
  unread: {
    backgroundColor: '#00274d', // Dark Navy Blue for unread
    borderLeft: '8px solid #ff0000', // Red left border for unread
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  read: {
    backgroundColor: '#004080', // Lighter Navy Blue for read notifications
    borderLeft: '8px solid #ff4d4d', // Lighter red left border for read
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  timestamp: {
    fontSize: '14px',
    color: '#bbb',
  },
  popupBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    color: '#333',
    maxWidth: '600px',
    width: '80%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default Notifications;
