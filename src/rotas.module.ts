import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EscopoPrincipalComponent } from "./app/escopo-principal/escopo-principal.component";
import { AjudaComponent } from "./app/telas/ajuda/ajuda.component";
import { CadastroComponent } from "./app/telas/cadastro/cadastro.component";
import { HomeComponent } from "./app/telas/home/home.component";
import { LoginComponent } from "./app/telas/login/login.component";
import { ProdutoComponent } from "./app/telas/produto/produto.component";
import { SobreNosComponent } from "./app/telas/sobre-nos/sobre-nos.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: EscopoPrincipalComponent,
        children: [
          {
            path:'ajuda',
            component: AjudaComponent
          },
          {
            path:'cadastro',
            component: CadastroComponent
          },
          {
            path:'home',
            component: HomeComponent
          },
          {
            path:'produto/:codigoProduto',
            component: ProdutoComponent
          },
          {
            path:'sobre-nos',
            component: SobreNosComponent
          },
        ]
      },
      {
        path:'login',
        component: LoginComponent
      }
  ]),],
  exports: [
    RouterModule
  ],


})
export class RotasModule { }
