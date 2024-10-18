import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body() data: any): Promise<Address> {
    return this.addressService.createAddress(data);
  }

  @Get()
  async findAll(): Promise<Address[]> {
    return this.addressService.findAllAddresses();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Address> {
    return this.addressService.findAddressById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any): Promise<Address> {
    return this.addressService.updateAddress(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.addressService.deleteAddress(id);
  }
}
