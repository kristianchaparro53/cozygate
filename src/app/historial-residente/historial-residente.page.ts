import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-historial-residente',
  templateUrl: './historial-residente.page.html',
  styleUrls: ['./historial-residente.page.scss'],
})
export class HistorialResidentePage implements OnInit {

  users: any =[]
  public results = [...this.users];

  //Hola: string="64d0587af10c8f8690a430d9"
  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {

  }
 



  Back(){
    this.router.navigate(['/op1'])
  }

  // Extraer los datos directamente de la URL
  ionViewDidEnter() {
    this.getUserByUID(this.getIDFromURL());
  }

  // Medir las distancia entre carpetas  
  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = arr[2]
    return id    
    
  }

  // Metodo get atravez del URL ya extraido anteriormente
  getUserByUID (uid:String){
    this.conexion.getOne(uid.toString()).subscribe(
      (data)=>{
      this.data2=data;
      console.log(this.data2._id)
      // Una vez inicializa hace el metodo para obtener los visitantes por _id del usuario que pasa como
      // Uid para el visitante
      this.conexion.getOneVisita(data._id).subscribe(data =>{
        this.users = data;
        this.results = [...this.users];
        console.log(data)
      }) 

      },
      (error)=>{
        console.log(error);
      }
    )
  }
  //Almacenar los datos que se encuentran en la collecion 
  data2 ={ Correo:"",_id:""}
  
  Eliminar(Uid:any){
    this.conexion.deleteOneVisita(Uid).subscribe(
      ()=>{
        console.log(Uid)
        console.log('Registro eliminado exitosamente.');
       location.reload();
      },
      (error)=>{
        console.error('Error al eliminar registro:', error);
      }
    );
    }
}
