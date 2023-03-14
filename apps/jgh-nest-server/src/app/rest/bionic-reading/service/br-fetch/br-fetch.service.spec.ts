import { Test, TestingModule } from '@nestjs/testing';
import { BrFetchService } from './br-fetch.service';

describe('BrFetchService', () => {
  let service: BrFetchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrFetchService],
    }).compile();

    service = module.get<BrFetchService>(BrFetchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
