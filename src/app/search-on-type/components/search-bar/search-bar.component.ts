import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(200)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  term: string = '';

  search() {
    this.onEnter.emit(this.term);
  }

  keyPressed() {
    this.debouncer.next(this.term);
  }
}
