import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  //styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

  heroes:IHeroes[]=[
    {
    imagen:'https://dragonball-api.com/characters/Lunch_traje_de_sirvienta_en_el_manga.webp',
    nombre:'Launch',
    description:'Personaje que sufre cambios de personalidad al estornudar. Es uno de los personajes principales del manga Dragon Ball y su anime homónimo; Lunch es una chica que sufre de un trastorno de personalidad doble que a raíz de sus reacciones alérgicas provoca que ella cambie entre dos personalidades diferentes, ninguna de las personalidades recuerda lo que la otra hizo o dijo.',
    raza:'Humano',
    ki:0
    },
    {
    imagen:'https://dragonball-api.com/characters/Marcarita.webp',
    nombre:'Marcarita',
    description:'Marcarita es el ángel guía del Universo 11, sirviente y maestra de artes marciales del Dios de la Destrucción Vermoud. Es un personaje de la Arco de la Supervivencia Universal de Dragon Ball Super.',
    raza:'Angel',
    ki:10
    },
    {
    imagen:'https://dragonball-api.com/characters/Jiren.webp',
    nombre:'Jiren',
    description:'Jiren es un poderoso luchador del Universo 11 y uno de los oponentes más formidables en el torneo.',
    raza:'Humano',
    ki:121
    },
    {
    imagen:'https://dragonball-api.com/characters/Tenshinhan_Universo7.webp',
    nombre:'Tenshinhan',
    description:'La Tierra también llamado Mundo del Dragón (Dragon World), es el planeta principal donde se desarrolla la serie de Dragon Ball. Se encuentra en el Sistema Solar de la Vía Láctea de las Galaxias del Norte del Universo 7, lugar que supervisa el Kaio del Norte, y tiene su equivalente en el Universo 6. El hogar de los terrícolas y los Guerreros Z. Ha sido atacado en varias ocasiones por enemigos poderosos.',
    raza:'Humano',
    ki:2400000
    }
  ]


}
