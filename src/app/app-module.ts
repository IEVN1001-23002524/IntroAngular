import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Distancias } from './formularios/distancias/distancias';
import { Areas } from './formularios/areas/areas';
import { Usuario } from './formularios/usuario/usuario';


@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Distancias,
    Areas,
    Usuario,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
