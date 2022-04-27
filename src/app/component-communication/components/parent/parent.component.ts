import { Component, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(private communicationService: CommunicationService) {}

  // Output text to child
  @Output() message: string = '';

  // Input text to print
  inputMsg = '';

  // Get text from child (EventEmitter)
  getTextFromChild($event: any) {
    this.inputMsg = $event;

  }

  // Set text to child (input)
  setTextToChild() {
    this.message = 'PARENT USING INPUT PROPERTY';
  }

  ngOnInit(): void {

    // Get text from child using service
    this.communicationService.childText.subscribe(
      (text) => (this.inputMsg = text)
    );

    // Get text from child using subjects
    this.communicationService
      .accessParentMessage()
      .subscribe((msg) => (this.inputMsg = msg as string));
  }

  // Set text to child using service
  setTextFromService() {
    this.communicationService.raiseParentEvent('PARENT USING SERVICE');
  }

  // Set text to child (subject)
  setTextFromSubject() {
    this.communicationService.sendChildMessage('PARENT USING SUBJECT');
  }
}
