import { Inject, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@Inject('ITEM_MODEL') private readonly itemModel: Model<Item>) {
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  public async findOne(id: string): Promise<Item> {
    return this.itemModel.findOne({ _id: id});
  }
}
