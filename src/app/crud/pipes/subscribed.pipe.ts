import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subscribed',
})
export class SubscribedPipe implements PipeTransform {
  // This pipe allow us to change the subscribed value from the user object (boolean)
  transform(value: boolean): any {
    // if the subscribed property of user is true, we show a tick
    if (value) {
      return 'bi bi-check-lg';
    }
    // If it's false, we don't show anything
    return '';
  }
}
