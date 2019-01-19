import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// ROUTES
import { FeatureRoutingModule } from './app.routes';

// SERVICES
import { MeansOfPayment } from './services/meansofpayment.service';


// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormadepagoComponent } from './components/formadepago/formadepago.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormadepagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureRoutingModule,
    HttpClientModule
  ],
  providers: [
    MeansOfPayment
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
