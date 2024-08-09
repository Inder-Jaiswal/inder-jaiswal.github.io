import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscSocialComponent } from './misc-social.component';

describe('MiscSocialComponent', () => {
  let component: MiscSocialComponent;
  let fixture: ComponentFixture<MiscSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiscSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiscSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
