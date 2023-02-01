export class Content {
  private content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateConentLength(content);

    if (!isContentLengthValid) throw new Error('Invalid content length.');

    this.content = content;
  }

  private validateConentLength(content: string): boolean {
    return content.length > 5 && content.length < 240;
  }

  set value(content: string) {
    this.content = content;
  }

  get value(): string {
    return this.content;
  }
}
