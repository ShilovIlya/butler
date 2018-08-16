import { Component, Input, OnInit } from '@angular/core';
import { Link } from "../link";

@Component({
  selector: 'app-link-visual',
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
