import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityCreateComponent } from './opportunity-create/opportunity-create.component';
import { CreateOrderComponent } from './create-order/create-order.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestInterceptor } from './shared/commonInterceptor';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountCreateComponent,
    ContactListComponent,
    ContactCreateComponent,
    LeadListComponent,
    LeadCreateComponent,
    OpportunityListComponent,
    OpportunityCreateComponent,
    BeerListComponent,
    PizzaListComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
