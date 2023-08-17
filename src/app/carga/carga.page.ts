import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  constructor(private router: Router) { }


  
  ngOnInit() {
    const setTime = () => {
      
      setTimeout(() => {
        console.log("Carga completa");
        this.router.navigate(['/principal']);
      },6000);
    }
    console.log("Cargando pantalla . . .");
    setTime();
  }
}
