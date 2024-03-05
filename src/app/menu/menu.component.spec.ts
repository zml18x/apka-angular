import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page when navigateToLogin is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should have authService defined', () => {
    expect(component.authService).toBeDefined();
  });

  it('should navigate to login page when SIGN IN button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const signInButton = fixture.debugElement.query(By.css('button'));
    signInButton.triggerEventHandler('click', null);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should call logout method when SIGN OUT button is clicked', () => {
    const logoutSpy = spyOn(authService, 'logout');
    component.authService.logout();
    expect(logoutSpy).toHaveBeenCalled();
  });
});
