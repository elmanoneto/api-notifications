import { Injectable } from '@nestjs/common';
import {
  NotifcationProps,
  Notification,
} from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { PrismaService } from './prisma.service';
import { NotificationMapper } from '../mappers/notification.mapper';

export type NotificationOutput = {
  id: string;
  category: string;
  content: string;
  createdAt: Date;
  recipientId: string;
  readAt: Date;
};

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(readonly prismaService: PrismaService) {}

  async create(notification: NotifcationProps): Promise<Notification> {
    const raw = NotificationMapper.map(notification['props']);

    const result = await this.prismaService.notificaiton.create({
      data: raw,
    });

    let notificationModel = new Notification(notification['props']);
    notificationModel.id = result.id;

    return notificationModel;
  }
}
