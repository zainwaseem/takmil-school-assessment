import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './school.entity';
import { Address } from '../address/address.entity';
import { Organization } from '../organization/organization.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async createSchool(data: any): Promise<School> {
    const address = this.addressRepository.create(data.address);
    const savedAddress = await this.addressRepository.save(address);

    const organization = this.organizationRepository.create(data.organization);
    const savedOrganization =
      await this.organizationRepository.save(organization);

    const school = this.schoolRepository.create({
      ...data,
      address: savedAddress,
      organization: savedOrganization,
    });
    this.schoolRepository.save(school);
    return;
  }

  async findAllSchools(): Promise<School[]> {
    return this.schoolRepository.find();
  }

  async findSchoolById(id: number): Promise<School> {
    const school = await this.schoolRepository.findOne({ where: { id } });
    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }
    return school;
  }

  async updateSchool(id: number, data: any): Promise<School> {
    const school = await this.findSchoolById(id);
    Object.assign(school, data);
    return this.schoolRepository.save(school);
  }

  async deleteSchool(id: number): Promise<void> {
    const result = await this.schoolRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }
  }
}
