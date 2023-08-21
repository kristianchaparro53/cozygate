import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-visita',
  templateUrl: './registro-visita.page.html',
  styleUrls: ['./registro-visita.page.scss'],
})
export class RegistroVisitaPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService,private alertController:AlertController) { }

  ngOnInit() {
  }
  cancelarV(){
    this.router.navigate(['/op1',this.data2.Correo])
  }

  ionViewDidEnter() {
    this.getUserByUID(this.getIDFromURL());
  }
  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = arr[2]
    return id    
    
  }


  getUserByUID (uid:String){
    this.conexion.getOne(uid.toString()).subscribe(
      (data)=>{
      this.data2=data;
      console.log(this.data2._id)
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  data2 ={ Correo:"",_id:""}
  // Metodo post, el metodo llamado enviar
  // se le asigna los siguientes atributos los cuales son llamados desde el formulario
  // y enviaddos ala base de datos con el metoddo post realizado anteriormete

  Qr:string='Activo'

  enviar(name:any,tipo:any,fecha:any,model:any,placa:any){


    let Agregar= {Name:name.value,Tipo:tipo.value,Date:fecha.value,Modelo:model.value,Placa:placa.value,Uid:this.data2._id}

    let agregarQR={Name:name.value,Qr:this.Qr,Auto:model.value,Uid:this.data2._id}

    this.conexion.addaccess(agregarQR).subscribe(async data =>{
      console.log(data)

    })
    
    this.conexion.addVisita(Agregar).subscribe(async data =>{
      console.log(data)
      //this.router.navigate(['/principal]'])
      const alert = await this.alertController.create({
        header: '',
        message: 'Visita registrada!!! ',
        buttons: [
          {
            text: 'Aceptar',
            role: 'Aceptar',
            
          },
        ]
        
      });
      await alert.present();
      //window.location.href = '/';

    })

    name.value='',model.value='',placa.value='',tipo.value=''
    //this.router.navigate(['/qr-generado'])
  }
}
