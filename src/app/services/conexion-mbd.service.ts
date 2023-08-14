import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionMBDService {

  url = "http://localhost:4000/users";
  url2 = "http://localhost:4000/admin";
  url3 = "http://localhost:4000/access";
  url4 = "http://localhost:4000/visita";



  constructor(private http: HttpClient) { }
  
  getUsers():Observable<any>{
   return this.http.get(this.url);
  }

  getOne(correo:string):Observable<any>{
    return this.http.get(`${this.url}/${correo}`);
   }

  addUser(Usuario: {}):Observable<any>{
    return this.http.post(this.url, Usuario);
  }


  getaccess():Observable<any>{
    return this.http.get(this.url3);
   }
 
   addaccess(Usuario: {}):Observable<any>{
     return this.http.post(this.url3, Usuario);
   }
   
   getAdmin():Observable<any>{
    return this.http.get(this.url2);
   }

   getOneAdmin(user:string):Observable<any>{
    return this.http.get(`${this.url2}/${user}`);//this.router.navigate(['/tabs/tab2',user.value])
   }
 
   updateAdmin(user:string,pass: {}):Observable<any>{
    return this.http.put(`${this.url2}/${user}`,pass);
  }
   addAdmin(Usuario: {}):Observable<any>{
     return this.http.post(this.url2, Usuario);
   }

   getVisita():Observable<any>{
    return this.http.get(this.url4);
   }
 
   addVisita(Usuario: {}):Observable<any>{
     return this.http.post(this.url4, Usuario);
   }

   

}