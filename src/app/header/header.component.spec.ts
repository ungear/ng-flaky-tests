import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserService } from '../user.service';
import { mockReguarUser } from '../mocks';
import { By } from '@angular/platform-browser';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const userServiceStub = { currentUser: mockReguarUser };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers:[
        { provide: UserService, useValue: userServiceStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should not render Backoffice link for regular users ', () => {
    fixture.detectChanges(); // to trigger ngOnInit
    const link = fixture.debugElement.query(By.css('.backoffice-link'));
    expect(link).toBeFalsy();
  });

  it('should render Backoffice link for admins users ', () => {
    userServiceStub.currentUser.isAdmin = true;
    fixture.detectChanges(); // to trigger ngOnInit
    const link = fixture.debugElement.query(By.css('.backoffice-link'));
    expect(link).toBeTruthy();
  });
});
