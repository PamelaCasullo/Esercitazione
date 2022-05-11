import {Città} from './Città'; 

export interface User{
    id?:number;
    email?:String;
    username?:String;
    password?:String;
    citta?:Città;

}