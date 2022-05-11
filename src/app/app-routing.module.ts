import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './component/contatti/contatti.component';
import { FormUtentiModificaComponent } from './component/form-utenti-modifica/form-utenti-modifica.component';
import { FormUtentiComponent } from './component/form-utenti/form-utenti.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { TabellaUtentiComponent } from './component/tabella-utenti/tabella-utenti.component';


const routes: Routes = [
{path:"Menu", component:MenuComponent},
{path: "Home",component: HomeComponent},
{path: "Contatti", component:ContattiComponent},
{path: "Utenti", component:TabellaUtentiComponent},
{path: "Utente", component: FormUtentiComponent},
{path: "Utent", component:FormUtentiModificaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
