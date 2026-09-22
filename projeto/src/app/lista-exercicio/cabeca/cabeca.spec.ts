import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cabeca } from './cabeca';

describe('Cabeca', () => {
  let component: Cabeca;
  let fixture: ComponentFixture<Cabeca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cabeca],
    }).compileComponents();

    fixture = TestBed.createComponent(Cabeca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
