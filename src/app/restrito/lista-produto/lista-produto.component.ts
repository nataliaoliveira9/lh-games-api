import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css'],
})
export class ListaProdutoComponent {
  public produtos: Produto[] = [];
  public produto: Produto = new Produto(0, '', '', '', 0);
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private _loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
  }

  listarProdutos(): void {
    this.produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        return new Produto(
          item.id,
          item.produto,
          item.descricao,
          item.foto,
          item.preco
        );
      });
    });
  }
  excluir(id: number) {
    this.produtoService.removerProduto(id).subscribe({
      next: (vaga) => {
        this.listarProdutos();
      },
      error: (err) => {
        console.log('erro ao Excluir');
      },
    });
    // window.location.href = "/restrito/lista";
    this.router.navigate(['/restrito/lista']);
  }
}
