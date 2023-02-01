import { NotifcationProps, Notification } from '../entities/notification';

export type NotificationOutput = {
  id: string;
  category: string;
  content: string;
  createdAt: Date;
  recipientId: string;
  readAt: Date;
};

export abstract class NotificationsRepository {
  abstract create(notification: NotifcationProps): Promise<Notification>;
}
