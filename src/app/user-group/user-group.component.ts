import { Component, OnInit } from '@angular/core';
import { UserGroup } from 'src/models/user-group.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  group = new UserGroup();
  allGroups = [];
  groupId = '';


  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('groups').valueChanges({idField: 'groupId'})
    .subscribe(results => {
      this.allGroups = results.map( r => new UserGroup(r))
      console.log(this.allGroups); 
      console.log(results); 
    })
      
    }
    
  
    
    addGroup() {
    console.log('Current group is', this.group);
      this.firestore
      .collection('groups')
      .add(this.group.toJSON())
      .then((result: any) => {
        console.log(result);
        
      });
    }
   /*
    deleteGroup(){
      this.firestore
      .collection('groups')
      .doc.(groupId)
      .delete()
      .then((result: any) =>{
        console.log(result);
      });

      */
    }



