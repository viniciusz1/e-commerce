import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { Produto } from '../models/produto.model';
import { listaProdutos } from 'src/assets/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public pesquisaAlterada = new Subject<string>();
  public produtosEmitter = new EventEmitter<Produto[]>()

  mudouCampodePesquisa(filtro: string) {
    this.pesquisaAlterada.next(filtro);
  }

  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(param => {
      let produtos = []
      for (let i of listaProdutos) {
        if (i.categoriaProduto == param['categoria']) {
          produtos.push(i)
        }
      }
      if (produtos.length == 0) {
        produtos = listaProdutos
      }
      this.produtosEmitter.emit(produtos)
    })

    this.pesquisaAlterada.pipe(debounceTime(500)).subscribe((e) => {
      this.produtosEmitter.emit(listaProdutos.filter(prod => prod.nomeProduto.toLocaleLowerCase().includes(e)))
    });
  }
}
