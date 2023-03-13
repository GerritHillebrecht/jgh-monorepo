import { Test, TestingModule } from '@nestjs/testing';
import { FetchDomController } from './fetch-dom.controller';

describe('FetchDomController', () => {
  let controller: FetchDomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchDomController],
    }).compile();

    controller = module.get<FetchDomController>(FetchDomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
