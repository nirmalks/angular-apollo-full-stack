import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerListComponent } from './cricketer-list.component';

describe('CricketerListComponent', () => {
  let component: CricketerListComponent;
  let fixture: ComponentFixture<CricketerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
