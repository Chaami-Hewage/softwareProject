import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdesignhomeComponent } from './graphicdesignhome.component';

describe('GraphicdesignhomeComponent', () => {
  let component: GraphicdesignhomeComponent;
  let fixture: ComponentFixture<GraphicdesignhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdesignhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicdesignhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
