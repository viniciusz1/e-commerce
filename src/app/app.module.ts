import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscopoPrincipalComponent } from './escopo-principal/escopo-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    EscopoPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
