import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerItemComponent } from './cricketer-item.component';

describe('CricketerItemComponent', () => {
  let component: CricketerItemComponent;
  let fixture: ComponentFixture<CricketerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
