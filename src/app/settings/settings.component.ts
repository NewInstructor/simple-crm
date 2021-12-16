import { Component, OnInit } from '@angular/core';
import { userGroup } from 'src/models/user-group.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  group = new userGroup();
  allGroups = []

  constructor(private firestore: AngularFirestore) { 

  }

  ngOnInit(): void {

  }
/*
  colorpicker() {
// Farbe aus ColorPicker auslesen
/var theInput = document.getElementById("kb_selected_color");

//var theColor = theInput.value;
theInput.addEventListener("input", function() {

// Farcode (Hex) schreiben
document.getElementById("hex").innerHTML = theInput.value;

// Farbvariable schreiben
document.documentElement.style.setProperty('--kb-color',theInput.value);

}, false);

*/

addGroup() {
console.log('Current group is', this.group);



  this.firestore
  .collection('groups')
  .add(this.group.toJSON())
  .then((result: any) => {
  });
}

}
