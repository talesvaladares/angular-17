import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { FilmeComponent } from './filme/filme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    FilmeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17';

  ehVerdadeiro = false;

  status = 'cancelado';

  filmes = [
    'ação', 'terror', 'suspense'
  ]

  filmes$ = of(this.filmes);
}
