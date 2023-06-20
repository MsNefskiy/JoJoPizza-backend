import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ObjectId } from 'mongoose';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post('/create')
    create(@Body() dto: CreateOrderDto) {
        return this.orderService.create(dto);
    }

    @Get()
    getAll() {
        return this.orderService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.orderService.getOne(id);
    }

    //   @Delete(':id')
    //   remove(@Param('id') id: string) {
    //     return this.orderService.remove(+id);
    //   }
}
