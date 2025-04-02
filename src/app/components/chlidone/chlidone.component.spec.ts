import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlidoneComponent } from './chlidone.component';

describe('ChlidoneComponent', () => {
  let component: ChlidoneComponent;
  let fixture: ComponentFixture<ChlidoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChlidoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChlidoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
