import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ObjectId } from 'mongoose';
// import { FileInterceptor } from '@nestjs/platform-express/multer';
import { UpdateProductDto } from './dto/update-product-dto';
import { QueryProductDto } from './dto/query-product.dto';

@Controller('/product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('/create')
    // @UseInterceptors(FileInterceptor('image'))
    create(@Body() dto: CreateProductDto) {
        return this.productService.create(dto);
    }

    @Get()
    getAll(@Query() query: QueryProductDto) {
        return this.productService.getAll(query);
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.productService.getOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: ObjectId, @Body() dto: UpdateProductDto) {
        return this.productService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: ObjectId) {
        return this.productService.remove(id);
    }
}
