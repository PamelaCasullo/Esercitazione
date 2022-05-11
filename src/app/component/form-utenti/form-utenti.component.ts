import { Component, OnInit } from '@angular/core';
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
  public singleCity:Città={};

  ngOnInit(): void {
   this.citta = this.servizio.getCittà();
    
  }
  valore(e:Event){  
     console.log((<HTMLTextAreaElement>e.target).getAttribute("id"));
     this.singleCity.nome =(<HTMLTextAreaElement>e.target).getAttribute("id")!;
     console.log("DENTRO VALORE "+this.singleCity.nome);
  }
  InvioForm(value:any){
    console.log("Form in fase di invio");
    console.log("SingleCity, tipo = "+ typeof this.singleCity.nome);
    console.log(this.singleCity.nome);
    if(typeof this.singleCity.nome == "undefined"){
      alert("INSERISCI UNA CITTA' PRIMA DI INVIARE IL FORM!!");
    } else {
    let risultato=this.servizio.valorizzaUtente(value,this.singleCity);
    if(risultato!=null)
      this.servizio.addToUserList(risultato!);
    else alert("ERRORE DI INSERIMENTO UTENTE!INSERISCI TUTTI I PARAMETRI");
    }
  }

  check(users:User[]):boolean{

    if(users.length==0){
      return true
    }

     else return false;
  }


}
