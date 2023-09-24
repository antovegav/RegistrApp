import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ListuserService {

  // Arreglo que almacena los usuarios
  private userList: UserModel[] =  [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      userType: 'estudiante',
      username: 'juanperez',
      password: 'password1',
      nacimiento: '1999-01-01',
      correo: 'juperez@duocuc.cl',
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      userType: 'estudiante',
      username: 'mariagonzalez',
      password: 'password2',
      nacimiento: '1995-06-12',
      correo: "agonzalez@duocuc.cl",
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Sánchez',
      userType: 'profesor',
      username: 'pedrosanchez',
      password: 'password3',
      nacimiento: undefined,
      correo: "pesanchez@profesor.duoc.cl",
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Martínez',
      userType: 'profesor',
      username: 'anamartinez',
      password: 'password4',
      nacimiento: undefined,
      correo: "amartinez@profesor.duoc.cl",
    },
  ];


  // Función que agrega un usuario al arreglo
  addUser(user: UserModel) {
    this.userList.push(user);
  }

  // Función que retorna el arreglo de usuarios
  getUserList() {
    return this.userList;
  }
}
