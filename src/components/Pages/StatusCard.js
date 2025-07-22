import LetterAvatars from '../UI/Avatars';
import classes from './StatusCard.module.css';

const StatusCard = ({ title, employees, statusType }) => {
    return (
    <div className={classes['status-card']}>
      <h3 className={classes['status-card-title']}>{title}</h3>
      <div className={classes['status-employees']}>
        {employees.slice(0, 5).map((emp) => (
          <div key={emp.id} className={classes['employee-item']}>
            <LetterAvatars name={emp.initials}  />
            <div className={classes['employee-info']}>
              <div className={classes['employee-name']}>{emp.name}</div>
              <div className={classes['employee-role']}>{emp.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )};

  export default StatusCard;