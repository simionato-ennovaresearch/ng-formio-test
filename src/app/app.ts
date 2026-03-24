import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioModule, FormioForm } from '@formio/angular';

@Component({
  selector: 'app-root',
  imports: [FormioModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly form: FormioForm = {
    components: [],
  };
}
