import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesPageComponent } from './memories-page.component';

describe('MemoriesPageComponent', () => {
  let component: MemoriesPageComponent;
  let fixture: ComponentFixture<MemoriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoriesPageComponent]
    });
    fixture = TestBed.createComponent(MemoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
