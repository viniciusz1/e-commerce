import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RotasModule } from 'src/rotas.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { EscopoPrincipalComponent } from './escopo-principal/escopo-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    EscopoPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RotasModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
