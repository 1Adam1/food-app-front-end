import { Component, OnInit, Input } from '@angular/core';

export interface DataInfoComponentInputFormat {
  values: {
    key: string;
    value: any;
  }[];
  header?: string;
  link?: {
    name: string;
    url: string;
  }
}

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.scss']
})
export class DataInfoComponent implements OnInit {

  @Input() data: DataInfoComponentInputFormat;

  constructor() { }

  ngOnInit(): void {
  }

}
