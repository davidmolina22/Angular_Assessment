import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
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

  translate(key: string): string {
    if (this.dictionary[this.language] !== null) {
      return this.dictionary[this.language].values[key]
    }

    return key
  }
}

export class TranslationSet {
  public language!: string;
  public values: { [key: string]: string } = {};
}
