/**
 * Decorator Pattern Implementation
 *
 * This example demonstrates how to dynamically add formatting capabilities
 * to text using decorators.
 */

interface TextFormatter {
  format(text: string): string;
}

export class PlainTextFormatter implements TextFormatter {
  public format(text: string): string {
    return text;
  }
}

abstract class TextFormatterDecorator implements TextFormatter {
  protected formatter: TextFormatter;

  constructor(formatter: TextFormatter) {
    this.formatter = formatter;
  }

  public abstract format(text: string): string;
}

export class BoldDecorator extends TextFormatterDecorator {
  public format(text: string): string {
    return `**${this.formatter.format(text)}**`;
  }
}

export class ItalicDecorator extends TextFormatterDecorator {
  public format(text: string): string {
    return `_${this.formatter.format(text)}_`;
  }
}

export class UnderlineDecorator extends TextFormatterDecorator {
  public format(text: string): string {
    return `<u>${this.formatter.format(text)}</u>`;
  }
}

export class TextEditor {
  private formatter: TextFormatter;

  constructor(formatter: TextFormatter) {
    this.formatter = formatter;
  }

  public formatText(text: string): string {
    return this.formatter.format(text);
  }
}
