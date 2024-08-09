import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfCertificComponent } from './prof-certific.component';

describe('ProfCertificComponent', () => {
  let component: ProfCertificComponent;
  let fixture: ComponentFixture<ProfCertificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfCertificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfCertificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
