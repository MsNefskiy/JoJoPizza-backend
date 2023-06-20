import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async create(dto: CreateOrderDto): Promise<Order> {
        const order = await this.orderModel.create(dto);
        return order;
    }

    async getAll(): Promise<Order[]> {
        const orders = await this.orderModel.find();
        return orders;
    }

    async getOne(id: ObjectId): Promise<Order> {
        const order = await this.orderModel.findById(id).populate([{ path: 'products', strictPopulate: false }]);
        return order;
    }

    // remove(id: number) {
    //     return `This action removes a #${id} order`;
    // }
}
