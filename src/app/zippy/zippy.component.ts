import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;
  // tslint:disable-next-line:no-inferrable-types
  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
