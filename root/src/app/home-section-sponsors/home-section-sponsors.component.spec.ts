import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionSponsorsComponent } from './home-section-sponsors.component';

describe('HomeSectionSponsorsComponent', () => {
  let component: HomeSectionSponsorsComponent;
  let fixture: ComponentFixture<HomeSectionSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionSponsorsComponent]
    });
    fixture = TestBed.createComponent(HomeSectionSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
