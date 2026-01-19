"use client"
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Alert from 'My_UI/alerts/main';
// import Alert from '@MINI/alerts/main';

let showNotificationExternally = () => { };

export const notify = (type = "info", heading = "", detail = "", duration = 4000) => {
  showNotificationExternally({ id: `${Date.now()}${Math.floor(10000 + Math.random() * 90000)}`, type, heading, detail, duration });
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function NotifyPortal() {
  const [notifications, setNotifications] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    showNotificationExternally = (notif) => {
      setNotifications((prev) => [...prev, notif]);
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== notif.id));
      }, notif.duration || 4000);
    };
  }, []);

  if (!isClient) return null;

  const container = document.getElementById('notify-container');
  if (!container) return null;

  return createPortal(
    <div className="fixed top-4 right-4 z-[1000] space-y-3 w-[320px] max-w-full">
      <AnimatePresence>
        {notifications.map(({ id, type, heading, detail, duration }) => (
          <motion.div
            key={id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
          className={`shadow-lg flex items-start justify-between gap-2 `}
          >
            <Alert
              type={type}
              heading={heading}
              message={detail}
              duration={duration}
              onClose={() => setNotifications((prev) => prev.filter((n) => n.id !== id))}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    container
  );
}
export { showNotificationExternally as notifyInstance };


