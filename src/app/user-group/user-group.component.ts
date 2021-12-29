import { Component, OnInit } from '@angular/core';
import { UserGroup } from 'src/models/user-group.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FsService } from '../fs.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogEditUserGroupComponent } from '../dialog-edit-user-group/dialog-edit-user-group.component';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  group = new UserGroup();
  allGroups = [];
  groupId = '';


  constructor(public dialog: MatDialog, private firestore: AngularFirestore, public fs: FsService) { }

  ngOnInit(): void {
    this.firestore.collection('groups').valueChanges({idField: 'customIdName'})
    .subscribe(results => {
      this.allGroups = results.map( r => new UserGroup(r))
      console.log(this.allGroups); 
      console.log(results); 
    });
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
   
    toggleColorPicker(colorPicker){
      colorPicker.click();
    }



    deleteGroup(groupId){
      console.log(groupId);
      
      this.firestore
      .collection('groups')
      .doc(groupId)
      .delete()
      .then((result: any) =>{
        console.log(result);
      });
    }

    openEditGroup() {
      const dialog = this.dialog.open(DialogEditUserGroupComponent);
      dialog.componentInstance.group = new UserGroup(this.group.toJSON());
      dialog.componentInstance.groupId = this.groupId;
        }


  }

