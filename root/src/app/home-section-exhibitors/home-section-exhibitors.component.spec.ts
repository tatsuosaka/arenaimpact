import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionExhibitorsComponent } from './home-section-exhibitors.component';

describe('HomeSectionExhibitorsComponent', () => {
  let component: HomeSectionExhibitorsComponent;
  let fixture: ComponentFixture<HomeSectionExhibitorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionExhibitorsComponent]
    });
    fixture = TestBed.createComponent(HomeSectionExhibitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
