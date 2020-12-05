import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageanimationsComponent } from './imageanimations.component';

describe('ImageanimationsComponent', () => {
  let component: ImageanimationsComponent;
  let fixture: ComponentFixture<ImageanimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageanimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageanimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
