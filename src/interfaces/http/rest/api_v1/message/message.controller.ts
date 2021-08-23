import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { MessageService } from '@src/infra/message/message.service';
// import { Query7DigitalPayload } from '@src/interfaces/shared/proxy.dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getStream7Digital(@Query() query: any) {
    return this.messageService.list(query);
  }

  @Post()
  createMessage(@Body() payload: any) {
    return this.messageService.create(payload);
  }
}
