import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignProfileComponent } from './graphic-design-profile.component';

describe('GraphicDesignProfileComponent', () => {
  let component: GraphicDesignProfileComponent;
  let fixture: ComponentFixture<GraphicDesignProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicDesignProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
