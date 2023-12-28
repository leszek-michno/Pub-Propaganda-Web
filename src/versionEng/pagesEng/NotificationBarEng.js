import React, { useState, useEffect } from 'react';
import {NotificationBarEng} from '../../databases/Notification';

const NoteEng = () => {
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
      {showNotification && <NotificationBarEng/>}
    </div>
  );
};

export default NoteEng;