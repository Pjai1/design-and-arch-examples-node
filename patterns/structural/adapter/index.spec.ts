import { expect, describe, it } from 'vitest';
import { PaymentService, LegacyPaymentAdapter, ModernPaymentAdapter } from './index';

describe('Adapter Pattern', () => {
  describe('PaymentService', () => {
    it('should work with legacy payment processor implementation', async () => {
      const legacyAdapter = new LegacyPaymentAdapter();
      const paymentService = new PaymentService(legacyAdapter);
      const result = await paymentService.handlePayment(100);
      expect(result).toBe(true);
    });

    it('should work with modern payment processor implementation', async () => {
      const modernAdapter = new ModernPaymentAdapter();
      const paymentService = new PaymentService(modernAdapter);
      const result = await paymentService.handlePayment(100);
      expect(result).toBe(true);
    });
  });
});
