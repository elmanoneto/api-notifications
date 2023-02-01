import { Notification } from '@application/entities/notification';

export class InMemoryNotificationsRepository {
  notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
    return notification;
  }
}
