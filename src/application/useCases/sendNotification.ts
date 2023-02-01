import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications.repository';
import { NotificationMapper } from '../../infra/database/mappers/notification.mapper';

export type SendNotificationRequest = {
  recipientId: string;
  content: string;
  category: string;
};

export type SendNotificationResponse = {
  notification: Notification;
};

@Injectable()
export class SendNotification {
  constructor(readonly notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = request;

    let notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
      canceledAt: null,
      readAt: null,
    });

    const dbCreatedNotification = await this.notificationsRepository.create(
      notification,
    );

    notification.id = dbCreatedNotification.id;

    return {
      notification,
    };
  }
}
