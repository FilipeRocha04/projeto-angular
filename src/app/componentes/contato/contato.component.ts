import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
 constructor(private crudServices:CrudService){}

}