import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  constructor() { }

  lstMenu:Menu[]=[
      
    {voce:"Home", link:"Home",nome:"Home"},
    {voce:"Lista degli Utenti", link:"Utenti",nome:"AllUsers"},
    {voce:"Nuovo Utente", link:"Utente",nome:"NewUser"},
    {voce:"Contatti", link:"Contatti",nome:"Contact"}

  
];
  ngOnInit(): void {
  
  }

}
