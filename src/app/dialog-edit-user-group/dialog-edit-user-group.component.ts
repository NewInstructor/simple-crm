import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FsService } from '../fs.service';
import { UserGroup } from 'src/models/user-group.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user-group',
  templateUrl: './dialog-edit-user-group.component.html',
  styleUrls: ['./dialog-edit-user-group.component.scss']
})
export class DialogEditUserGroupComponent implements OnInit {
group = new UserGroup();
groupName: string;
groupColor: string;
groupUsers: string;
groupId: string;
loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserGroupComponent>,private firestore: AngularFirestore, public fs: FsService, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  saveGroup(){
    this.loading = true;
    this.firestore
    .collection('groups')
    .doc(this.groupId)
   .update(this.group.toJSON())
   .then(() => {
     this.loading = false;
     this.dialogRef.close();
      });
  }


toggleColorPicker(colorPicker){
  colorPicker.click();
}
}
