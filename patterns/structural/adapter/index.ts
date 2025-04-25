interface PaymentProcessor {
  processPayment(amount: number): Promise<boolean>;
}

class LegacyPaymentSystem {
  public async makePayment(amount: number, currency: string): Promise<{ success: boolean }> {
    console.log(`Processing legacy payment of ${amount} ${currency}`);
    return { success: true };
  }
}

class ModernPaymentSystem {
  public async pay(amount: number): Promise<boolean> {
    console.log(`Processing modern payment of ${amount}`);
    return true;
  }
}

export class LegacyPaymentAdapter implements PaymentProcessor {
  private legacySystem: LegacyPaymentSystem;

  constructor() {
    this.legacySystem = new LegacyPaymentSystem();
  }

  public async processPayment(amount: number): Promise<boolean> {
    const result = await this.legacySystem.makePayment(amount, 'USD');
    return result.success;
  }
}

export class ModernPaymentAdapter implements PaymentProcessor {
  private modernSystem: ModernPaymentSystem;

  constructor() {
    this.modernSystem = new ModernPaymentSystem();
  }

  public async processPayment(amount: number): Promise<boolean> {
    return this.modernSystem.pay(amount);
  }
}

export class PaymentService {
  private processor: PaymentProcessor;

  constructor(processor: PaymentProcessor) {
    this.processor = processor;
  }

  public async handlePayment(amount: number): Promise<boolean> {
    return this.processor.processPayment(amount);
  }
}
