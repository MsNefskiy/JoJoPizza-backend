import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateToppingDto } from './dto/create-topping.dto';
import { UpdateToppingDto } from './dto/update-topping.dto';
import { Topping, ToppingDocument } from './topping.schema';

@Injectable()
export class ToppingService {
    constructor(@InjectModel(Topping.name) private ToppingModel: Model<ToppingDocument>) { }

    async create(dto: CreateToppingDto): Promise<Topping> {
        const topping = await this.ToppingModel.create(dto);
        return topping;
    }

    async getAll(): Promise<Topping[]> {
        const toppings = await this.ToppingModel.find();
        return toppings;
    }

    async getOne(id: ObjectId): Promise<Topping> {
        const topping = await this.ToppingModel.findById(id);
        return topping;
    }

    async update(id: ObjectId, dto: UpdateToppingDto): Promise<Topping> {
        const topping = await this.ToppingModel.findByIdAndUpdate(id, dto);
        return topping;
    }

    async remove(id: ObjectId): Promise<ObjectId> {
        const topping = await this.ToppingModel.findByIdAndDelete(id);
        return topping._id;
    }
}
