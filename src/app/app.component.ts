import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clase-04-practica';
  estaCargando = true;

  mensajeNumero = 2000;

  personas: string[] = [
    'Maria',
    'Jose',
    'Pedro',
    'Naruto'
  ]

  ngOnInit() {
    console.log('EL COMPONENTE INICIO')
  }

  getFontSize(arg: number): string {
    switch (arg) {
      case 1:

        return '30px';
      case 2:

        return '50px';

      case 3:

        return '100px';

      default:
        return '16px';
    }
  }
}
