import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { NotificationMapper } from '../database/mappers/notification.mapper';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, NotificationMapper],
})
export class HttpModule {}
