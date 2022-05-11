import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { ContattiComponent } from './component/contatti/contatti.component';
import { TabellaUtentiComponent } from './component/tabella-utenti/tabella-utenti.component';
import { FormUtentiComponent } from './component/form-utenti/form-utenti.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormUtentiModificaComponent } from './component/form-utenti-modifica/form-utenti-modifica.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContattiComponent,
    TabellaUtentiComponent,
    FormUtentiComponent,
    FormUtentiModificaComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
