import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ObjectId } from 'mongoose';

@Controller('/products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    create(@Body() dto: CreateProductDto) {
        return this.productService.create(dto);
    }

    @Get()
    getAll() {
        return this.productService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.productService.getOne(id);        
    }



    //   @Post()
    //   create(@Body() createProductDto: CreateProductDto) {
    //     return this.productService.create(createProductDto);
    //   }

    //   @Get()
    //   findAll() {
    //     return this.productService.findAll();
    //   }

    //   @Get(':id')
    //   findOne(@Param('id') id: string) {
    //     return this.productService.findOne(+id);
    //   }

    //   @Patch(':id')
    //   update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    //     return this.productService.update(+id, updateProductDto);
    //   }

    //   @Delete(':id')
    //   remove(@Param('id') id: string) {
    //     return this.productService.remove(+id);
    //   }
}
