import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { }
  
nombre:string="";
numboleto:number=0;
numperson:number=0;
mensaje:string="";
tarjeta:number=0;
cliente:string="";
total:string="";
 
 boleto(){
  let costobol =12;
  let boletoMax=this.numperson*7;
  let total;
  if(this.numboleto<=boletoMax){
    total=this.numboleto*costobol
    if(this.numboleto>5){
      total=total-(total*.15); 
      this.cliente="Cliente: ";
      this.total="Total:  ";
    }else if(this.numboleto >= 3 ){
      total=total-(total*.10);
      this.cliente="Cliente: ";
      this.total="Total:  ";
    }
    if(this.tarjeta==1){
      total=total-(total*.10);
      this.cliente="Cliente: ";
      this.total="Total:  ";

    }
    this.mensaje="Total a pagar " +    total;
  }else{
    this.mensaje= "Recuerda que solo se pueden comprar 7 boletos por persona.";
  }
 }

  ngOnInit(): void {
  }

}
