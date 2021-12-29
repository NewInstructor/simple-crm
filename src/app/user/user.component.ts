import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FsService } from '../fs.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

user = new User();
allUsers = []
userId = '';

  constructor(public dialog: MatDialog, private firestore: AngularFirestore, public fs: FsService) { }
  

  ngOnInit(): void {

  }


  openDialog() {
this.dialog.open(DialogAddUserComponent);
  }


deleteUser(customIdName) {
  console.log(customIdName);
  this.firestore
      .collection('users')
      .doc(customIdName)
      .delete()
      .then(() =>{
        
      });
}

}
