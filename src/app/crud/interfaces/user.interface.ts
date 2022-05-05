// If we add more, we'll see more on the form
export enum Pais {
  'España', 'Andorra'
}

// Id can be null because when we create a new user, it's json-server that handles the id for us
export interface User {
  username: string;
  password: string;
  email: string;
  suscrito: boolean;
  pais: Pais;
  ciudad: string;
  id?: string;
}
