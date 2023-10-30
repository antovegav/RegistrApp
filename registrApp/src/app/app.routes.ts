import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./users/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./users/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },  
  {
    path: 'estudiante',
    loadComponent: () => import('./pages/estudiante/estudiante.page').then( m => m.EstudiantePage)
  },
  {
    path: 'profesor',
    loadComponent: () => import('./pages/profesor/profesor.page').then( m => m.ProfesorPage)
  },
  {
    path: 'password-olvidado',
    loadComponent: () => import('./password-olvidado/password-olvidado.page').then( m => m.PasswordOlvidadoPage)
  },
  {
    path: 'asistencia',
    loadComponent: () => import('./asistencia/asistencia.page').then( m => m.AsistenciaPage)
  },
  {
    // Si no se encuentra la ruta, redirigir a login
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },







];
