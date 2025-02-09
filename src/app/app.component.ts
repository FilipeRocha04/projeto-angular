import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { MatButtonModule } from '@angular/material/button';
import { CrudService } from './services/crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    MatButtonModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


  contatos: any[] = [];
  contatoSelecionado: any = null; 
  novoContato: any = { nome: '', telefone: '' }; 

  constructor(private crudService: CrudService) {}

  ngOnInit() {
  
    this.crudService.getTabela().subscribe((response: any) => {
      this.contatos = response.results;
      console.log(this.contatos);
    });
  }


  filtrarContatosPorLetra(letra: string): any[] {
    return this.contatos.filter((contato) =>
      contato.nome ? contato.nome.toUpperCase().startsWith(letra) : false
    );
  }
  

  editar(contato: any) {
    this.contatoSelecionado = { ...contato }; 
  }

  salvarEdicao() {
    if (this.contatoSelecionado) {
      this.crudService.editarTabela(this.contatoSelecionado.id, this.contatoSelecionado).subscribe(
        (response: any) => {
          
          this.ngOnInit();
          this.contatoSelecionado = null;
        },
        (error) => {
          console.error('Erro ao editar contato:', error);
        }
      );
    }
  }

  cancelarEdicao() {
    this.contatoSelecionado = null; 
  }

  deletar(id: any) {
    this.crudService.deletarTabela(id).subscribe((response: any) => {
      window.location.reload();
    });
  }

  criar() {
    console.log(this.novoContato)
    
      this.crudService.criarTabela(this.novoContato).subscribe(
        (response: any) => {
          

          this.ngOnInit();
          this.novoContato = { nome: '', telefone: '' }; 
        },
        (error) => {
          console.error('Erro ao criar contato:', error);
        }
      );
    } 
      
   
  
  
}

