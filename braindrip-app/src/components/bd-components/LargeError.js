import { notification } from 'antd';

export default function LargeError(title, text) {
    notification.error({
      message: title,
      description: text,
    })
}