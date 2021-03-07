import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity} from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private linkedidentityRepository: Repository<LinkedIdentity>
    ){}
  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
      const newLinkedIdentity: LinkedIdentity = this.linkedidentityRepository.create(createLinkedIdentityDto) 
      return this.linkedidentityRepository.save(newLinkedIdentity);
      //return 'This action adds a new user';
      }

  async findAll() {
      //return `This action returns all users`; 
      return await this.linkedidentityRepository.find();
      }
  async findOne(NIN: number) {
        //return `This action returns a #${id} user`; 
        return await this.linkedidentityRepository.findOne(NIN);
        }
  async update(NIN: number, updatelinkedidentityDto: UpdateLinkedIdentityDto) {
        //return `This action updates a #${id} user`;
        return await this.linkedidentityRepository.update(NIN, updatelinkedidentityDto);
        }
  async remove(NIN: number) {
        //return `This action removes a #${id} user`; 
        return await this.linkedidentityRepository.delete(NIN);
        } }


