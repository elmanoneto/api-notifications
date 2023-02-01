import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';

export type NotificationOutput = {
  id?: string;
  category: string;
  content: string;
  createdAt?: Date;
  recipientId: string;
  readAt?: Date;
  canceledAt?: Date;
};

@Injectable()
export class NotificationMapper {
  static map(notification: Notification): NotificationOutput {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      createdAt: notification.createdAt,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
    };
  }
}
