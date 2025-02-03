import { Component } from '@angular/core';
import { ProdutosComponent } from './components/produtos/produtos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-produtos/>
  `,
  styleUrls: ['./app.component.css'],
  imports: [ProdutosComponent] // Importar o componente Produtos aqui
})
export class AppComponent {}