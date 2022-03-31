import NoticeIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import AlertIcon from '@mui/icons-material/Cancel';
import WarningIcon from '@mui/icons-material/Warning';

export type FlashMessageProps = {
  type: ('notice' | 'info' | 'alert' | 'warning');
  message?: string;
  hideTitle?: boolean;
}

export default function FlashMessage({
  type = 'notice',
  message,
  hideTitle = false,
}: FlashMessageProps) {
  const iconOptions = {
    notice: NoticeIcon,
    info: InfoIcon,
    alert: AlertIcon,
    warning: WarningIcon,
  }

  const Icon = iconOptions[type];
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className={`flash flash--${type}`}>
      <Icon />
      <div className="margin-left-md">
        <div className="flash__message-type">{!hideTitle ? capitalizedType : ''}</div>
        <div className="flash__message">{message}</div>
      </div>
    </div>
  )
}
