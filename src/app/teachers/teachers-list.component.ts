import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CardTeacherComponent } from '@app/teachers/card-teacher.component';
import { Teacher } from '@interfaces/teacher.interface';
import { TeacherService } from '@services/teachers.service';

@Component({
  selector: 'app-teachers-list',
  standalone: true,
  imports: [CardTeacherComponent, FormsModule, RouterLink],
  template: `
  <section class="flex gap-2 flex-wrap justify-center">
    <div class="w-full flex flex-row justify-end gap-2">
      <input type="text" [(ngModel)]="teacherFilter"/>
      @if(isFilterList()) {
        <button (click)="getTeachers()">Limpiar</button>
      } @else {
        <button (click)="handleFilterTeacher()">Filtrar</button>
        }
    </div>
    @for (teacherEntry of teachers; track teacherEntry.id) {
        <app-card-teacher [routerLink]="[teacherEntry.id]" class="rounded-xl border-2 border-gray p-2 max-w-80 w-auto" [teacher]="teacherEntry" />
    } @empty {
        <div>
            Not Teacher yet
        </div>
    }
  </section>
  `
})
export class TeachersListComponent implements OnInit {

  teacherService = inject(TeacherService);
  teachers: Teacher[] = [];
  teacherFilter = '';
  isFilterList = signal<boolean>(false)

  async ngOnInit(): Promise<void> {
    await this.getTeachers();
  }

  async handleFilterTeacher(): Promise<void> {
    if (this.teacherFilter != '') {
      this.teachers = await this.teacherService.getFilterTeachers(this.teacherFilter.toLocaleLowerCase());
      this.isFilterList.update((val) => val = true)
    }
  }

  async getTeachers(): Promise<void> {
    this.teachers = await this.teacherService.getTeachers();
    this.teacherFilter = '';
    this.isFilterList.update((val) => val = false)
  }
}
