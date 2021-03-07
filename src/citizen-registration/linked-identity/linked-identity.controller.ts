import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';

@Controller('linked-identity')
export class LinkedIdentityController {
  constructor(private readonly linkedIdentityService: LinkedIdentityService) {}

  @Post()
  create(@Body() createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return this.linkedIdentityService.create(createLinkedIdentityDto);
  }

  @Get()
  findAll() {
    return this.linkedIdentityService.findAll();
  }

  @Get(':NIN')
  findOne(@Param('NIN') NIN: Number) {
    return this.linkedIdentityService.findOne(+NIN);
  }

  @Put(':NIN')
  update(@Param('NIN') NIN: number, @Body() updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return this.linkedIdentityService.update(+NIN, updateLinkedIdentityDto);
  }

  @Delete(':NIN')
  remove(@Param('NIN') NIN: Number) {
    return this.linkedIdentityService.remove(+NIN);
  }
}
