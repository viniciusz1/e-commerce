import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { listaProdutos } from 'src/assets/produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.produtos = []
      for(let i of listaProdutos){
        if(i.categoriaProduto == param['categoria']){
          this.produtos.push(i)
        }
      }
      if(this.produtos.length == 0){
        this.produtos = listaProdutos
      }
    })
    
  }
  produtos = listaProdutos

}
