import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Città } from 'src/app/model/Città';
import { User } from 'src/app/model/User';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-form-utenti',
  templateUrl: './form-utenti.component.html',
  styleUrls: ['./form-utenti.component.scss']
})
export class FormUtentiComponent implements OnInit {

  constructor(private servizio:ServizioService) { }
  public citta: Città[]=[];
  public user :User={};
  public userOne:User[]=[];

  ngOnInit(): void {
   this.citta = this.servizio.getCittà();
    
  }
  InvioForm(value:any){
    console.log("Form in fase di invio");
    let risultato:User=this.servizio.valorizzaUtente(value);
    if(risultato.toString().length<=0){
      console.log("ERRORE");
    }
    else {
      this.servizio.addToUserList(risultato);
    }
    
   
  }

  check(users:User[]):boolean{

    if(users.length==0){
      return true
    }

     else return false;
  }


}
