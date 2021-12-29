import { Component, OnInit } from '@angular/core';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor(public fs: FsService) { }

  ngOnInit(): void {
  }

  
}
