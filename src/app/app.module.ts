import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RotasModule } from 'src/rotas.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { EscopoPrincipalComponent } from './escopo-principal/escopo-principal.component';
import { TelasModule } from './telas/telas.module';

@NgModule({
  declarations: [
    AppComponent,
    EscopoPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RotasModule,
    ComponentsModule,
    TelasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
