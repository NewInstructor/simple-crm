import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FsService {

  allUsers = [];
 

  constructor(public firestore: AngularFirestore) {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) => {
      console.log('Received changes from DB', changes); 
      this.allUsers = changes;
    });



     

  }

   }
