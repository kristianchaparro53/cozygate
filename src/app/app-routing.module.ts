import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lista-habit',
    loadChildren: () => import('./lista-habit/lista-habit.module').then( m => m.ListaHabitPageModule)
  },
  {
    path: 'historial-residente',
    loadChildren: () => import('./historial-residente/historial-residente.module').then( m => m.HistorialResidentePageModule)
  },
  {
    path: 'registro-visita',
    loadChildren: () => import('./registro-visita/registro-visita.module').then( m => m.RegistroVisitaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-ad',
    loadChildren: () => import('./login-ad/login-ad.module').then( m => m.LoginAdPageModule)
  },
  {
    path: 'newcontra',
    loadChildren: () => import('./newcontra/newcontra.module').then( m => m.NewcontraPageModule)
  },
  {
    path: 'qr-generado',
    loadChildren: () => import('./qr-generado/qr-generado.module').then( m => m.QrGeneradoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
