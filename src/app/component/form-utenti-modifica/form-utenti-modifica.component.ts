import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Città } from 'src/app/model/Città';
import { User } from 'src/app/model/User';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-form-utenti-modifica',
  templateUrl: './form-utenti-modifica.component.html',
  styleUrls: ['./form-utenti-modifica.component.scss']
})
export class FormUtentiModificaComponent implements OnInit {

  constructor(private servizio:ServizioService,
    private routed:ActivatedRoute) { }
  public citta: Città[]=[];
  public user :User={};
  public saved:number=0;

  ngOnInit(): void {

    this.routed.queryParams.subscribe(params =>{
      console.log(params["param"]); //recupera i parametri

      this.saved=params["param"];
      
      });


   this.citta = this.servizio.getCittà();
    
  }
  InvioForm(){
    console.log("Form in fase di invio");
   
    
    this.servizio.settoMod(this.servizio.getUserSingle(this.saved)!);
    this.user=this.servizio.getToMod();

    console.log("Dati inviati");

    this.servizio.modifyUser(this.user.id!,this.user);
    window.alert('Utente Eliminato');

   
  }



}
