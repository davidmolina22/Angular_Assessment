import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subscribed',
})
export class SubscribedPipe implements PipeTransform {
  transform(value: boolean): any {
    if (value) {
      return 'bi bi-check-lg';
    }
    return '';
  }
}
