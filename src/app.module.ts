import { ConfigModule, ConfigType } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppGatewayModule } from '@src/interfaces/app/app.module';
import { AppService } from './app.service';
import DBConfig from '@src/config/database.config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RMessageModule } from '@src/interfaces/http/rest/api_v1/message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [DBConfig],
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      useFactory: async (dbConfig: ConfigType<typeof DBConfig>) => ({
        useUnifiedTopology: true,
        uri: `${dbConfig.type}://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.db_name}`,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        ssl: dbConfig.ssl,
        authSource: dbConfig.auth_source,
      }),
      inject: [DBConfig.KEY],
    }),

    AppGatewayModule,
    RMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
