import { Component, ElementRef, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private produtoService: ProdutoService) { }
  digitouAlgo(pesquisa: HTMLInputElement){
    this.produtoService.mudouCampodePesquisa(pesquisa.value)
  }
  ngOnInit(): void {
  }

}
