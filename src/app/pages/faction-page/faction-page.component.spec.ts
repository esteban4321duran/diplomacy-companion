import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionPageComponent } from './faction-page.component';

describe('FactionPageComponent', () => {
  let component: FactionPageComponent;
  let fixture: ComponentFixture<FactionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
