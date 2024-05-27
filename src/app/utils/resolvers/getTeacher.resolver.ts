import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Teacher } from '@interfaces/teacher.interface';
import { TeacherService } from '@services/teachers.service';
import { throwError } from 'rxjs';

export const getTeacherResolver: ResolveFn<Teacher | null> = (route, state) => {
  const id = parseInt(route.paramMap.get('id')!, 10)
  try {
    return inject(TeacherService).getTeachersById(id);
  } catch (e) {
    console.log(e);
    return null
  }
};
