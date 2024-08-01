import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '@interfaces/teacher.interface';
import { TagComponent } from '../commun/tag.component';
import { RateComponent } from '@app/commun/rate.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [JsonPipe, TagComponent, RateComponent],
  template: `
    @if(teacher) {
      <section>
        <h2>{{teacher.name}}</h2>
        <div>Imagen</div>
        <div>{{teacher.profession.join(', ')}}</div>
        <p>{{teacher.description}}</p>
      </section>
    }
  `
})
export class TeacherComponent implements OnInit {

  teacher!: Teacher;
  private readonly _router = inject(Router)
  private readonly _activatedRoute = inject(ActivatedRoute);

  async ngOnInit(): Promise<void> {
    this.teacher = this._activatedRoute.snapshot.data['teacher']
    if (this.teacher == null) {
      this._router.navigate(['teachers']);
    }
  }
}
