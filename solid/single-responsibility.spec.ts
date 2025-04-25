import { describe, it, expect, vi } from 'vitest';
import { EmailNotificationService, SMSNotificationService, PushNotificationService } from './single-responsibility';

describe('Single Responsibility Principle', () => {
  const mockLogger = { info: vi.fn() };

  describe('EmailNotificationService', () => {
    it('should send email with correct configuration', () => {
      const service = new EmailNotificationService({ apiKey: 'test-key', fromAddress: 'test@example.com' }, mockLogger);

      service.send('recipient@example.com', 'Test message');

      expect(mockLogger.info).toHaveBeenCalledWith(
        'Sending email to recipient@example.com from test@example.com: Test message',
      );
    });
  });

  describe('SMSNotificationService', () => {
    it('should send SMS with correct configuration', () => {
      const service = new SMSNotificationService({ apiKey: 'test-key', fromNumber: '+1234567890' }, mockLogger);

      service.send('+9876543210', 'Test message');

      expect(mockLogger.info).toHaveBeenCalledWith('Sending SMS to +9876543210 from +1234567890: Test message');
    });
  });

  describe('PushNotificationService', () => {
    it('should send push notification with correct configuration', () => {
      const service = new PushNotificationService({ apiKey: 'test-key', appId: 'com.test.app' }, mockLogger);

      service.send('user123', 'Test message');

      expect(mockLogger.info).toHaveBeenCalledWith(
        'Sending push notification to user123 from app com.test.app: Test message',
      );
    });
  });
});
