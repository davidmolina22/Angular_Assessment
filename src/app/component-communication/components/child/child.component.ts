import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  
  // Text variable to print
  @Input() message = '';

  
  @Output() outputEvent = new EventEmitter<string>();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    
    // Get text from parent using service
    this.communicationService.parentText.subscribe(
      (text) => (this.message = text)
    );

    // Get text from child using subjects
    this.communicationService
      .accessChildMessage()
      .subscribe((msg) => (this.message = msg as string));
  }

  // Set text to parent (EventEmitter)
  emitData() {
    this.outputEvent.emit('CHILD USING OUTPUT EVENT');
  }

  // Set text to parent using service
  setTextFromService() {
    this.communicationService.raiseChildText('CHILD USING SERVICE');
  }

  // Set text to parent (subject)
  setTextFromSubject() {
    this.communicationService.sendParentMessage('CHILD USING SUBJECT');
  }
}
