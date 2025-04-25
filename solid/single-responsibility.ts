/**
 * Single Responsibility Principle (SRP) Example
 *
 * A class should have only one reason to change, meaning it should have only one job or responsibility.
 */

// Bad Example: A class handling multiple types of notifications
// oxlint-disable-next-line eslint-no-unused-vars
class NotificationService {
  constructor(
    private emailConfig: { apiKey: string; fromAddress: string },
    private smsConfig: { apiKey: string; fromNumber: string },
    private pushConfig: { apiKey: string; appId: string },
  ) {}

  sendEmail(to: string, message: string) {
    console.log(`Sending email to ${to} from ${this.emailConfig.fromAddress}: ${message}`);
  }

  sendSMS(to: string, message: string) {
    console.log(`Sending SMS to ${to} from ${this.smsConfig.fromNumber}: ${message}`);
  }

  sendPushNotification(to: string, message: string) {
    console.log(`Sending push notification to ${to} from app ${this.pushConfig.appId}: ${message}`);
  }
}

// Good Example: Separating each notification type into its own class
export class EmailNotificationService {
  constructor(
    private config: { apiKey: string; fromAddress: string },
    private logger: { info: (msg: string) => void } = console,
  ) {}

  send(to: string, message: string) {
    this.logger.info(`Sending email to ${to} from ${this.config.fromAddress}: ${message}`);
  }
}

export class SMSNotificationService {
  constructor(
    private config: { apiKey: string; fromNumber: string },
    private logger: { info: (msg: string) => void } = console,
  ) {}

  send(to: string, message: string) {
    this.logger.info(`Sending SMS to ${to} from ${this.config.fromNumber}: ${message}`);
  }
}

export class PushNotificationService {
  constructor(
    private config: { apiKey: string; appId: string },
    private logger: { info: (msg: string) => void } = console,
  ) {}

  send(to: string, message: string) {
    this.logger.info(`Sending push notification to ${to} from app ${this.config.appId}: ${message}`);
  }
}

const emailService = new EmailNotificationService({
  apiKey: 'email-api-key',
  fromAddress: 'noreply@example.com',
});

const smsService = new SMSNotificationService({
  apiKey: 'sms-api-key',
  fromNumber: '+1234567890',
});

const pushService = new PushNotificationService({
  apiKey: 'push-api-key',
  appId: 'com.example.app',
});

emailService.send('john@example.com', 'Welcome to our platform!');
smsService.send('+1234567890', 'Your account has been created');
pushService.send('user123', 'New features available!');
