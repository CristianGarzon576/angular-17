import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherComponent } from '../teacher.component';
import { ActivatedRoute } from '@angular/router';

describe('TeacherComponent', () => {
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                teacher: {
                  name: 'John Doe',
                  profession: ['Math', 'Physics'],
                  description: 'Lorem ipsum dolor sit amet',
                },
              },
            },
          },
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
