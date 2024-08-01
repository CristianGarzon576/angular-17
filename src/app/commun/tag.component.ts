import { Component, Input, signal } from '@angular/core';

@Component({
    selector: 'app-tag',
    standalone: true,
    imports: [],
    template: `
        <div class="capitalize rounded-xl bg-blue-200 px-2 w-fit">
            <p class="text-white">{{currentTag}}</p>
        </div>
    `
})
export class TagComponent {

    currentTag: string = ""

    @Input({
        required: true
    }) set tag(value: string) {
        this.currentTag = value
    }
}
