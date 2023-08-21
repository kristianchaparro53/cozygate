import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionMBDService {

  url = "http://localhost:4000/users/";
  url2 = "http://localhost:4000/admin";
  url3 = "http://localhost:4000/access";
  url4 = "http://localhost:4000/visita";
  url5 = "http://localhost:4000/quejas";
  url6 = "http://localhost:4000/vehiculo";
  url7 = "http://localhost:4000/appi";





  constructor(private http: HttpClient) { }

  
  addVehiculo(Usuario: {}):Observable<any>{
    return this.http.post(this.url6, Usuario);
  }
  getVehiculo():Observable<any>{
    return this.http.get(this.url6);
   }

  get():Observable<any>{
    return this.http.get(this.url);
   }
   
  updateUser(user:string,pass: {}):Observable<any>{
    return this.http.put(`${this.url2}/${user}`,pass);
  }
  getUsers():Observable<any>{
   return this.http.get(this.url);
  }

  getOne(Correo:string):Observable<any>{
    return this.http.get(`${this.url}/${Correo}`);
   }

  addUser(Usuario: {}):Observable<any>{
    return this.http.post(this.url, Usuario);
  }

  addquejas(Usuario: {}):Observable<any>{
    return this.http.post(this.url5, Usuario);
  }
  getquejas():Observable<any>{
    return this.http.get(this.url5);
   }


  getaccess():Observable<any>{
    return this.http.get(this.url3);
   }
 
   addaccess(Usuario: {}):Observable<any>{
     return this.http.post(this.url7, Usuario);
   }
   
   getAdmin():Observable<any>{
    return this.http.get(this.url2);
   }

   getOneAdmin(User:string):Observable<any>{
    return this.http.get(`${this.url2}/${User}`);//this.router.navigate(['/tabs/tab2',user.value])
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
   getOneVisita(Uid:string):Observable<any>{
    return this.http.get(`${this.url4}/${Uid}`);
   }
   getOneVisitaQR(Uid:string):Observable<any>{
    return this.http.get(`${this.url4}/${Uid}`);
   }
   deleteOneVisita(Uid:string):Observable<any>{
    return this.http.delete(`${this.url4}/${Uid}`);
   }

   

}