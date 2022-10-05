import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

    numeros='';
    resul:number=0;
    resultados:string[] = [];

  constructor() { }
  
    Multiplicar(){
      let numero:number = parseInt(this.numeros);
      let resultados:string[]=[];

      for(let i=1; i<=10; i++){
        this.resul = numero *i;
        resultados.push(numero + 'x' + i + '=' + this.resul + ("\n")  );
      }
      this.resultados=resultados;
    }

  ngOnInit(): void {
  }

}
