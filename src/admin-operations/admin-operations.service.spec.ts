import { Test, TestingModule } from '@nestjs/testing';
import { AdminOperationsService } from './admin-operations.service';

describe('AdminOperationsService', () => {
  let service: AdminOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminOperationsService],
    }).compile();

    service = module.get<AdminOperationsService>(AdminOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
