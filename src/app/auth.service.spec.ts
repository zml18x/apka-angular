import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true after successful login', () => {
    const result = service.login('test', 'test');
    expect(result).toBeTruthy();
    expect(service.isLoggedIn()).toBeTruthy();
  });

  it('should return false after logout', () => {
    service.login('test', 'test');
    service.logout();
    expect(service.isLoggedIn()).toBeFalsy();
  });

  it('should return false for incorrect credentials', () => {
    const result = service.login('wrong', 'wrong');
    expect(result).toBeFalsy();
    expect(service.isLoggedIn()).toBeFalsy();
  });
});
