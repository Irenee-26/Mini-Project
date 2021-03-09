import { Injectable } from '@nestjs/common';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { Repository } from 'typeorm';
import { LinkedIdentity } from '../linked-identity/entities/linked-identity.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {
  constructor(
    @InjectRepository(BioDatum)
    private biodatumRepository: Repository<BioDatum>
  ) { }
  async create(createBiodatumDto: CreateBioDatumDto) {
    const newBiodatum: BioDatum = this.biodatumRepository.create(createBiodatumDto)
    //return 'This action adds a new biodatum';
    return await this.biodatumRepository.save(newBiodatum);
  }

  async findAll() {
    //return `This action returns all biodata`;
    return await this.biodatumRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} biodatum`;
    return await this.biodatumRepository.findOne(id);
  }

  async update(id: number, updateBiodatumDto: UpdateBioDatumDto) {
    //return `This action updates a #${id} biodatum`;
    return await this.biodatumRepository.update(id, updateBiodatumDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} biodatum`;
    return await this.biodatumRepository.delete(id);
  }

}



