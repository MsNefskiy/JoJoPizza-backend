import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback, FeedbackDocument } from './feedback.schema';

@Injectable()
export class FeedbackService {
    constructor(@InjectModel(Feedback.name) private FeedbackModel: Model<FeedbackDocument>) { }

    async create(dto: CreateFeedbackDto): Promise<Feedback> {
        const feedback = await this.FeedbackModel.create(dto);
        return feedback;
    }

    async getAll(): Promise<Feedback[]>  {
        const feedback = await this.FeedbackModel.find();
        return feedback;
    }

    async getOne(id: ObjectId): Promise<Feedback>  {
        const feedback = await this.FeedbackModel.findById(id);
        return feedback;
    }

    async remove(id: ObjectId): Promise<ObjectId> {
        const feedback = await this.FeedbackModel.findByIdAndDelete(id);
        return feedback._id;
    }
}
