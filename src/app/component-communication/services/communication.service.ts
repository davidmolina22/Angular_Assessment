import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  // EventEmitters for text
  parentText: EventEmitter<string>;
  childText: EventEmitter<string>;

  // Subjects for text
  parentSubject: Subject<string>;
  childSubject: Subject<string>;

  constructor() {
    // Initialize variables
    this.parentText    = new EventEmitter<string>();
    this.childText     = new EventEmitter<string>();
    
    this.parentSubject = new Subject<string>();
    this.childSubject  = new Subject<string>();
  }

  // Using the Service & EventEmitter
  raiseParentEvent(text: string): void {
    this.parentText.emit(text);
  }

  raiseChildText(text: string): void {
    this.childText.emit(text);
  }

  
  // Using Subjects (observables)
  sendParentMessage(text: string) {
    this.parentSubject.next(text);
  }

  sendChildMessage(text: string) {
    this.childSubject.next(text);
  }

  accessParentMessage() {
    return this.parentSubject.asObservable();
  }

  accessChildMessage() {
    return this.childSubject.asObservable();
  }
}
