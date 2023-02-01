import { Body, Post, Controller, Get } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { CreateNotificationDTO } from '../dtos/createNotification.dto';
import { NotificationMapper } from '../../database/mappers/notification.mapper';

@Controller('notifications')
export class NotificationsController {
  constructor(readonly sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification: NotificationMapper.map(notification),
    };
  }
}
