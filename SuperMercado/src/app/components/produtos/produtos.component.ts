import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-produtos',
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  imports: [FormsModule, CommonModule, InputTextModule, InputNumberModule] // Adicionar CommonModule aqui
})
export class ProdutosComponent {
  produtos: { id: number; nome: string; preco: number; disponivel: boolean }[] = [];
  produto: { id: number; nome: string; preco: number; disponivel: boolean } = { id: 0, nome: '', preco:0, disponivel: false };
  nextId: number = 1;

  listarProdutos(): void {
    // A lista de produtos já está na propriedade 'produtos'
  }

  inserirProduto(): void {
    this.produto.id = this.nextId++;
    this.produtos.push({ ...this.produto });
    this.produto = { id: 0, nome: '', preco: 0, disponivel: false };
    Response
  }

  atualizarProduto(): void {
    const index = this.produtos.findIndex(p => p.id === this.produto.id);
    if (index !== -1) {
      this.produtos[index] = { ...this.produto };
      this.produto = { id: 0, nome: '', preco: 0, disponivel: false };
    }
  }

  removerProduto(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }

  detalharProduto(id: number): void {
    const produto = this.produtos.find(p => p.id === id);
    if (produto) {
      this.produto = { ...produto };
    }
  }
}