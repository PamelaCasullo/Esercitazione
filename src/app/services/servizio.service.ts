import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Città } from '../model/Città';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

 private citta:Città[]=[
    {
      id:1,
      nome:"Roma"
    },
    {
      id:2,
      nome:"Firenze"
    },
    {
      id:3,
      nome:"Milano"
    },
    {
      id:4,
      nome:"Torino"
    },
    {
      id:5,
      nome:"Genova"
    },
    {
      id:6,
      nome:"Napoli"
    },
  ];

  private users: User[]=[];
  private toMod!: User;

  settoMod(toMod:User){
    this.toMod=toMod;
  }
  getToMod(){
    return this.toMod;
  }

  addToUserList(user:User):Observable<User>{
    this.users.push(user);
    return this.http.post<User>
    ("/Post",user);

  }
  getUserSingle(id:number):User{
    let i=0;
    let u:User={};
    for(let u of this.users)
      if(u.id==id){
        return u;
      }
     return u;
    
  }
  getIdUser():Number{
    let i=this.users.length-1;
    return i;
  }
  getUsers():User[]{
    return this.users;
  }
  modifyUser(id:number,modifyed:User):User[]{
    let i=0;
    for(;i<this.users.length;i++){

      if(this.users[i].id==id){
        this.users[i]=modifyed;
      }
    }

    return this.users;
  }





  getCittà():Città[]{
    return this.citta;
  }
  cleanUsers():User[]{
    this.users=[];
    return this.users;
  }
  valorizzaUtente(value:any):User{
    let userA:User={};
    if(this.getUsers()){
      userA={
        id:1,
        email:value.email,
        username:value.username,
        password:value.password,
        citta:{
          id:1,
          nome:value.nome
        }
      };
      console.log("Dati inviati,Primo Utente");
  
    }else if(!this.getUsers())  {
      var numb = this.getIdUser().valueOf()+1;
     
      userA={
        id:numb.valueOf(),
        email:value.email,
        username:value.username,
        password:value.password,
        citta:{
          id:numb.valueOf(),
          nome:value.citta
        }
      };
      console.log("Dati inviati, Altri Utenti");

    } else {
      window.alert('Utente NON Aggiunto');
    }
    return userA;
  }

  constructor(private http:HttpClient) { }
}
