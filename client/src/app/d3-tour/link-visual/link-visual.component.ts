import { Component, Input, OnInit } from '@angular/core';
import { Link } from "../model/link";

@Component({
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent implements OnInit {
  @Input('linkVisual') link: Link;

  constructor() {
  }

  ngOnInit() {
  }

}
