import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { ObjectId } from 'mongoose';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) { }

    @Post('/create')
    create(@Body() dto: CreateFeedbackDto) {
        return this.feedbackService.create(dto);
    }

    @Get()
    getAll() {
        return this.feedbackService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: ObjectId) {
        return this.feedbackService.getOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: ObjectId) {
        return this.feedbackService.remove(id);
    }
}
