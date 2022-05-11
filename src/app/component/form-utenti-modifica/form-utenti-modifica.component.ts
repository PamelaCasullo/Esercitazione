import { Component, OnInit } from '@angular/core';
import { Città } from 'src/app/model/Città';
import { User } from 'src/app/model/User';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-form-utenti-modifica',
  templateUrl: './form-utenti-modifica.component.html',
  styleUrls: ['./form-utenti-modifica.component.scss']
})
export class FormUtentiModificaComponent implements OnInit {

  constructor(private servizio:ServizioService) { }
  public citta: Città[]=[];
  public user :User={};

  ngOnInit(): void {
   this.citta = this.servizio.getCittà();
    
  }
  InvioForm(value:any){
    console.log("Form in fase di invio");
   
    

    this.user=this.servizio.getToMod();
    console.log("toMOD"+this.user);
    console.log("Dati inviati");
    this.servizio.modifyUser(this.user.id!,this.user);
    window.alert('Utente AGGIORNATO');

   
  }



}
