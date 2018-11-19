import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './core/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  // API_URL = 'http://localhost:8090/MyTestNGServer-0.0.1-SNAPSHOT/';
  // API_URL = 'http://localhost:8090/';
  API_URL = 'http://my-ngserver-myngserverproj.193b.starter-ca-central-1.openshiftapps.com/MyTestNGServer-0.0.1-SNAPSHOT/';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'

    })
  };
  constructor(private httpClient: HttpClient) { }

  getAccounts() {
    return this.httpClient.get(`${this.API_URL}/accounts`);
  }

  getContacts() {
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }
  createContact(contact) {
    return this.httpClient.post(`${this.API_URL}/contacts/`, contact);
  }
  updateContact(contact) {
    return this.httpClient.put(`${this.API_URL}/contacts/`, contact);
  }
  deleteContact(contact) {
    return this.httpClient.delete(`${this.API_URL}/contacts/${contact.pk}`);
  }
  getLeads() {
    return this.httpClient.get(`${this.API_URL}/leads`);
  }
  getOpportunities() {
    return this.httpClient.get(`${this.API_URL}/opportunities`);
  }
  getBeers() {
    console.log(`${this.API_URL}/getBeers`);
    return this.httpClient.get(`${this.API_URL}/getBeers`);
  }

  addOrder(order: String) {
    return this.httpClient.post(`${this.API_URL}/addOrder/`, order, this.httpOptions);
  }

}
