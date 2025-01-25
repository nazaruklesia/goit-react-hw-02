import s from "./Notification.module.css";

const Notification = ({ message = "No feedback yet" }) => {
  return (
    <div className={s.Notification}>
      <p>{message}</p>
    </div>
  );
};
export default Notification;
