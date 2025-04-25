/**
 * Virtual Proxy Pattern Implementation
 *
 * This example demonstrates how to use a proxy to implement
 * lazy initialization of an expensive image loading system.
 */

interface Image {
  display(): void;
  getWidth(): number;
  getHeight(): number;
}

class OriginalImage implements Image {
  private filename: string;
  private width: number = 800;
  private height: number = 600;

  constructor(filename: string) {
    this.filename = filename;
    console.log(`Loading image from disk: ${filename}`);
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    this.width = 800;
    this.height = 600;
  }

  public display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }
}

export class ImageProxy implements Image {
  private filename: string;
  private realImage: OriginalImage | null;
  private width: number = 800;
  private height: number = 600;

  constructor(filename: string) {
    this.filename = filename;
    this.realImage = null;
  }

  private getRealImage(): OriginalImage {
    if (!this.realImage) {
      this.realImage = new OriginalImage(this.filename);
    }
    return this.realImage;
  }

  public display(): void {
    this.getRealImage().display();
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }
}

export class ImageViewer {
  private image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  public showImage(): void {
    console.log(`Image dimensions: ${this.image.getWidth()}x${this.image.getHeight()}`);
    this.image.display();
  }
}
