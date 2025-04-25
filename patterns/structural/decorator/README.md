# Decorator Pattern

The Decorator pattern is a structural design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class. It provides a flexible alternative to subclassing for extending functionality.

## Implementation Details

This implementation demonstrates the Decorator pattern using a practical example of text formatting. It shows how to dynamically add formatting capabilities (bold, italic, underline) to text without modifying the original text formatter.

### Key Components

1. **Component Interface (`TextFormatter`)**

   - Defines the interface for objects that can have responsibilities added to them dynamically

2. **Concrete Component (`PlainTextFormatter`)**

   - Defines an object to which additional responsibilities can be attached

3. **Decorator (`TextFormatterDecorator`)**

   - Maintains a reference to a Component object
   - Defines an interface that conforms to Component's interface

4. **Concrete Decorators**

   - `BoldDecorator`: Adds bold formatting
   - `ItalicDecorator`: Adds italic formatting
   - `UnderlineDecorator`: Adds underline formatting

5. **Client (`TextEditor`)**
   - Uses the decorated component through the Component interface

## Usage Example

```typescript
// Create a plain text formatter
const plainFormatter = new PlainTextFormatter();

// Add formatting decorators
const boldFormatter = new BoldDecorator(plainFormatter);
const italicFormatter = new ItalicDecorator(boldFormatter);
const underlineFormatter = new UnderlineDecorator(italicFormatter);

// Use the decorated formatter
const editor = new TextEditor(underlineFormatter);
const formattedText = editor.formatText('Hello');
// Result: <u>_**Hello**_</u>
```

## Benefits

- More flexible than static inheritance
- Avoids feature-laden classes high up in the hierarchy
- Can add and remove responsibilities at runtime
- Can combine multiple behaviors by wrapping an object with multiple decorators
- Follows the Single Responsibility Principle
- Follows the Open/Closed Principle

## When to Use

- When you need to add responsibilities to individual objects dynamically and transparently
- When you need to add responsibilities that can be withdrawn
- When extension by subclassing is impractical
- When you want to keep new functionality separate
