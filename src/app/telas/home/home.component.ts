import { Component, OnInit } from '@angular/core';
import { listaProdutos } from 'src/assets/produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  produtos = listaProdutos

}
