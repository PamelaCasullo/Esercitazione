import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Città } from '../model/Città';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  private citta: Città[] = [
    {
      id: 1,
      nome: "Roma"
    },
    {
      id: 2,
      nome: "Firenze"
    },
    {
      id: 3,
      nome: "Milano"
    },
    {
      id: 4,
      nome: "Torino"
    },
    {
      id: 5,
      nome: "Genova"
    },
    {
      id: 6,
      nome: "Napoli"
    },
    {
      id: 7,
      nome: "NESSUNA SELEZIONE"
    }
  ];
  private users: User[] = [];
  private toMod!: User;
  private numb: number | null = 0;

  settoMod(aaa: User): User {
    this.toMod = {
      id: aaa.id,
      password: aaa.password,
      email: aaa.email,
      username: aaa.username,
      citta: {
        id: aaa.citta?.id,
        nome: aaa.citta?.nome
      }
    };
    this.modifyUserList(aaa);
    return this.toMod;
  }
  getToMod() {
    return this.toMod;
  }
  modifyUserList(aaa: User) {
    this.users!.splice(aaa.id! - 1, 1);
  }

  addToUserList(user: User) {
    this.users.push(user);
  }
  getUserSingle(id: number): User {
    let i = 0;
    let u1: User = {};
    for (let u of this.users)
      if (typeof u.id === "number") {
        return u;
      }
      else return u1;
    return u1;
  }
  getIdUser(): Number {
    let i = this.users!.length - 1;
    return i;
  }
  getUsers(): User[] {
    return this.users!;
  }
  validatorUtente(utente: User): boolean {
    if (((typeof utente.email === "undefined") || (typeof utente.username === "undefined"))
    || (typeof utente.password === "undefined")) {
        console.log("email false tipo: "+typeof utente.email);
        console.log("username false tipo: "+typeof utente.username);
        console.log("password false tipo: "+typeof utente.password);
      return false;

    } else {
      console.log("email true tipo: "+typeof utente.email);
      console.log("username true tipo: "+typeof utente.username);
      console.log("password true tipo: "+typeof utente.password);
      if(utente.username==""||utente.username==""||utente.password==""){
        return false;
      } else {
      return true;
      }
    }

  }
  validatorCitta(cittad: Città): boolean {

    if ((typeof cittad.id === "undefined") && (typeof cittad.nome === "undefined"))
      return false;
    else return true;
  }
  modifyUser(id: number, modifyed: User): User[] {
    let i = 0;

    if (this.validatorUtente(modifyed)) {
      if (this.validatorCitta(modifyed.citta!)) {
        console.log("Dati Inseriti Correttamente! ");

        for (; i < this.users.length; i++) {

          if (this.users[i].id == id) {
            this.users[i] = modifyed;
          }
        }

        return this.users;
      } else console.log("ERRORE UTENTE");
    } else console.log("ERRORE CITTA");
    return this.users;
  }

  getCittà(): Città[] {
    return this.citta;
  }
  cleanUsers(): User[] {
    this.users = [];
    return this.users;
  }
  valorizzaUtente(value: User, nome: Città): User | null {
    let userA: User = {};
    this.numb = this.getIdUser().valueOf() + 2;

    if (this.validatorUtente(value)) {
        console.log("UTENTE VALIDO! "+value.username );
      if (this.validatorCitta(nome)) {
        console.log("CITTA VALIDA! "+ nome.nome);
        console.log("Dati Inseriti Correttamente! ");

        if (this.getUsers()) {

          userA = {
            id: this.numb.valueOf(),
            email: value.email,
            username: value.username,
            password: value.password,
            citta: {
              id: this.numb.valueOf(),
              nome: nome.nome
            }
          };
          console.log("Dati inviati!");
          return userA;

        } else {
          window.alert('Utente NON Aggiunto');
          return null;
        }
      
    } else {
      console.log("ERRORE UTENTE");
      return null;
    }
  } else{
    console.log("ERRORE CITTA");
    return null;
  }

  }

constructor(private http: HttpClient) { }
}

