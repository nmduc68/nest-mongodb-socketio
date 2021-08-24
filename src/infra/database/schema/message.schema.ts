import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({ versionKey: false })
export class Message {
  @Prop()
  username: string;

  @Prop()
  userId: string;

  @Prop()
  message: string;

  @Prop()
  updatedDate: Date;

  @Prop()
  createdDate: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
