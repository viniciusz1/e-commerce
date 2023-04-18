import { RotasModule } from 'src/rotas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { HeaderComponent } from './header/header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RouterModule } from '@angular/router';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { FormsModule } from '@angular/forms';



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
    FormsModule
  ],exports: [
    CarrinhoComprasComponent,
    HeaderComponent,
    MenuHeaderComponent,
    CardProdutoComponent
  ]
})
export class ComponentsModule { }
