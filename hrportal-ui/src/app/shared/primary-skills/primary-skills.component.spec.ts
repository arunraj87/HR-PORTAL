import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySkillsComponent } from './primary-skills.component';

describe('PrimarySkillsComponent', () => {
  let component: PrimarySkillsComponent;
  let fixture: ComponentFixture<PrimarySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
