import { Component, OnInit } from '@angular/core';
import {IProducto} from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    imageWidth:number=150;
    imageMargin:number=2;
    muestraImg:boolean=true;
    listFilter:string="";
productos:IProducto[]=[
  {
    "productoId":1,
    "modelo":"Sentra",
    "descripcion":"auto 4 puertas",
    "marca":"Nissan",
    "year":"febrero 3 2020",
    "precio":250000,
    "puntos":3.3,
    "ImagenUrl": "https://wieck-nissanao-production.s3.amazonaws.com/photos/cc12bb6c50b6ff98695d616be92cb3183849636e/preview-928x522.jpg"
  },
  {
    "productoId":2,
    "modelo":"Rio",
    "descripcion":"auto 4 puertas",
    "marca":"Kia",
    "year":"Marzo 3 2000",
    "precio":150000,
    "puntos":4,
    "ImagenUrl": "https://coches.com/fotos_historicas/kia/Rio-2000/kia_rio_r1.jpg"
  },
  {
    "productoId":3,
    "modelo":"March",
    "descripcion":"auto 2 puertas",
    "marca":"Nissan",
    "year":"Febrero 3 2020",
    "precio":290000,
    "puntos":5,
    "ImagenUrl": "https://img.remediosdigitales.com/9c1102/nissan-march-2022-precio-mexico_/1366_2000.jpeg"
  }
]


  constructor() { }
  ShowImagen():void{ //que se vea o no se vea el valor, como si fuera boton
    this.muestraImg= !this.muestraImg;
  }

  ngOnInit(): void {
  }

}
