import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { HeaderComponent } from './header/header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
  declarations: [
    CarrinhoComprasComponent,
    HeaderComponent,
    MenuHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
