import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { HeaderComponent } from './header/header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RouterModule } from '@angular/router';
import { CardProdutoComponent } from './card-produto/card-produto.component';



@NgModule({
  declarations: [
    CarrinhoComprasComponent,
    HeaderComponent,
    MenuHeaderComponent,
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],exports: [
    CarrinhoComprasComponent,
    HeaderComponent,
    MenuHeaderComponent,
    CardProdutoComponent
  ]
})
export class ComponentsModule { }
