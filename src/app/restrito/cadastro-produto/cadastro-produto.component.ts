import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
})
export class CadastroProdutoComponent implements OnInit {
  public produto: Produto = new Produto(0, '', '', '', 0);
  constructor(private produtoService: ProdutoService, private router: Router) {}
  ngOnInit(): void {}
  cadastrar() {
    this.produtoService.cadastrarProduto(this.produto).subscribe({
      next: (produto) => {
        this.produto = new Produto(0, '', '', '', 0);
        alert('Cadastro Efetuado com Sucesso');
      },
      error: (err) => {
        alert('erro ao cadastrar');
      },
    });
    this.router.navigate(['/restrito/lista']);
  }
}
