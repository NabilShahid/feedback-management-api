import { Test, TestingModule } from '@nestjs/testing';
import { CommonMethodsService } from './common-methods.service';

describe('CommonMethodsService', () => {
  let service: CommonMethodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonMethodsService],
    }).compile();

    service = module.get<CommonMethodsService>(CommonMethodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
