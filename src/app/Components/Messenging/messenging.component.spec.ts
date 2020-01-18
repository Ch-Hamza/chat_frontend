import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengingComponent } from './messenging.component';

describe('MessengingComponent', () => {
  let component: MessengingComponent;
  let fixture: ComponentFixture<MessengingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
