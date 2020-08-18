import { notification } from 'antd';

export default function LargeSuccess(title, text) {
    notification.success({
      message: title,
      description: text,
    })
}