import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css'],
})
export class AtualizaProdutoComponent implements OnInit {
  public produtoId: number = 0;
  public produto: Produto = new Produto(0, '', '', '', 0);
  constructor(
    private produtoService: ProdutoService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this._activatedRoute.params.subscribe(
      (params) => (this.produtoId = params['id'])
    );
  }
  ngOnInit(): void {
    this.listarProduto();
  }
  listarProduto(): void {
    this.produtoService.getProduto(this.produtoId).subscribe((res: any) => {
      console.log(res[0].produto);
      this.produto = new Produto(
        res[0].id,
        res[0].produto,
        res[0].descricao,
        res[0].foto,
        res[0].preco
      );
    });
  }
  atualizar(id: number) {
    this.produtoService.atualizarProduto(id, this.produto).subscribe({
      next: (produto) => {
        this.produto = new Produto(0, '', '', '', 0);
      },
      error: (err) => {
        console.log('erro ao atualizar');
      },
    });
    this.router.navigate(['/restrito/lista']);
  }
}
