import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './school/school.entity';
import { Address } from './address/address.entity';
import { Organization } from './organization/organization.entity';
import { SchoolController } from './school/school.controller';
import { SchoolService } from './school/school.service';
import { OrganizationService } from './organization/organization.service';
import { OrganizationController } from './organization/organization.controller';
import { AddressService } from './address/address.service';
import { AddressController } from './address/address.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'takmil',
      entities: [School, Address, Organization],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([School, Address, Organization]),
  ],
  controllers: [SchoolController, AddressController, OrganizationController],
  providers: [SchoolService, AddressService, OrganizationService],
})
export class AppModule {}
