import { Controller, Get, Post, Body, Put, Param, Delete, Render} from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDataService) { }

  @Get('create') 
  @Render('users/create-biodata.html') 
  createForm() {
  }

  @Post()
  create(@Body() createBioDatumDto: CreateBioDatumDto) {
    return this.bioDataService.create(createBioDatumDto);
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':Id')
  findOne(@Param('Id') Id: number) {
    return this.bioDataService.findOne(+Id);
  }

  @Put(':Id')
  update(@Param('Id') Id: number, @Body() updateBioDatumDto: UpdateBioDatumDto) {
    return this.bioDataService.update(+Id, updateBioDatumDto);
  }

  @Delete(':Id')
  remove(@Param('Id') Id: number) {
    return this.bioDataService.remove(+Id);
  }
}