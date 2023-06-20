import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryProductDto } from './dto/query-product.dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,) { }

    async create(dto: CreateProductDto): Promise<Product> {
        const product = await this.productModel.create(dto);
        return product;
    }

    async getAll(query: any): Promise<Product[]> {
        if (query.order === 'asc') {
            query.order = 1;
        } else if (query.order === 'desc') {
            query.order = -1;
        }

        const products = await this.productModel.find(query).sort({ [query.sortBy]: query.order }).exec();
        return products;
    }

    async getOne(id: ObjectId): Promise<Product> {
        const product = await this.productModel.findById(id);
        return product;
    }

    async update(id: ObjectId, dto: UpdateProductDto): Promise<Product> {
        const product = await this.productModel.findByIdAndUpdate(id, dto);
        return product;
    }

    async remove(id: ObjectId) {
        const product = await this.productModel.findByIdAndDelete(id);
        return product._id;
    }

}
