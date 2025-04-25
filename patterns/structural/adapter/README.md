# Adapter Pattern

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate. It acts as a bridge between two incompatible interfaces by converting the interface of one class into another interface that clients expect.

## Implementation Details

This implementation demonstrates the Adapter pattern using a practical example of payment processing systems. It shows how to adapt different payment systems (legacy and modern) to a common interface.

### Key Components

1. **Target Interface (`PaymentProcessor`)**

   - The interface that clients expect to work with
   - Defines the common contract for payment processing

2. **Adaptees**

   - `LegacyPaymentSystem`: An existing system with an incompatible interface
   - `ModernPaymentSystem`: Another system with a different interface

3. **Adapters**

   - `LegacyPaymentAdapter`: Adapts the legacy system to the common interface
   - `ModernPaymentAdapter`: Adapts the modern system to the common interface

4. **Client (`PaymentService`)**
   - Works with the target interface
   - Can use any adapter without knowing the specific implementation details

## Usage Example

```typescript
// Using the legacy payment system
const legacyAdapter = new LegacyPaymentAdapter();
const paymentService = new PaymentService(legacyAdapter);
await paymentService.handlePayment(100);

// Using the modern payment system
const modernAdapter = new ModernPaymentAdapter();
const paymentService = new PaymentService(modernAdapter);
await paymentService.handlePayment(100);
```

## Benefits

- Allows incompatible interfaces to work together
- Promotes loose coupling between components
- Makes it easy to add new adapters for different systems
- Maintains the Single Responsibility Principle
- Follows the Open/Closed Principle

## When to Use

- When you need to use an existing class, but its interface doesn't match the one you need
- When you want to create a reusable class that cooperates with classes that don't have compatible interfaces
- When you need to use several existing subclasses, but it's impractical to adapt their interface by subclassing each one
