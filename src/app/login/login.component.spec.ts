import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginModel with empty login and password', () => {
    expect(component.loginModel.login).toEqual('');
    expect(component.loginModel.password).toEqual('');
  });

  it('should have a form with required fields', () => {
    const loginField = fixture.debugElement.nativeElement.querySelector('input[name="login"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    expect(loginField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(loginField.getAttribute('required')).toBe('');
    expect(passwordField.getAttribute('required')).toBe('');
  });

  it('should call login() method when form is submitted', () => {
    spyOn(component, 'login');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });

  it('should login successfully with correct credentials', () => {
    component.loginModel.login = 'test';
    component.loginModel.password = 'test';
    spyOn(console, 'log');
    component.login();
    expect(console.log).toHaveBeenCalledWith('Login successful');
  });

  it('should reject login with incorrect credentials', () => {
    component.loginModel.login = 'invalid';
    component.loginModel.password = 'invalid';
    spyOn(console, 'log');
    component.login();
    expect(console.log).toHaveBeenCalledWith('Invalid Credentials');
  });
});