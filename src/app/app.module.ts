import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Certifique-se de importar corretamente
import { HeaderComponent } from './components/header/header/header.component';
import { BigCardComponent } from './components/big_card/big-card/big-card.component';
import { CardComponent } from './components/card/card/card.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BigCardComponent,
    CardComponent,  
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
