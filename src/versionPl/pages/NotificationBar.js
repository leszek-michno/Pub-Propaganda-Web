import React, { useState, useEffect } from 'react';
import {NotificationBarPL} from '../../databases/Notification';

const Note = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timeoutId = setTimeout(() => {
      setShowNotification(false);
    }, 9000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {showNotification && <NotificationBarPL/>}
    </div>
  );
};

export default Note;