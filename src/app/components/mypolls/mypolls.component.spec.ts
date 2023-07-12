import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypollsComponent } from './mypolls.component';

describe('MypollsComponent', () => {
  let component: MypollsComponent;
  let fixture: ComponentFixture<MypollsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MypollsComponent]
    });
    fixture = TestBed.createComponent(MypollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
