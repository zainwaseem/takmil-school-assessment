import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { Organization } from '../organization/organization.entity';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Organization, { cascade: true, eager: true })
  @JoinColumn()
  organization: Organization;
}
