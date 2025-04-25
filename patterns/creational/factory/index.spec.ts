import { describe, expect, it, vi, beforeEach } from 'vitest';
import { DocumentFactory } from './index';

describe('DocumentFactory', () => {
  let factory: DocumentFactory;

  beforeEach(() => {
    factory = new DocumentFactory();

    vi.resetAllMocks();
  });

  describe('createDocument', () => {
    it('should create a PDF document', () => {
      const pdfDoc = factory.createDocument('pdf', 'test.pdf');
      const consoleSpy = vi.spyOn(console, 'log');

      pdfDoc.open();
      expect(consoleSpy).toHaveBeenCalledWith('Opening PDF document: test.pdf');

      pdfDoc.save();
      expect(consoleSpy).toHaveBeenCalledWith('Saving PDF document: test.pdf');

      pdfDoc.print();
      expect(consoleSpy).toHaveBeenCalledWith('Printing PDF document: test.pdf');
    });

    it('should create a Word document', () => {
      const wordDoc = factory.createDocument('word', 'test.docx');
      const consoleSpy = vi.spyOn(console, 'log');

      wordDoc.open();
      expect(consoleSpy).toHaveBeenCalledWith('Opening Word document: test.docx');

      wordDoc.save();
      expect(consoleSpy).toHaveBeenCalledWith('Saving Word document: test.docx');

      wordDoc.print();
      expect(consoleSpy).toHaveBeenCalledWith('Printing Word document: test.docx');
    });

    it('should throw an error for unsupported document types', () => {
      expect(() => factory.createDocument('invalid', 'test.txt')).toThrow('Unsupported document type: invalid');
    });
  });
});
