import s from "./Notification.module.css";

const Notification = ({ message = "No feedback yet" }) => {
  return (
    <div>
      <p className={s.notification}>{message}</p>
    </div>
  );
};
export default Notification;
