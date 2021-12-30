import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserGroup } from 'src/models/user-group.class';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  group = new UserGroup();
  allGroups = [];


  constructor(public firestore: AngularFirestore) {
    this.firestore
    .collection('groups')
    .valueChanges({idField: 'customIdName'})
    .subscribe(results => {
      this.allGroups = results.map( r => new UserGroup(r))
      console.log(this.allGroups); 
      console.log(results); 
    });
   }
}
