export interface NotificationAlertGeneralProps {
    condition: boolean;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
  }