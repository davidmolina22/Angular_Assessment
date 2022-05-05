import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  // Service to translate the enum keys from english to spanish
  public languages = ['es', 'en'];

  public language = 'es';

  private dictionary: { [key: string]: TranslationSet } = {
    es: {
      language: 'es',
      values: {
        red: 'rojo',
        yellow: 'amarillo',
        green: 'verde',
      },
    },
    en: {
      language: 'en',
      values: {
        red: 'red',
        yellow: 'yellow',
        green: 'green',
      },
    },
  };

  constructor() {}

  // we pass the key (word in english)
  translate(key: string): string {
    // Check if the language that we want to translate exists
    if (this.dictionary[this.language] !== null) {
      // If exists, we return the values of the key (key = 'red', it returns 'rojo')
      return this.dictionary[this.language].values[key]
    }
    // If not exists, we return the key (key = 'red', it returns 'red')
    return key
  }
}

// It can be an interface instead of a class
export class TranslationSet {
  public language!: string;
  public values: { [key: string]: string } = {};
}
