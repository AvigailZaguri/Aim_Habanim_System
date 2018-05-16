import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './date-picker-popup.component.html',
  styleUrls: ['./date-picker-popup.component.scss']
})
export class DatePickerPopupComponent implements OnInit {
  model;
 // firstDayOfWeek = 7;
  firstDayOfWeek = 7;
  constructor() { }

  ngOnInit() {
  }

}
