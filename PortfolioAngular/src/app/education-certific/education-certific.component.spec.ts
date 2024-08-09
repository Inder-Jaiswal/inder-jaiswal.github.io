import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCertificComponent } from './education-certific.component';

describe('EducationCertificComponent', () => {
  let component: EducationCertificComponent;
  let fixture: ComponentFixture<EducationCertificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationCertificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationCertificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
