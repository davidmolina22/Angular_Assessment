export enum Pais {
  'España', 'Andorra'
}

export interface User {
  username: string;
  password: string;
  email: string;
  suscrito: boolean;
  pais: Pais;
  ciudad: string;
  id?: string;
}
