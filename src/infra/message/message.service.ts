import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from '@src/infra/database/schema';
// import { CreateLogPayload } from '@src/interfaces/shared/log';
// import AppConfig from '@src/config/configuration';
// import { ConfigType } from '@nestjs/config';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private MessageModel: Model<MessageDocument>, // @Inject(AppConfig.KEY) // private readonly appConfig: ConfigType<typeof AppConfig>,
  ) {}

  async list(filter?: any): Promise<any> {
    return this.MessageModel.find({});
  }

  async create(createMessagePayload: any): Promise<any> {
    return this.MessageModel.create(createMessagePayload);
  }
}
