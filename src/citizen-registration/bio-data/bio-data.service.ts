import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import {UpdateBioDatumDto} from'./dto/update-bio-datum.dto';
import { Repository } from 'typeorm';
import {LinkedIdentity} from '../linked-identity/entities/linked-identity.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {
  unsetLinkedIdentityByNIN(biodataNIN: number) {
    throw new Error("Method not implemented.");
  }
  remove(arg0: number) {
    throw new Error("Method not implemented.");
  }
  setLinkedIdentityById(studentId: number, userId: number) {
    throw new Error("Method not implemented.");
  }
  update(arg0: number, updateBioDatumDto: UpdateBioDatumDto) {
    throw new Error("Method not implemented.");
  }
  findOne(arg0: number) {
    throw new Error("Method not implemented.");
  }
  findAll() {
    throw new Error("Method not implemented.");
  }
  
  constructor(
    @InjectRepository(BioDatum)
    private biodataRepository: Repository<BioDatum>,

    @InjectRepository(LinkedIdentity)
    private linkedidentityRepository: Repository<LinkedIdentity>
)
{}
  async create(createBioDatumDto: CreateBioDatumDto) {
    const newbiodata = this.biodataRepository.create(createBioDatumDto);

    if(createBioDatumDto.linkedidentity){
      const newlinkedidentity = this.linkedidentityRepository.create(createBioDatumDto.linkedidentity);
      const LinkedIdentity: LinkedIdentity = await this.linkedidentityRepository.save(newlinkedidentity);
      newbiodata.linkedidentity = LinkedIdentity; 
    }
    return this.biodataRepository.save(newbiodata) }
}

