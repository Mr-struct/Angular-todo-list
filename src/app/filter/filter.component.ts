import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FILTERTYPE } from "../models/constants";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  filter = FILTERTYPE;
  @Output() setFilterNotify = new EventEmitter<string>();
  constructor() {}

  setFilter(type) {
    this.setFilterNotify.emit(type);
  }
  ngOnInit() {}
}
