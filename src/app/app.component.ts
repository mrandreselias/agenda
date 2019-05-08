import { Component } from '@angular/core';
import { Contacts } from 'src/app/models/contacts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactsArray: Contacts[] = [
    {id: 1, name: 'Andres', lastName: 'Ruiz', email: 'sigmaster001@gmail.com', numb: '0416-7921866'},
    {id: 2, name: 'Juan', lastName: 'Fernandez', email: 'jf@gmail.com', numb: '0412-8923816'},
    {id: 3, name: 'Pedro', lastName: 'Rodriguez', email: 'prodriguez001@gmail.com', numb: '0416-8825644'},
    {id: 4, name: 'Lucas', lastName: 'Perez', email: 'lperez@gmail.com', numb: '0426-7942166'},
    {id: 5, name: 'Jhon', lastName: 'Diaz', email: 'jd01@gmail.com', numb: '0414-5563214'},
    {id: 6, name: 'Maria', lastName: 'Ruiz', email: 'mr1@gmail.com', numb: '0416-7841454'}
   ];

   newContact: Contacts = new Contacts();

   addEdit() {// add or edit Function
     if (this.newContact.id === 0) {
        this.newContact.id = this.contactsArray.length + 1;
        this.contactsArray.push(this.newContact);
     }
      this.newContact = new Contacts();
   }

   toEdit(contact: Contacts) {// load data to edit Function
    this.newContact = contact;
   }

   delete(e): void { // Delete Function
    if (confirm('Are yu sure to delete ?')) {
        this.contactsArray = this.contactsArray.filter( x => x !== e);
    }
  }
}
