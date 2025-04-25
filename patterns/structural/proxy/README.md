# Virtual Proxy Pattern

The Virtual Proxy pattern is a structural design pattern that provides a placeholder for an expensive object. It creates the real object only when it's actually needed, implementing lazy initialization.

## Implementation Details

This implementation demonstrates the Virtual Proxy pattern using a practical example of an image loading system. The proxy delays the loading of a large image until it's actually needed to be displayed, while still providing access to basic image information (like dimensions) without loading the full image.

### Key Components

1. **Subject Interface (`Image`)**

   - Defines the common interface for RealSubject and Proxy
   - Includes methods for displaying the image and getting its dimensions

2. **Real Subject (`RealImage`)**

   - Represents the expensive object to be created
   - Performs the actual image loading from disk
   - Contains the full image data and display logic

3. **Virtual Proxy (`ImageProxy`)**

   - Acts as a placeholder for the RealImage
   - Delays the creation of the RealImage until it's needed
   - Provides access to basic image information without loading the full image
   - Implements the same interface as the RealImage

4. **Client (`ImageViewer`)**
   - Works with both RealImage and ImageProxy through the Image interface
   - Doesn't need to know whether it's working with a proxy or a real object

## Usage Example

```typescript
// Create an image proxy
const proxy = new ImageProxy('large-image.jpg');

// Create a viewer that works with the proxy
const viewer = new ImageViewer(proxy);

// Get image dimensions without loading the full image
console.log(`Image dimensions: ${proxy.getWidth()}x${proxy.getHeight()}`);

// Display the image (triggers loading)
viewer.showImage();
```

## Benefits

- Improves performance by delaying the creation of expensive objects
- Reduces memory usage by only loading objects when needed
- Provides a way to access basic information about an object without loading it entirely
- Follows the Single Responsibility Principle
- Follows the Open/Closed Principle

## When to Use

- When you need to work with objects that are expensive to create
- When you want to delay the loading of large resources
- When you need to provide basic information about an object without loading it entirely
- When you want to optimize memory usage
- When you want to improve application startup time
