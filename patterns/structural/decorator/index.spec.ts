import { expect, describe, it } from 'vitest';
import { TextEditor, BoldDecorator, ItalicDecorator, UnderlineDecorator } from './index';
import { PlainTextFormatter } from './index';

describe('Decorator Pattern', () => {
  describe('Single Decorator', () => {
    it('should apply bold formatting', () => {
      const plainFormatter = new PlainTextFormatter();
      const boldFormatter = new BoldDecorator(plainFormatter);
      const editor = new TextEditor(boldFormatter);

      const result = editor.formatText('Hello');
      expect(result).toBe('**Hello**');
    });

    it('should apply italic formatting', () => {
      const plainFormatter = new PlainTextFormatter();
      const italicFormatter = new ItalicDecorator(plainFormatter);
      const editor = new TextEditor(italicFormatter);

      const result = editor.formatText('Hello');
      expect(result).toBe('_Hello_');
    });

    it('should apply underline formatting', () => {
      const plainFormatter = new PlainTextFormatter();
      const underlineFormatter = new UnderlineDecorator(plainFormatter);
      const editor = new TextEditor(underlineFormatter);

      const result = editor.formatText('Hello');
      expect(result).toBe('<u>Hello</u>');
    });
  });

  describe('Multiple Decorators', () => {
    it('should apply multiple formatting in correct order', () => {
      const plainFormatter = new PlainTextFormatter();
      const boldFormatter = new BoldDecorator(plainFormatter);
      const italicFormatter = new ItalicDecorator(boldFormatter);
      const underlineFormatter = new UnderlineDecorator(italicFormatter);
      const editor = new TextEditor(underlineFormatter);

      const result = editor.formatText('Hello');
      expect(result).toBe('<u>_**Hello**_</u>');
    });

    it('should allow different combinations of decorators', () => {
      const plainFormatter = new PlainTextFormatter();
      const italicFormatter = new ItalicDecorator(plainFormatter);
      const boldFormatter = new BoldDecorator(italicFormatter);
      const editor = new TextEditor(boldFormatter);

      const result = editor.formatText('Hello');
      expect(result).toBe('**_Hello_**');
    });
  });
});
