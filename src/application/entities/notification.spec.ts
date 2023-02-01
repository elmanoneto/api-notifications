import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'Test',
      content: new Content('New friend request'),
      createdAt: new Date(),
      recipientId: 'example-recipient-id',
      readAt: null,
    });

    expect(notification).toBeTruthy();
  });
});
