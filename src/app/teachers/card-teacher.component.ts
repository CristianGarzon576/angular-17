import { Component, Input, computed, signal } from '@angular/core';
import { Teacher } from '@interfaces/teacher.interface';
import { TagComponent } from '../commun/tag.component';
import { RateComponent } from '@app/commun/rate.component';

@Component({
  selector: 'app-card-teacher',
  standalone: true,
  imports: [TagComponent, RateComponent],
  template: `
    <section class="flex flex-col w-full gap-2 cursor-pointer">
      <p class="font-bold">{{currentTeacher()?.name}}</p>
      <div>
        <img src="{{currentTeacher()?.image}}" alt="{{currentTeacher()?.name}}" />
      </div>
      <app-rate [rate]="currentTeacher()?.rate ?? 0" [reviews]="currentTeacher()?.comments?.length ?? 0"/>
      <p class="font-semibold capitalize">{{profesions()}}</p>
        <div class="flex gap-2 flex-wrap">
            @for (tag of currentTeacher()?.tags; track tag) {
                <app-tag [tag]="tag" />
            }
        </div>
        <p class="normal-case">{{currentTeacher()?.description}}</p>
    </section>
  `
})
export class CardTeacherComponent {

  currentTeacher = signal<Teacher | null>(null)

  profesions = computed(() => this.currentTeacher()?.profession.join(', '))

  @Input({
    required: true
  }) set teacher(value: Teacher) {
    this.currentTeacher.update((val) => val = { ...value })
  }
}
