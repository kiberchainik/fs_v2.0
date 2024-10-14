import { Injectable } from '@nestjs/common';
import { CreateCandidatDto } from './dto/create-candidat.dto';
import { UpdateCandidatDto } from './dto/update-candidat.dto';

@Injectable()
export class CandidatService {
  create(createCandidatDto: CreateCandidatDto) {
    return 'This action adds a new candidat';
  }

  findAll() {
    return `This action returns all candidat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidat`;
  }

  update(id: number, updateCandidatDto: UpdateCandidatDto) {
    return `This action updates a #${id} candidat`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidat`;
  }
}
