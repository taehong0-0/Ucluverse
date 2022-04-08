import { Test, TestingModule } from '@nestjs/testing';
import { PostersService } from './posters.service';

describe('PostersService', () => {
  let service: PostersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostersService],
    }).compile();

    service = module.get<PostersService>(PostersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
