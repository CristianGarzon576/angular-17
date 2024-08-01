import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getTeacherResolver } from './getTeacher.resolver';
import { Teacher } from '@interfaces/teacher.interface';

describe('getTeacherResolver', () => {
  const executeResolver: ResolveFn<Teacher | null> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => getTeacherResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
