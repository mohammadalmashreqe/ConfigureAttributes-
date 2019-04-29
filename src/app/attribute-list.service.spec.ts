import { TestBed } from '@angular/core/testing';

import { AttributeListService } from './attribute-list.service';

describe('AttributeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttributeListService = TestBed.get(AttributeListService);
    expect(service).toBeTruthy();
  });
});
