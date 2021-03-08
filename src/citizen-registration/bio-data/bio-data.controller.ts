import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { LinkedIdentity } from '../linked-identity/entities/linked-identity.entity';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDataService) { }

  @Post()
  create(@Body() createBioDatumDto: CreateBioDatumDto) {
    return this.bioDataService.create(createBioDatumDto);
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':NIN')
  findOne(@Param('NIN') NIN: string) {
    return this.bioDataService.findOne(+NIN);
  }

  @Put(':NIN')
  update(@Param('NIN') NIN: string, @Body() updateBioDatumDto: UpdateBioDatumDto) {
    return this.bioDataService.update(+NIN, updateBioDatumDto);
  }

  @Delete(':NIN')
  remove(@Param('NIN') NIN: string) {
    return this.bioDataService.remove(+NIN);
  }
  @Patch(':biodataNIN/linkedidentity/linkedidentityNIN')
  setLinkedIdentityByNIN(@Param('biodataNIN') biodataNIN: number, @Param('linkedidentityNIN') linkedidentityNIN: number) {
    return this.bioDataService.setLinkedIdentityById(biodataNIN, linkedidentityNIN);
  }
  @Delete('::biodataNIN/linkedidentity')
  unsetLinkedIdentityByNIN(@Param('biodataNIN') biodataNIN: number) {
    return this.bioDataService.unsetLinkedIdentityByNIN(biodataNIN);
  }
}
