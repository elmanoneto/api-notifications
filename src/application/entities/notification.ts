import { Content } from './content';

export type NotifcationProps = {
  id?: string;
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt?: Date;
};

export class Notification {
  private props: NotifcationProps;

  constructor(props: NotifcationProps) {
    this.props = { ...props, createdAt: new Date() };
  }

  public set id(content: string) {
    this.props.id = content;
  }

  public get id(): string {
    return this.props.id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(cateogry: string) {
    this.props.category = cateogry;
  }

  public get category(): string {
    return this.props.category;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public set canceledAt(canceledAt: Date | null | undefined) {
    this.props.canceledAt = canceledAt;
  }
}
