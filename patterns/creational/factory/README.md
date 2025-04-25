# Factory Pattern

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## Use Cases

- When you need to create different types of objects that share a common interface
- When the exact type of object needed isn't known until runtime
- When you want to encapsulate the object creation logic
- When you want to make it easy to add new types of objects

## Implementation

The Factory pattern is implemented by:

1. A `Document` interface that defines the common operations all documents must implement
2. Concrete implementations (`PDFDocument` and `WordDocument`) that implement the interface
3. A factory class (`DocumentFactory`) that handles the creation of document objects

## Example

```typescript
class DocumentFactory {
  static createDocument(type: string, name: string): Document {
    switch (type) {
      case 'pdf':
        return new PDFDocument(name);
      case 'word':
        return new WordDocument(name);
      default:
        throw new Error(`Unknown document type: ${type}`);
    }
  }
}
```

## Benefits

- Encapsulates object creation logic
- Makes it easy to add new document types without modifying existing code
- Provides a single point of control for object creation
- Promotes loose coupling between client code and concrete implementations

## Considerations

- Can lead to a large number of classes
- May be overkill for simple object creation
- Can make the code more complex
- May violate the Open/Closed Principle if not designed carefully
