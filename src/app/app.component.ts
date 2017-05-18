import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as highlightjs from 'highlight.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormControl;
  public dateModel: string;

  public cpfFormControl: FormControl;
  public cpfModel: string;


  public constructor() {
    // highlightjs.initHighlighting();
  }

  public ngOnInit(): void {
    this.form = new FormControl('30081991');
    this.cpfFormControl = new FormControl('04787954778');
  }

}