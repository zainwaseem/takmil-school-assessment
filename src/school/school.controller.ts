import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from './school.entity';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() data: any): Promise<School> {
    return this.schoolService.createSchool(data);
  }

  @Get()
  async findAll(): Promise<School[]> {
    console.log('Getting all schools');

    return this.schoolService.findAllSchools();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<School> {
    return this.schoolService.findSchoolById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any): Promise<School> {
    return this.schoolService.updateSchool(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.schoolService.deleteSchool(id);
  }
}
