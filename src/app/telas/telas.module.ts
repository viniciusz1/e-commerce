import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent,
    SobreNosComponent,
    AjudaComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TelasModule { }
