import { Module } from '@nestjs/common';

import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { DatabaseModule } from '../database/database.module';
import { itemsProviders } from '../database/Providers/item.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ ItemsController],
  providers: [
    ItemsService,
    ...itemsProviders],
  exports: [ItemsService,
    ...itemsProviders]
})
export class ItemsModule {}
