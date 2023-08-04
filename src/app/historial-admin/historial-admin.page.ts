import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-admin',
  templateUrl: './historial-admin.page.html',
  styleUrls: ['./historial-admin.page.scss'],
})
export class HistorialAdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/login-ad'])
  }

}
