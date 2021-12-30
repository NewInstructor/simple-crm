import { Component, OnInit } from '@angular/core';
import { FsService } from '../fs.service';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor(public groupService: GroupService, public userService: FsService) { }

  ngOnInit(): void {
  }

  
}
