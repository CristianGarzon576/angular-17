import { Component, Input } from '@angular/core';
import { Teacher } from '@interfaces/teacher.interface';

@Component({
  selector: 'app-card-teacher',
  standalone: true,
  imports: [],
  templateUrl: './card-teacher.component.html',
  styleUrl: './card-teacher.component.css'
})
export class CardTeacherComponent {
  @Input({
    required: true
  }) teacher!: Teacher;
}
