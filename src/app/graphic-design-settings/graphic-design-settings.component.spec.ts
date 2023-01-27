import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignSettingsComponent } from './graphic-design-settings.component';

describe('GraphicDesignSettingsComponent', () => {
  let component: GraphicDesignSettingsComponent;
  let fixture: ComponentFixture<GraphicDesignSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicDesignSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
