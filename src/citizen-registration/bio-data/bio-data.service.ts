import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import {UpdateBioDatumDto} from'./dto/update-bio-datum.dto';
import { Repository } from 'typeorm';
import {LinkedIdentity} from '../linked-identity/entities/linked-identity.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
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
      const newlinkedidentity = this.linkedidentityRepository.create(createBioDatumDto.LinkedIdentityRepository);
      const LinkedIdentity: LinkedIdentity = await this.linkedidentityRepository.save(newlinkedidentity);
      newbiodata.linkedidentity = LinkedIdentity; 
    }
    return this.biodataRepository.save(newbiodata) }
}


async findAll() {
  return await this.biodataRepository.find({ relations: ['linkedidentity'] });
}
  
async findOne(NIN: number) {
  return await this.biodataRepository.findOne(NIN);
}

async update(NIN: number, updateBioDatumDto: UpdateBiodatumDto) {
  return await this.BioDatumRepository.update(NIN, updateBioDatumDto);
}

async remove(NIN: number) {
  return await this.BioDatumRepository.delete(NIN);
}

async setLinkedIdentityByNIN(biodataNIN: number, linkedidentityNIN: number) {
  try {
    return await this.BioDatumRepository.createQueryBuilder()
      .relation(biodata, "linkedidentity")
      .of(biodataNIN)
      .set(linkedidentityNIN)
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem setting linked identity for bio data: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

async unsetLinkedIdentityByNIN(biodataNIN: number) {
  try {
    return await this.BioDatumRepository.createQueryBuilder()
      .relation(biodata, "linkedidentity")
      .of(biodataNIN)
      .set(null)
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem unsetting user for student: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

