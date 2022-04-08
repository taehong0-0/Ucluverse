import { Test, TestingModule } from '@nestjs/testing';
import { PostersController } from './posters.controller';

describe('PostersController', () => {
  let controller: PostersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostersController],
    }).compile();

    controller = module.get<PostersController>(PostersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
