import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  VehiculoMod(){
    this.router.navigate(['/VehiculoMod'])
  }
  BackToTab1(){
    this.router.navigate(['/tabs/tab1'])
  }
  BackToTab2(){
    this.router.navigate(['/tabs/tab2'])
  }
  BackToTab3(){
    this.router.navigate(['/tabs/tab3'])
  }

}
