import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountListComponent } from './account-list/account-list.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { OpportunityCreateComponent } from './opportunity-create/opportunity-create.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AccountListComponent,
        AccountCreateComponent,
        BeerListComponent,
        ContactCreateComponent,
        ContactListComponent,
        LeadCreateComponent,
        LeadListComponent,
        OpportunityCreateComponent,
        OpportunityListComponent,
        PizzaListComponent
      ],
      imports: [AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
