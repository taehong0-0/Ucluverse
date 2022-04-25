import { Test, TestingModule } from '@nestjs/testing';
import { PostingsController } from './postings.controller';

describe('PostingsController', () => {
  let controller: PostingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostingsController],
    }).compile();

    controller = module.get<PostingsController>(PostingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
