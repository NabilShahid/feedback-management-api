import { Test, TestingModule } from '@nestjs/testing';
import { AdminOperationsController } from './admin-operations.controller';

describe('AdminOperations Controller', () => {
  let controller: AdminOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminOperationsController],
    }).compile();

    controller = module.get<AdminOperationsController>(AdminOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
