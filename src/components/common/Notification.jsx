import { notification } from 'antd';

export const openNotificationWithIcon = (type, title, description, btn, duration) => {
    notification[type]({
        message: title,
        description: description,
        duration: duration,
        btn
    });
};