import PropTypes from 'prop-types'; 

import s from './notification.module.css'

const Notification = ({ message }) => {
    return (
        <p className={s.message}>{message}</p>
    );
};

Notification.defaultProps = {
    message: '',
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;