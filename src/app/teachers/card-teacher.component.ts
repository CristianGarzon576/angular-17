import { Component, Input, computed, signal } from '@angular/core';
import { Teacher } from '@interfaces/teacher.interface';

@Component({
  selector: 'app-card-teacher',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col w-full gap-2 cursor-pointer">
      <p class="text-bold">{{currentTeacher()?.name}}</p>
      <div></div>
      <p class="text-semibold capitalize">{{profesions()}}</p>
        <div class="flex gap-2 flex-wrap">
            @for (tag of currentTeacher()?.tags; track tag) {
                <span class="capitalize rounded-xl bg-red text-red">{{tag}}</span>
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
