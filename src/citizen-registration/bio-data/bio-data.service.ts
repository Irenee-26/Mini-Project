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

async findOne(NIN: number) {
  //return `This action returns a #${id} student`;
  return await this.studentRepository.findOne(id);
}

async update(NIN: number, UpdateBioDatumDto:UpdateBioDatumDto) {
  //return `This action updates a #${id} student`;
  return await this.biodataRepository.update(NIN, updateBioDatumDto);
}

async remove(id: number) {
  //return `This action removes a #${id} student`;
  return await this.studentRepository.delete(id);
}

/* Work on relationships */
async setUserById(studentId: number, userId: number) {
  try {
    return await this.studentRepository.createQueryBuilder()
      .relation(Student, "user")
      .of(studentId)
      .set(userId)
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem setting user for student: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

async unsetUserById(studentId: number) {
  try {
    return await this.studentRepository.createQueryBuilder()
      .relation(Student, "user")
      .of(studentId)
      .set(null)
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem unsetting user for student: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
