import { Content } from './content';

describe('Content notification', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You received a friend solicitation.');

    expect(content).toBeTruthy();
  });

  it('not should be able to create a notification with less than 5 chars', () => {
    expect(() => new Content('You')).toThrow();
  });

  it('not should be able to create a notification with more than 240 chars', () => {
    expect(() => new Content('y'.repeat(241))).toThrow();
  });
});
