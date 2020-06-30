import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: UserModel[];
  usersCopy: UserModel[];
  mapeo:any;


  constructor() {
    this.users = [
      { age: 18, name: 'Juan', lastname: 'Perez' },
      { age: 20, name: 'Pedro', lastname: 'Picapiedra' },
      { age: 21, name: 'Jaime', lastname: 'Guzman' },
      { age: 40, name: 'Marcelo', lastname: 'Bielsa' },
      { age: 30, name: 'Silvestre', lastname: 'Stallone' }
    ];
    //Con los corchetes se corta la referencia de modo que usercopy no afectara
    // a users

    // [... ]
    // {... }
    this.usersCopy = [... this.users];
  }

  ngOnInit(): void {

  }

  add(user: UserModel) {
    this.users.push(user);
  }

  borrarUser(id: number) {
    this.users.splice(id,1);
  }

  editarUser(user: UserModel, index: number) {
    this.users[index].name = user.name;
    this.users[index].lastname = user.lastname;
    this.users[index].age = user.age;
  }

  filtarEdad(formEdad: any) {
    const edad1 = formEdad.edad1;
    const edad2 = formEdad.edad2;
    this.users = this.users.filter(x => x.age >= edad1 && x.age <= edad2);
  }

  listar(formBuscar: any) {
    let valor = formBuscar.buscado;
    this.mapeo = this.users.map(x => x[valor])
    /* if ( valor = 'nombre') {
      this.mapeo = this.users.map(x => x.name)
    } 
    if ( valor = 'apellido') {
      this.mapeo = this.users.map(x => x.lastname)
    }  */
    console.log(valor);
    
  }
 
}
