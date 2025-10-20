import React from "react";

interface NotificationModalProps {
  message: string;
  visible: boolean;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  message,
  visible,
}) => {
  return (
    <div
      className={`fixed bottom-28 left-5 z-30 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="bg-[#22A0B7] text-white px-4 py-6 z-30 rounded-md w-max h-max shadow-2xl"
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  );
};

export default NotificationModal;
