import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Composants/home/home.component';
import { LoginComponent} from "./Composants/login/login.component";
import { ListingComponent} from "./Composants/listing/listing.component";
import { AjoutComponent } from './Composants/ajout/ajout.component';
import { InterventionsComponent } from './Composants/interventions/interventions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListingComponent,
    AjoutComponent,
    InterventionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
