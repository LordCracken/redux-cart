import { FC } from 'react';

import { INotification } from '../../interfaces';
import classes from './Notification.module.css';

const Notification: FC<INotification> = ({ status, title, message }) => {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
