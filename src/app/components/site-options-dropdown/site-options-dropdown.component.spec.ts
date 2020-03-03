import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOptionsDropdownComponent } from './site-options-dropdown.component';

describe('SiteOptionsDropdownComponent', () => {
  let component: SiteOptionsDropdownComponent;
  let fixture: ComponentFixture<SiteOptionsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteOptionsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOptionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
