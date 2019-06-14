import { TestBed } from '@angular/core/testing';

import { ContactMessagesService } from './contact-messages.service';

describe('ContactMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactMessagesService = TestBed.get(ContactMessagesService);
    expect(service).toBeTruthy();
  });
});
