import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from './organization.entity';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  async create(@Body() data: any): Promise<Organization> {
    return this.organizationService.createOrganization(data);
  }

  @Get()
  async findAll(): Promise<Organization[]> {
    return this.organizationService.findAllOrganizations();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Organization> {
    return this.organizationService.findOrganizationById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: any,
  ): Promise<Organization> {
    return this.organizationService.updateOrganization(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.organizationService.deleteOrganization(id);
  }
}
