import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  // The debouncer allow us to wait (10 ms) to send the request so we do less number of requests.
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(10)).subscribe((value) => {
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
  
  // The debouncer emits the search param as we press any key so we can get the term to send the request.
  keyPressed() {
    this.debouncer.next(this.term);
  }
}
