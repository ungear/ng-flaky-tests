import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserService } from '../user.service';
import { mockReguarUser } from '../mocks';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers:[
        { provide: UserService, useValue: { currentUser: mockReguarUser}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name ', () => {
    fixture.detectChanges();
    const name = fixture.debugElement.query(By.css('.name'));
    expect(name.nativeElement.innerText).toBe(mockReguarUser.name);
  });

  it('should not render Backoffice link for regular users ', () => {
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('.backoffice-link'));
    expect(link).toBeFalsy();
  });

  it('should render Backoffice link for admins users ', () => {
    mockReguarUser.isAdmin = true;
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('.backoffice-link'));
    expect(link).toBeTruthy();
  });
});
