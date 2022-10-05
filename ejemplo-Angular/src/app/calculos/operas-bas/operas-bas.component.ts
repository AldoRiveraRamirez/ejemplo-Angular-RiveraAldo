import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1:string='';
  num2:string='';
  operacion:string='';
  resultado:number=0;


  operar():void{
    if(this.operacion=="Sumar"){
      this.sumar();
    }
    else if(this.operacion=="Restar"){
      this.restar();
    }
    else if(this.operacion=="Dividir"){
      this.dividir();
    }
    else if(this.operacion=="Multiplicar"){
      this.multiplicar();
    }
  }
  constructor() { }

    sumar():void{
      this.resultado= parseInt( this.num1)+parseInt(this.num2);
          
    }
    restar():void{
      this.resultado= parseInt( this.num1)-parseInt(this.num2);
      
    }
    multiplicar():void{
      this.resultado= parseInt( this.num1)*parseInt(this.num2);
          }
    
    dividir():void{
      this.resultado= parseInt( this.num1)/parseInt(this.num2);

    }

    
  ngOnInit(): void {
  }

}
