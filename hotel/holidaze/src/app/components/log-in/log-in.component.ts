import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnChanges {
  @Output() userDetailObj: EventEmitter<object> = new EventEmitter();
  form: any;

  @Input() isUsername: boolean;
  @Input() isPassword: boolean;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  }
  public userDetails(formValues: any) {
    this.userDetailObj.emit(formValues);
  }
}


