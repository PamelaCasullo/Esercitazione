import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { ServizioService } from 'src/app/services/servizio.service';

@Component({
  selector: 'app-tabella-utenti',
  templateUrl: './tabella-utenti.component.html',
  styleUrls: ['./tabella-utenti.component.scss']
})
export class TabellaUtentiComponent implements OnInit {

  users:User[]=[];
  obj!:any;
  id!:number;
  constructor( 
    private servizio:ServizioService) { }

  ngOnInit(): void {

    this.users=this.servizio.getUsers();
    console.log(JSON.stringify(this.users));
    let userIn = this.servizio.getUserSingle(this.id);
    this.servizio.settoMod(userIn!);

  }
  SavedId(id:number){
   this.id=id;
   console.log("Id salvato="+this.id);
  }
 

}
