import { listaProdutos } from 'src/assets/produtos';
import { Produto } from './../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.sass']
})
export class ProdutoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('codigoProduto'));
    this.produto = listaProdutos.find(produto2 => produto2?.codigoProduto === productIdFromRoute);
  }
  codigoProduto = ""
  produto: Produto | undefined

  ngOnInit(): void {

  }

}
