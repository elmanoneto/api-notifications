import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/prismaNotifications.repository';
import { NotificationMapper } from './mappers/notification.mapper';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
    NotificationMapper,
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
