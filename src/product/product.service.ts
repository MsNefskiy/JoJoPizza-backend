import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(dto: CreateProductDto): Promise<Product> {
        const product = await this.productModel.create(dto);
        return product;
    }

    async getAll(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getOne(id: ObjectId): Promise<Product> {
        const product = await this.productModel.findById(id);
        return product;
    }

}
