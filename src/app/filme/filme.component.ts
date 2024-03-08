import { Component, Input, booleanAttribute } from "@angular/core";

@Component({
  selector: 'filme',
  standalone: true,
  template: `
    <!-- @for(numero of [1, 2, 3, 4]; track $index) {
      <p>Filme {{numero}} de {{categoria}}</p>
    } -->
    <p [class.disabled]="disabled">filme de {{categoria}}</p>
  `,
  styleUrl: 'filme.component.scss'
})
export class FilmeComponent {
  @Input({required: true}) categoria = '';

  @Input({transform: booleanAttribute}) disabled = false;
}