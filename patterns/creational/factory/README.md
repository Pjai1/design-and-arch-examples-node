# Factory Pattern

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## Implementation Details

This implementation demonstrates a `DocumentFactory` that creates different types of documents (PDF, Word) based on the requested type. The pattern is implemented using:

1. A `Document` interface that defines the common operations all documents must implement
2. Concrete implementations (`PDFDocument` and `WordDocument`) that implement the interface
3. A factory class (`DocumentFactory`) that handles the creation of document objects

## Usage Example

```typescript
import { DocumentFactory } from './index';

// Create a PDF document
const pdfDoc = DocumentFactory.createDocument('pdf', 'report.pdf');
pdfDoc.open(); // Outputs: Opening PDF document: report.pdf
pdfDoc.save(); // Outputs: Saving PDF document: report.pdf

// Create a Word document
const wordDoc = DocumentFactory.createDocument('word', 'report.docx');
wordDoc.open(); // Outputs: Opening Word document: report.docx
wordDoc.print(); // Outputs: Printing Word document: report.docx
```

## Benefits

- Encapsulates object creation logic
- Makes it easy to add new document types without modifying existing code
- Provides a single point of control for object creation
- Promotes loose coupling between client code and concrete implementations

## When to Use

- When you need to create different types of objects that share a common interface
- When the exact type of object needed isn't known until runtime
- When you want to encapsulate the object creation logic
- When you want to make it easy to add new types of objects
