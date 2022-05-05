import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor( private translationService: TranslationService) {}

  transform(value: any, ...args: any[]): any {
    // This pipe call the Translation Service to translate the value from english to spanish
    return this.translationService.translate(value);
  }

}
