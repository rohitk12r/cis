import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

export interface Element {
  value: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}

  displayedColumns: string[] = ['value', 'description'];
  title = 'cis';
  dataSource: any = (data as any).default;
  ngOnInit(){
    console.log(this.dataSource);
  }
}
