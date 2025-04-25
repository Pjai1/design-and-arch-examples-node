/**
 * Factory Pattern Implementation
 *
 * This example demonstrates a DocumentFactory that creates different types of documents
 * (PDF, Word, etc.) based on the requested type.
 */

interface Document {
  open(): void;
  save(): void;
  print(): void;
}

class PDFDocument implements Document {
  constructor(private name: string) {}

  open(): void {
    console.log(`Opening PDF document: ${this.name}`);
  }

  save(): void {
    console.log(`Saving PDF document: ${this.name}`);
  }

  print(): void {
    console.log(`Printing PDF document: ${this.name}`);
  }
}

class WordDocument implements Document {
  constructor(private name: string) {}

  open(): void {
    console.log(`Opening Word document: ${this.name}`);
  }

  save(): void {
    console.log(`Saving Word document: ${this.name}`);
  }

  print(): void {
    console.log(`Printing Word document: ${this.name}`);
  }
}

export class DocumentFactory {
  public createDocument(type: string, name: string): Document {
    switch (type) {
      case 'pdf':
        return new PDFDocument(name);
      case 'word':
        return new WordDocument(name);
      default:
        throw new Error(`Unsupported document type: ${type}`);
    }
  }
}
