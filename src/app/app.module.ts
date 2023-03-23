import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BloqueRedondeadoModule } from './directives/bloque-redondeado/bloque-redondeado.module';
import { DraggableDirective } from './directives/draggable/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
  ],
  imports: [
    BrowserModule,
    BloqueRedondeadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
