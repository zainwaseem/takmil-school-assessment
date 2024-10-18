import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async createAddress(data: any): Promise<Address> {
    const address = this.addressRepository.create(data);
    return this.addressRepository.save(address);
  }

  async findAllAddresses(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findAddressById(id: number): Promise<Address> {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
    return address;
  }

  async updateAddress(id: number, data: any): Promise<Address> {
    const address = await this.findAddressById(id);
    Object.assign(address, data);
    return this.addressRepository.save(address);
  }

  async deleteAddress(id: number): Promise<void> {
    const result = await this.addressRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
  }
}
