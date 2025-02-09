import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

getHeader(){
  return {
    Authorization:"Token ymtX1IQBeMG3jAJiE7q057FeTyWmOSwu"
  }
}






  getTabela():Observable<any>{
    return this.http.get<any>("https://api.baserow.io/api/database/rows/table/442455/?user_field_names=true",{headers:this.getHeader()})
    
  }
  

  editarTabela(id:any,data:any):Observable<any>{
    return this.http.patch<any>("https://api.baserow.io/api/database/rows/table/442455/"+id+"/?user_field_names=true",data,{headers:this.getHeader()})
    
  }
  deletarTabela(id:any):Observable<any>{
    return this.http.delete<any>("https://api.baserow.io/api/database/rows/table/442455/"+id+"/",{headers:this.getHeader()})


  }
  criarTabela(data:any):Observable<any>{
    return this.http.post<any>("https://api.baserow.io/api/database/rows/table/442455/?user_field_names=true",data,{headers:this.getHeader()})
  }

}


