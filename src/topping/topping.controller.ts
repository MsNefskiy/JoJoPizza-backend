import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { CreateToppingDto } from './dto/create-topping.dto';
import { UpdateToppingDto } from './dto/update-topping.dto';
import { ObjectId } from 'mongoose';

@Controller('topping')
export class ToppingController {
    constructor(private readonly toppingService: ToppingService) { }

    @Post('/create')
    create(@Body() dto: CreateToppingDto) {
        return this.toppingService.create(dto);
    }

    @Get()
    getAll() {
        return this.toppingService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.toppingService.getOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: ObjectId, @Body() dto: UpdateToppingDto) {
        return this.toppingService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: ObjectId) {
        return this.toppingService.remove(id);
    }
}
