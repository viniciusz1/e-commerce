import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { listaProdutos } from 'src/assets/produtos';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { 
    produtoService.produtosEmitter.subscribe(response => {
      this.produtos = response
    })
  }

  ngOnInit(): void {
    
    
  }
  produtos: Produto[] | undefined

}
