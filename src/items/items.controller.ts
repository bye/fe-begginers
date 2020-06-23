import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDTO } from './DTO/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

  constructor(
    private readonly itemsService: ItemsService
  ) { }
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDTO: CreateItemDTO): string {
    return `Name ${createItemDTO.name} Description ${createItemDTO.description} Qty ${createItemDTO.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDTO: CreateItemDTO, @Param('id') id: string): string {
    return `Update ${id} - Name ${updateItemDTO.name}`;
  }
}
